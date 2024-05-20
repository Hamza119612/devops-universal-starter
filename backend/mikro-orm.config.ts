import { MongoHighlighter } from '@mikro-orm/mongo-highlighter';
import * as dotenv from 'dotenv';

dotenv.config();
console.log("🚀 ~ dotenv.config():", process.env.DB_NAME)

export default {
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  dbName: process.env.DB_NAME,
  type: 'mongo',
  clientUrl: process.env.CLIENT_URL,
  highlighter: new MongoHighlighter(),
  debug: true,
};
