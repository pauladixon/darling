
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { FriendsComponent } from './friends.component'
import { FriendsListComponent } from './friends-list/friends-list.component'
import { FilterTextboxComponent } from './friends-list/filter-textbox.component'

@NgModule({
  imports: [ CommonModule ],
  declarations: [ FriendsComponent, FriendsListComponent, FilterTextboxComponent ],
  exports: [ FriendsComponent ]
})

export class FriendsModule { }
