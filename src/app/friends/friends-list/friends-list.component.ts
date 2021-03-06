import { Component, OnInit, Input } from '@angular/core'
import { SorterService } from 'src/app/core/sorter.service'

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
  
  filteredFriends: any[] = []
  friendsLoveTotal: number
  currencyCode: string = 'USD'

  constructor(private sorterService: SorterService) { }

  ngOnInit() {

  }

  calculateLove() {
    this.friendsLoveTotal = 0
    this.filteredFriends.forEach((friend: IFriend) => {
      this.friendsLoveTotal += friend.loveTotal
    })
  }

  filter(data: string) {
    if (data) {
      this.filteredFriends = this.friends.filter((friend: IFriend) => {
        return friend.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
               friend.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
               friend.loveTotal.toString().indexOf(data) > -1
      })
    } else {
      this.filteredFriends = this.friends
    }
    this.calculateLove()
  }

  sort(prop: string) {
    this.sorterService.sort(this.filteredFriends, prop)
  }
}
