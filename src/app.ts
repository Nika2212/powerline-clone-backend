import * as express from 'express';
import { APIRoutes } from './routes/api.route';

export class Application {
  public static App: Application;

  private readonly express: express.Application;

  constructor() {
    this.express = express();

    this.config();
    this.setRoutes();
    this.listen();
  }

  private listen(port: number = 3000): void {
    this.express.listen(port, () => console.log('Application running at: http://localhost:' + port));
  }

  private config(): void {
    this.express.disable('x-powered-by');
  }

  private setRoutes(): void {
    new APIRoutes(this.express).route();
  }
}
