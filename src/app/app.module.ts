
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { CoreModule } from './core/core.module'
import { FriendsModule } from './friends/friends.module'
import { LoveModule } from './love/love.module'
import { SharedModule } from './shared/shared.module'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  imports: [ BrowserModule, CoreModule, FriendsModule, LoveModule, SharedModule, AppRoutingModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
