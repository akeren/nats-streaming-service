import { IEvent } from './interfaces';
import { JSONCodec, NatsConnection } from 'nats';

export abstract class Publisher<T extends IEvent> {
  abstract subject: T['subject'];
  private connection: NatsConnection;

  constructor(connection: NatsConnection) {
    this.connection = connection;
  }

  async publish(data: T['data']): Promise<void> {
    return await this.connection.publish(this.subject, this.toJSON(data));
  }

  private toJSON(data: T['data']) {
    return JSONCodec().encode(data);
  }
}
