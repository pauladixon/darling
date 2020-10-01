import { StringMap } from '@angular/compiler/src/compiler_facade_interface'
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})

export class FriendsComponent implements OnInit {
  title: string
  people: any[]
  constructor() { }

  ngOnInit() {
    this.title = 'friends'
    this.people = [
      { id: 1, name: 'john doe', city: 'Phoenix', orderTotal: 9.99, friendSince: new Date(2014, 7, 10) },
      { id: 2, name: 'jane doe', city: 'Chandler', orderTotal: 19.99, friendSince: new Date(2017, 2, 22)},
      { id: 3, name: 'michelle thomas', city: 'Seattle', orderTotal: 99.99, friendSince: new Date(2002, 10, 31)},
      { id: 4, name: 'jim thomas', city: 'New York', orderTotal: 599.99, friendSince: new Date(2002, 10, 31)},
    ]
  }

}
