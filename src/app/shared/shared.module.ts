import { NgModule } from '@angular/core'

import { CapitalizePipe } from './capitaliza.pipe'

@NgModule({
    declarations: [ CapitalizePipe ],
    exports: [ CapitalizePipe ]
})
export class SharedModule {}