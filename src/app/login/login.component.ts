import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public authStatus: Boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn(email, password) {
    if (email === 'test@email.com' && password === 'password') {
      this.authService.signIn().then(
        () => {
          console.log('Sign in successful!');
          this.authStatus = this.authService.isAuth;
          this.router.navigate(['stats']);
        }
      );
    }
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }
}
