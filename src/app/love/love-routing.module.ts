import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { LoveComponent } from './love.component'

const routes: Routes = [
    { path: 'love/:id', component: LoveComponent }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})

export class LoveRoutingModule {

}