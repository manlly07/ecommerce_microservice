import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class InfoMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("INFO MIDDLEWARE");

    // Lấy thông tin từ request
    const user_login_ip = req.ip;
    const user_agent = req.get('User-Agent');
    const user_id = req.headers['x-client-id'] ?? null;

    // Thêm thông tin vào request (không thay đổi request.body)
    req.body = { ...req.body, user_login_ip, user_agent, user_id };

    // Tiếp tục với middleware tiếp theo hoặc controller
    next();
  }
}
