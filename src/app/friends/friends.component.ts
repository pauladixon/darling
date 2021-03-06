
import { Component, OnInit } from '@angular/core'

import { IFriend } from '../shared/interfaces'
import { DataService } from '../core/data.service'

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html'
})

export class FriendsComponent implements OnInit {
  title: string
  people: any[]

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.title = 'friends'
    this.dataService.getFriends()
      .subscribe((friends: IFriend[]) => this.people = friends)

    // this.people = [
    //   { id: 1, name: 'joann ahn', city: 'los angeles', loveTotal: 999, friendSince: new Date(2010, 8, 10) },
    //   { id: 2, name: 'tomas diaz', city: 'el sereno', loveTotal: 199, friendSince: new Date(2020, 6, 22)},
    //   { id: 3, name: 'hanna denison', city: 'venice', loveTotal: 499, friendSince: new Date(2018, 2, 31)},
    //   { id: 4, name: 'isa martinez', city: 'pasadena', loveTotal: 299, friendSince: new Date(2020, 3, 3)},
    // ]
  }
}
