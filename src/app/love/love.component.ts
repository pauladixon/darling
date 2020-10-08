import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute, Params } from '@angular/router'

import { DataService } from '../core/data.service'
import { IFriend, ILove, ILoveToken } from '../shared/interfaces'

@Component({
    selector: 'app-love',
    templateUrl: './love.component.html',
    styleUrls: [ './love.component.css' ]
})

export class LoveComponent implements OnInit {

    love: ILove[] = []
    friend: IFriend

    constructor(private dataService: DataService,
                private route: ActivatedRoute) {}
 
    ngOnInit() {
        let id = +this.route.snapshot.paramMap.get('id')
        this.dataService.getLove(id).subscribe((love: ILove[]) => {
            this.love = love
        })


        this.dataService.getFriend(id).subscribe((friend: IFriend) => {
            this.friend = friend
        })
    }
}