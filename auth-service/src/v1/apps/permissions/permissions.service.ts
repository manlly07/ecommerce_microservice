import { Injectable } from '@nestjs/common';
import { PermissionsRepository } from 'src/v1/repositories/permission.repository';

@Injectable()
export class PermissionsService {
    constructor(private _permissionsRepository: PermissionsRepository) {}
    
    async findAllPermissions() {
        return this._permissionsRepository.findAll();
    }

    async createPermission(data: any) {
        return this._permissionsRepository.create( data );
    }

    async createPermissions(data: any) {
        return this._permissionsRepository.createMany({ data });
    }

    async updatePermission(permission_id: string, data: any) {
        
        return this._permissionsRepository.update({ where: { 
            id: permission_id,
        }, data });

    }

    async deletePermission(permission_id: string) {
        return this._permissionsRepository.update({ where: { 
            id: permission_id,
        }, data: {
            is_deleted: true,
            deleted_at: new Date()
        }});
    }

    async findPermissionByName(permission_name: string) {
        return this._permissionsRepository.findByName(permission_name);
    }

    async findPermissionById(permission_id: string) {
        return this._permissionsRepository.findById({
            id: permission_id
        });
    }
}