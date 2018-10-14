import { apiConfig } from './apiConfig';
import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'

export const handleAuthorization = (req: Request, res: Response, next) => {
    const token = extractToken(req)
    if (!token) {
        res.setHeader('WWW-Authenticate', 'Bearer token_type="JWT"')
        res.status(401).json({ message: "Você precisa se autenticar." })
    } else {
        jwt.verify(token, apiConfig.secret, (error, decoder) => {
            if (decoder) {
                next()
            } else {
                res.status(403).json({ message: "Não autorizado." })
            }
        })
    }

    function extractToken(req: Request): string {
        let token = undefined

        if (req.headers && req.headers.authorization) {
            // Authorization: Bearer zzz.zzz.zzz
            const parts: string[] = req.headers.authorization.split(' ')
            if (parts.length === 2 && parts[0] === 'Bearer') {
                token = parts[1]
            }
        }

        return token
    }
}
