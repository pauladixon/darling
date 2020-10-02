import { Component, OnInit } from '@angular/core'

import { IFriend } from '../../shared/interfaces'

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html'
})

export class FriendsListComponent implements OnInit {
  
  filteredFriends: IFriend[] = []
  friendsLoveTotal: number
  currencyCode: string = '<3'

  constructor() { }

  ngOnInit() {
    this.filteredFriends = [
      { id: 1, name: 'joann ahn', city: 'los angeles', loveTotal: 999, friendSince: new Date(2010, 8, 10) },
      { id: 2, name: 'tomas diaz', city: 'el sereno', loveTotal: 199, friendSince: new Date(2020, 6, 22)},
      { id: 3, name: 'hanna denison', city: 'venice', loveTotal: 499, friendSince: new Date(2018, 2, 31)},
      { id: 4, name: 'isa martinez', city: 'pasadena', loveTotal: 299, friendSince: new Date(2020, 3, 3)},
    ]

  }

  calculateLove() {
    this.friendsLoveTotal = 0
    this.filteredFriends.forEach((friend: IFriend) => {
      this.friendsLoveTotal += friend.loveTotal
    })
  }
}
