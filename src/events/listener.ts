import { JSONCodec, Msg, NatsConnection } from 'nats';
import { IEvent } from './interfaces';

export abstract class Listener<T extends IEvent> {
  abstract subject: T['subject'];
  private connection: NatsConnection;
  abstract queueGroup?: string;
  abstract max?: number;
  abstract timeout?: number;

  abstract OnMessage(data: T['data'], message: Msg): void;
  abstract parseStringMessage?: (message: Msg) => string;

  constructor(connection: NatsConnection) {
    this.connection = connection;
  }

  subscriptionOptions(): object {
    return {
      queue: this.queueGroup,
      max: this.max,
      timeout: this.timeout,
    };
  }

  async listen(): Promise<void> {
    const subscription = await this.connection.subscribe(this.subject, {
      ...this.subscriptionOptions(),
    });

    subscription.callback = (err, msg) => {
      if (err) {
        throw new Error(err.message);
      }

      console.log(`Message received: ${this.subject} | ${this.queueGroup}`);

      const parsedData = this.parseJsonMessage(msg);

      this.OnMessage(parsedData, msg);
    };
  }

  parseJsonMessage(message: Msg): any {
    return JSONCodec().decode(message.data);
  }
}
