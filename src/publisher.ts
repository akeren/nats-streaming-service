import { connectToServer } from './config/connection';
import { UserCreatedPublisher } from './events/user-created-publisher';

console.clear();

(async (): Promise<void> => {
  const nc = await connectToServer('nats://127.0.0.1:4222');

  const publisher = new UserCreatedPublisher(nc);

  await publisher.publish({
    id: 1,
    firstName: 'Juliana',
    lastName: 'Monique',
    email: 'monique@dev.io',
    phone: '123',
    age: 2,
  });
})();
