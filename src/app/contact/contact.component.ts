import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { Feedback, ContactType } from '../shared/feedback';
import { flyInOut, visibility, expand } from '../animations/app.animation';
import { FeedbackService } from '../services/feedback.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
'[@flyInOut]': 'true',
'style': 'display: block;'
},
animations: [
  flyInOut(),
	visibility(),
	expand()
]
})
export class ContactComponent implements OnInit {

  	feedbackcopy = null;
		showLoader = false;
    feedbackForm: FormGroup;
    feedback: Feedback;
    contactType = ContactType;
	  visibility = 'shown';
	  submitted = true;
    formErrors = {
     'firstname': '',
     'lastname': '',
     'telnum': '',
     'email': ''
   };

   validationMessages = {
   'firstname': {
     'required':      'First Name is required.',
     'minlength':     'First Name must be at least 2 characters long.',
     'maxlength':     'FirstName cannot be more than 25 characters long.'
   },
   'lastname': {
     'required':      'Last Name is required.',
     'minlength':     'Last Name must be at least 2 characters long.',
     'maxlength':     'Last Name cannot be more than 25 characters long.'
   },
   'telnum': {
     'required':      'Tel. number is required.',
     'pattern':       'Tel. number must contain only numbers.'
   },
   'email': {
     'required':      'Email is required.',
     'email':         'Email not in valid format.'
   },
 };

   constructor(private fb: FormBuilder,  private feedbackservice: FeedbackService, private restangular: Restangular) {
     this.createForm();
   }

   ngOnInit() {
   }

   createForm() {
      this.feedbackForm = this.fb.group({
        firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)] ],
        telnum: ['', [Validators.required, Validators.pattern] ],
        email: ['', [Validators.required, Validators.email] ],
        agree: false,
        contacttype: 'None',
        message: ''
      });
      this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

      this.onValueChanged(); // (re)set validation messages now

    }

    onValueChanged(data?: any) {
      if (!this.feedbackForm) { return; }
  const form = this.feedbackForm;
  for (const field in this.formErrors) {
    // clear previous error message (if any)
    this.formErrors[field] = '';
    const control = form.get(field);
    if (control && control.dirty && !control.valid) {
      const messages = this.validationMessages[field];
      for (const key in control.errors) {
        this.formErrors[field] += messages[key] + ' ';
      }
    }
  }
}

    onSubmit() {
			var self = this;
			this.showLoader = true;
      this.feedback = this.feedbackForm.value;

			console.log(this.feedback);
			console.log(this.showLoader);
		  this.feedbackservice.submitFeedback(this.feedback)
			.subscribe(feedback => {
				this.feedbackcopy = feedback;
				this.showLoader = false;
	    	console.log(this.feedbackcopy + this.showLoader);
				 this.visibility = 'hidden'; //hides form
		  		this.submitted = true;
				 console.log(this);
				setTimeout(function() {
					console.log(self);
					 self.showLoader = false;
				   self.visibility = 'shown';
			     self.submitted = false;
			}, 5000); //end timeOut
       console.log('out of timer');

	});
      this.feedbackForm.reset({
        firstname: '',
        lastname: '',
        telnum: '',
        email: '',
        agree: false,
        contacttype: 'None',
        message: ''
      });
    };

 }
