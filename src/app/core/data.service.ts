import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

import { IFriend, ILove } from '../../app/shared/interfaces'

@Injectable()
export class DataService {

    baseUrl: string = 'assets/'

    constructor(private http: HttpClient) { }

    getFriends() : Observable<IFriend[]> {
        return this.http.get<IFriend[]>(this.baseUrl + 'friends.json')
            .pipe(
                catchError(this.handleError)
            )
    }

    getFriend(id: number) : Observable<IFriend> {
        return this.http.get<IFriend[]>(this.baseUrl + 'friends.json')
            .pipe(
                map(friends => {
                    let friend = friends.filter((friend: IFriend) => friend.id === id)
                    return (friend && friend.length) ? friend[0] : null
                }),
                catchError(this.handleError)
            )
    }

    getLove(id: number) : Observable<ILove[]> {
        return this.http.get<ILove[]>(this.baseUrl + 'love.json')
            .pipe(
                map(love => {
                    let friendLove = love.filter((love: ILove) => love.friendId === id)
                    return friendLove
                }),
                catchError(this.handleError)
            )
    }


    private handleError(error: any) {
        console.error('server error:', error)
        if (error.error instanceof Error) {
            const errMessage = error.error.errMessage
            return Observable.throw(errMessage)
        }
        return Observable.throw(error || 'Node.js server error')
    }   
}