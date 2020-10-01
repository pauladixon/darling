import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppComponent } from './app.component';
import { FriendsComponent } from './friends/friends.component'

@NgModule({
  declarations: [ AppComponent, FriendsComponent ],
  imports: [ BrowserModule ],
  bootstrap: [AppComponent]
})

export class AppModule { }
