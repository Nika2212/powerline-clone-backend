import * as express from 'express';

export class APIRoutes {
  constructor(private app: express.Application) {}

  public route(): void {
    this.app.route('/api/test').get((req: any, res: any) => {
      res.send('OK');
    })
  }
}
