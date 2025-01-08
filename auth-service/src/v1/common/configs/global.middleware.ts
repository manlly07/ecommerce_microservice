import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class GlobalMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    // Skip JSON formatting for /metrics
    if (req.url === '/metrics') {
      return next();
    }

    // Add your other middleware logic here
    next();
  }
}