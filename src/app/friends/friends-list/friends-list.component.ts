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

  }

  calculateLove() {
    this.friendsLoveTotal = 0
    this.filteredFriends.forEach((friend: IFriend) => {
      this.friendsLoveTotal += friend.loveTotal
    })
  }
}
