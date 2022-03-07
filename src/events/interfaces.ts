import { Subjects } from './subjects';

export interface IUserCreatedEvent {
  subject: Subjects.UserCreated;
  data: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    age: number;
  };
}

export interface IEvent {
  subject: Subjects;
  data: any;
}
