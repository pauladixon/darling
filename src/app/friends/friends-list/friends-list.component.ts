import { Component, OnInit, Input } from '@angular/core'

import { IFriend } from '../../shared/interfaces'

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html'
})

export class FriendsListComponent implements OnInit {
  @Input() customers: any[]
  
  filteredFriends: IFriend[] = []
  friendsLoveTotal: number
  currencyCode: string = '<3'

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    
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
