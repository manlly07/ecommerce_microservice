import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDTO, QueryDTO } from 'y/dtos';
import { UserRepository } from 'y/repositories/user.repository';
import { generateToken } from 'y/utils';
import { DEFAULT_TIME_EXPIRATION_EMAIL } from 'y/constants';

@Injectable()
export class UsersService {
    constructor(private _userRepository: UserRepository) {}

    async findAll(query: QueryDTO) {
        const { search, page, perPage, sortBy, sortOrder } = query;

        const pageNumber = parseInt(page.toString(), 10);
        const perPageNumber = parseInt(perPage.toString(), 10);

        const skip = (pageNumber - 1) * perPageNumber;
        const take = perPageNumber;

        return await this._userRepository.findAll({
            skip,
            take,
        });
    }

    async register(dto: LoginDTO) {
        const { user_email } = dto;
        const foundUser = await this._userRepository.findByEmail(user_email);

        if (foundUser) {
            throw new BadRequestException('User already exists');
        }

        const token = await generateToken({ user_email }, process.env.SECRET_KEY_OTP, DEFAULT_TIME_EXPIRATION_EMAIL.toString());
        
        const data = {
            user_email: user_email,
            token,
        }
        
        return data;
    }
}
