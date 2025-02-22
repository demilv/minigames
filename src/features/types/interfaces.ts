export interface User {
    _id: string,
    name: string,
    email: string,
    phone: string,
    pass: string,
    owned: string[]
}

export interface Score {
    _id: string,
    score: number,
    userId: string,
    gameId: string
}