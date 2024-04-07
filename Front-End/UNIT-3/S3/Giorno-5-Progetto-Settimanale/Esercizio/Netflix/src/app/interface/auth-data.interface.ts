export interface AuthData {
    accessToken: string,
    user: {
        username:string,
        id:string,
        email:string,
        favorites?: number[],
        admin?: boolean
    }
}
