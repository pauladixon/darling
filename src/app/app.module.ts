
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { FriendsModule } from './friends/friends.module'
import { AppComponent } from './app.component'

@NgModule({
  imports: [ BrowserModule, FriendsModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
