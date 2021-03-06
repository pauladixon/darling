import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { SharedModule } from '../shared/shared.module'
import { LoveComponent } from './love.component'
import { LoveRoutingModule } from './love-routing.module'

@NgModule({
    imports: [ CommonModule, FormsModule, SharedModule, LoveRoutingModule, RouterModule ],
    declarations: [ LoveComponent ]
})

export class LoveModule {}