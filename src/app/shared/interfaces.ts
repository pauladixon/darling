export interface IFriend {
    id: number
    name: string
    city: string
    loveTotal?: number
    friendSince: any
}

export interface ILove {
    friendId: number
    loveTokens: ILoveToken[]
}

export interface ILoveToken {
    id: number
    tokenName: string
    tokenCost: number
}