import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html'
})

export class FriendsListComponent implements OnInit {
  filteredFriends: any[] = []
  friendsLoveTotal: number
  currencyCode: string = '<3'
  
  constructor() { }

  ngOnInit() {

  }
}
