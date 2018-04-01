import { Component, OnInit, Input } from '@angular/core';

import { LeaderService } from '../services/leader.service';


import { Leader } from '../shared/leader';

import { flyInOut } from '../animations/app.animation';
import { expand } from '../animations/app.animation';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
'[@flyInOut]': 'true',
'style': 'display: block;'
},
animations: [
  flyInOut(),
  expand()
]
})
export class AboutComponent implements OnInit {

  @Input()
  leaders: Leader[];

  constructor(private leaderservice: LeaderService,
          ) { }

  ngOnInit() {
  this.leaderservice.getLeaders()
    .subscribe(leaders => this.leaders = leaders);
  }



}
