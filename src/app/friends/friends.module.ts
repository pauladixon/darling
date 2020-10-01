import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { FriendsListComponent } from './friends-list/friends-list.component'
import { FriendsComponent } from './friends.component'

@NgModule({
  declarations: [ FriendsComponent, FriendsListComponent ],
  imports: [ CommonModule ],
  exports: [ FriendsComponent ]
})

export class FriendsModule { }
