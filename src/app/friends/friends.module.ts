
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import { SharedModule } from '../shared/shared.module'
import { FriendsComponent } from './friends.component'
import { FriendsListComponent } from './friends-list/friends-list.component'
import { FilterTextboxComponent } from './friends-list/filter-textbox.component'
import { FriendsRoutingModule } from './friends-routing.module'

@NgModule({
  imports: [ CommonModule, SharedModule, FormsModule, FriendsRoutingModule ],
  declarations: [ FriendsComponent, FriendsListComponent, FilterTextboxComponent ],
  exports: [ FriendsComponent ]
})

export class FriendsModule { }
 