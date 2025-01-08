import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoginResponseDto } from 'y/dtos';
import { LoginDTO } from 'y/dtos/login.dto';
import { QueryDTO } from 'y/dtos/query.dto';

@Injectable()
export class UsersService {
    constructor(
        @Inject('USERS_SERVICE') private readonly _userClient: ClientProxy,
        @Inject('NOTIFICATION_SERVICE') private readonly _notificationClient: ClientProxy
    ) {}

    findAll(query: QueryDTO) {
        return this._userClient.send('users.findAll', query);
    }

    register(dto: LoginDTO) {
        console.log(process.env.QUEUE_URL);
        this._userClient.send('users.register', dto).subscribe((data) => {
            console.log(data);
            this._notificationClient.emit('noti.register', data);
        })
    }
}
