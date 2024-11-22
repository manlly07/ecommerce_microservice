import { BadRequestException, Injectable } from '@nestjs/common';
import { RolesRepository } from 'src/v1/repositories/roles.repository';
@Injectable()
export class RolesService {
    constructor(private _rolesRepository: RolesRepository) {}

    async findAllRoles() {
        return this._rolesRepository.findAll();
    }

    async createRole(data: any) {
        const foundRole = await this._rolesRepository.findByName(data.role_name)
        if(foundRole) throw new BadRequestException('Role already exists');

        return this._rolesRepository.create(data);
    }

    async updateRole(role_id: string, data: any) {
        
        return this._rolesRepository.update({ where: { 
            id: role_id,
        }, data });
        
    }

    async deleteRole(role_id: string, condition: Object) {
        return this._rolesRepository.update({ where: { 
            id: role_id,
            ...condition
        }, data: {
            is_deleted: true,
            deleted_at: new Date()
        }});
    }
}
