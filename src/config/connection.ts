import { connect, NatsConnection } from 'nats';

export async function connectToServer(url: string): Promise<NatsConnection> {
  try {
    return await connect({ servers: url });
  } catch (error: any) {
    throw new Error(error.message);
  }
}
