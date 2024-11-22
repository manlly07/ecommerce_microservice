import { BadGatewayException, Injectable } from '@nestjs/common';
import { PermissionsRepository } from 'src/v1/repositories/permission.repository';
import { RolePermissionRepository } from 'src/v1/repositories/rolePermission.repository';
import { RolesRepository } from 'src/v1/repositories/roles.repository';

@Injectable()
export class RolePermissionService {
    constructor(
        private _rolePermissionRepository: RolePermissionRepository,
        private _rolesRepository: RolesRepository,
        private _permissionsRepository: PermissionsRepository
    ) {}

    async assignRolePermission(data: any) {
        console.log(data)
        const { role_id, permission_id } = data;
        const foundRoleId = await this._rolesRepository.findById({
            id: role_id,
        });
        if (!foundRoleId) throw new BadGatewayException(`Role ${role_id} not found`);

        const foundPermissionId = await this._permissionsRepository.findById({
            id: permission_id
        });
        if (!foundPermissionId) throw new BadGatewayException(`Permission ${permission_id} not found`);

        return await this._rolePermissionRepository.create( data );
    }

    async assignRolePermissions(data: any) {
        return await this._rolePermissionRepository.createMany({ data });
    }

    async getRolePermissions() {
        return await this._rolePermissionRepository.findAll();
    }

    async getPermissionByRole() {
        const roles = await this._rolesRepository.findAll({
            where: {
                is_deleted: false
            },
            include: {
                role_permissions: {
                    include: {
                        permission: true
                    }
                },
                role_user: true,
                created_at: false,
                updated_at: false,
                deleted_at: false
            }
        })

        return roles;
    }
}
