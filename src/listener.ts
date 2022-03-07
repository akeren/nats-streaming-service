import { connectToServer } from './config/connection';
import { UserCreatedListener } from './events/user-created-listener';

console.clear();

(async (): Promise<void> => {
  const nc = await connectToServer('nats://127.0.0.1:4222');

  new UserCreatedListener(nc).listen();
})();
