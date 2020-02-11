import { Application } from './src/app';
import * as dotenv from 'dotenv';

dotenv.config();
Application.App = new Application();
