import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/friends'}
    { path: '**', pathMatch: 'full', redirectTo: '/friends'}
]

@NgModule({

})


export class AppRoutingModule {

}