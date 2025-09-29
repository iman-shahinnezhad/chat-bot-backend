import { registerAs } from '@nestjs/config';

export default registerAs('mongodb', () => ({
  uri: process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/gradegy',
}));
