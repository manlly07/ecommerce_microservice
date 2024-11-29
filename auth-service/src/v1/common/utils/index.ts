import { JwtService } from "@nestjs/jwt"
import { SetMetadata } from '@nestjs/common';

export const replacePlaceHolder = (template: string, params: object) => {
    let result = template

    Object.keys(params).forEach( key => {
        result = result.replace(new RegExp(`{{${key}}}`, 'g'), params[key])
    })

    return result
}

export const generateToken = async (data: any, key: string, expire: string) => {
    return await new JwtService({ secret: key }).signAsync(data, {
        expiresIn: expire
    })
}

export const verifyToken = async (token: string, key: string) => {
    return await new JwtService({ secret: key }).verifyAsync(token)
}

export const getSelectData = (select: Array<string>) => {
    return Object.fromEntries(select.map( field => [field, true]));
}

export const unGetSelectData = (select: Array<string>) => {
    return Object.fromEntries(select.map( field => [field, false]));
}

export const getSelectDataFromObject = (select: object, params: Array<string>) => {
    return Object.fromEntries(params.map( field => [field, select[field] || '']));
} 

export const unGetSelectDataFromObject = (select: object, params: Array<string>) => {
    const newObject = { ...select };
    
    params.forEach(field => {
        delete newObject[field];
    });
    
    return newObject;
}


export const updateNestedObjectParser = (obj: object) => {
    const final = {}

    Object.keys(obj).forEach( k => {
        if( typeof obj[k] === 'object' && !Array.isArray(obj[k]) ) {
            const response = updateNestedObjectParser(obj[k])
            Object.keys(response).forEach( a => {
                final[`${k}.${a}`] = response[a]
            })
        }else {
            final[k] = obj[k]
        }
    })

    return final
}

export const updateNestedArrayParser = (data: Array<object>) => {
    // Kiểm tra xem dữ liệu có hợp lệ không
    if (!Array.isArray(data)) {
        console.error("Dữ liệu không hợp lệ!");
        return [];
    }

    // Kết quả chứa dữ liệu sau khi unwind
    const result = [];

    // Duyệt qua mỗi phần tử trong mảng user_roles
    data.forEach((userRole: any) => {
        // Duyệt qua mỗi phần tử trong mảng role_permissions
        userRole.role.role_permissions.forEach(permission => {
            // Thêm permission_name vào mảng kết quả
            result.push(permission.permission.permission_name);
        });
    });


    return result;
}

export const SuccessResponse = (
    message: string,
    data: any = {},
    statusCode: number = 200,
) => ({
    success: true,
    message,
    statusCode,
    data,
});  


export const Permissions = (...permissions: string[]) => SetMetadata('permissions', permissions);
