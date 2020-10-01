import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component';
import { FriendsListComponent } from './friends/friends-list/friends-list.component'

@NgModule({
  declarations: [ AppComponent, FriendsComponent, FriendsListComponent ],
  imports: [ BrowserModule ],
  bootstrap: [AppComponent]
})

export class AppModule { }
