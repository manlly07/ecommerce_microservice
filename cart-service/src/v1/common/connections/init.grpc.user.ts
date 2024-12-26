import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { firstValueFrom, Observable } from 'rxjs';
import { join } from 'path';

interface UserGrpcService {
  findUserById(data: { userId: string }): Observable<{ exists: boolean }>;
}

@Injectable()
export class UserClientService implements OnModuleInit {
  @Client({
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, '/init.user.proto'),
    },
  })
  private client: ClientGrpc;
  private userService: UserGrpcService;

  onModuleInit() {
    this.userService = this.client.getService<UserGrpcService>('UserService');
  }

  async isUserExists(userId: string): Promise<boolean> {
    try {
      console.log(userId)
      const response  = await firstValueFrom(this.userService.findUserById({ userId: userId }));
      return response.exists;
    } catch (error) {
      console.log(error);
      return false;      
    }
  }
}
