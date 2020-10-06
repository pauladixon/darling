import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'

import { IFriend, ILove } from '../../app/shared/interfaces'

@Injectable()
export class DataService {

    baseUrl: string = 'assets/'

    constructor(private http: HttpClient) { }

    getCustomers() : Observable<IFriend[]> {
        return this.http.get<IFriend[]>(this.baseUrl + 'friends.json')
            .pipe(
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