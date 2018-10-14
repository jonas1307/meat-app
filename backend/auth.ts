import { Request, Response } from 'express'
import { User, Users } from './users'
import * as jwt from 'jsonwebtoken'

export const handleAuthentication = (req: Request, res: Response) => {

    const user: User = req.body

    if (isValid(user)) {
        const dbUser = Users[user.email]
        const token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, 'meat-app-password')
        res.json({ name: dbUser.name, email: dbUser.email, accessToken: token })
    } else {
        res.status(403).json({ message: "Dados inválidos." })
    }

    function isValid(user: User): boolean {

        if (!user) {
            return false
        }

        const dbUser = Users[user.email]

        return dbUser !== undefined && dbUser.matches(user)
    }
}
