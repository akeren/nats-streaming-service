import { Msg } from 'nats';
import { Listener } from './listener';
import { IUserCreatedEvent } from './interfaces';
import { Subjects } from './subjects';

export class UserCreatedListener extends Listener<IUserCreatedEvent> {
  parseStringMessage?: ((message: Msg) => string) | undefined;
  max?: number | undefined;
  timeout?: number | undefined;
  readonly subject = Subjects.UserCreated;
  queueGroup = 'user-service';

  OnMessage(data: IUserCreatedEvent['data'], message: Msg): void {
    console.log(`Event data`, data);

    // business logic goes here...
  }
}
