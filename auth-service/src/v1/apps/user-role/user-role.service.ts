import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRoleRepository } from 'src/v1/repositories/userRole.repository';
@Injectable()
export class UserRoleService {
    constructor(
        private readonly _userRoleRepository: UserRoleRepository
    ) {

    }
    async getRoles() {
        return this._userRoleRepository.findAll();
    }

    async assignRole(user_id: string, role_id: string) {
        return this._userRoleRepository.create({
            user_id,
            role_id,
        });
    }

    async getUserRoles(user_id: string) {
        const data = await this._userRoleRepository.findRoleByUserId({
            where: {
                user_id,
            },
            include: {
                role: {
                    include: {
                        role_permissions: {
                            include: {
                                permission: true
                            }
                        }
                    }
                }
            }
        })

        if(!data) throw new NotFoundException();

        // Kiểm tra xem "role" và "role_permissions" có tồn tại hay không
        if (!data.role || !data.role.role_permissions) {
            return []; // Trả về mảng rỗng nếu không có dữ liệu
        }

        // Thực hiện "unwind" nếu tồn tại
        return data.role.role_permissions.map((permission: any) => ({
            user_id: data.user_id || null,
            role_id: data.role_id || null,
            permission_id: permission.permission_id || null,
            role_name: data.role.role_name || null,
            permission_name: permission.permission?.permission_name || null
        }));
    }
}
