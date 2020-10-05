import { Component, OnInit, Input } from '@angular/core'

import { IFriend } from '../../shared/interfaces'

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html'
})

export class FriendsListComponent implements OnInit {
  private _friends: IFriend[] = []
  @Input() get friends(): IFriend[] {
    return this._friends
  }

  set friends(value: IFriend[]) {
    if (value) {
      this.filteredFriends = this._friends = value
      this.calculateLove()
    }
  }
  
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

  sort(prop: string) {
    // a sorter service will handle the sorting
  }
}
