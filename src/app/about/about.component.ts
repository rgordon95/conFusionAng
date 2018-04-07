import { Component, OnInit, Inject } from '@angular/core';

import { LeaderService } from '../services/leader.service';
import { Http, Response } from '@angular/http';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { flyInOut } from '../animations/app.animation';
import { expand } from '../animations/app.animation';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from '../services/process-httpmsg.service';
import { RestangularModule, Restangular } from 'ngx-restangular';

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
  leader: Leader;
  leaderErrMess: string;
  leaders: Leader[];

  constructor(private http: Http,
              private leaderservice: LeaderService, private restangular: Restangular, private processHTTPMsgService: ProcessHTTPMsgService,
@Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  this.leaderservice.getLeaders()
    .subscribe(leaders => this.leaders = leaders,
    errmess => this.leaderErrMess = <any>errmess);
  }



}
