import { Component, OnInit, Input } from '@angular/core';

import { LeaderService } from '../services/leader.service';


import { Leader } from '../shared/leader';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input()
  leaders: Leader[];

  constructor(private leaderservice: LeaderService,
          ) { }

  ngOnInit() {
    this.leaders = this.leaderservice.getLeaders();
  }



}
