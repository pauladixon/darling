
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FriendsModule } from './friends/friends.module'
import { SharedModule } from './shared/shared.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [ BrowserModule, FriendsModule, SharedModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
