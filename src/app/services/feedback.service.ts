import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import server url and HTTP MSG service
import { baseURL } from '../shared/baseurl';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { Feedback, ContactType } from '../shared/feedback';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
//for error with Http Module
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class FeedbackService {

  constructor( private restangular: Restangular) { }

	feedback: Feedback;
	feedbackForm: FormGroup;

	submitFeedback(model: any): Observable<Feedback> {
	return this.restangular.all('feedback').post(model, this.feedback);
	};
}
