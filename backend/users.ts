export class User {
    constructor(
        public email: string,
        public name: string,
        private password: string
    ) { }

    matches(user: User): boolean {
        return user !== undefined
            && user.email === this.email
            && user.password === this.password
    }
}

export const Users = {
    'admin@meatapp.com': new User('admin@meatapp.com', 'Administrator', 'admin123'),
    'user@meatapp.com': new User('user@meatapp.com', 'User', 'user123')
}
