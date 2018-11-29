import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {CommunicationService} from '../../services/communication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signinForm: FormGroup;
  errorMessage: string;
  @Output() alertLogin = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private communicationService: CommunicationService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signinForm.get('email').value;
    const password = this.signinForm.get('password').value;

    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/home']);
        this.communicationService.emitChange('success');
      },
      () => {
        this.communicationService.emitChange('failed');
      }
    );
  }

}
