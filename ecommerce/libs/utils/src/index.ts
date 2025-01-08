import { JwtService } from "@nestjs/jwt"
import { SetMetadata } from '@nestjs/common';

export const generateToken = async (data: any, key: string, expire: string) => {
    return await new JwtService({ secret: key }).signAsync(data, {
        expiresIn: expire
    })
}

export const verifyToken = async (token: string, key: string) => {
    return await new JwtService({ secret: key }).verifyAsync(token)
}

export const replacePlaceHolder = (template: string, params: object) => {
    let result = template

    Object.keys(params).forEach( key => {
        result = result.replace(new RegExp(`{{${key}}}`, 'g'), params[key])
    })

    return result
}