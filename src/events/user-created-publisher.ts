import { Subjects } from './subjects';
import { Publisher } from './publisher';
import { IUserCreatedEvent } from './interfaces';

export class UserCreatedPublisher extends Publisher<IUserCreatedEvent> {
  readonly subject = Subjects.UserCreated;
}
