import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';

import firebase from 'firebase/app';

import { FirebaseAuthService } from 'src/app/services/firebaseauth.service';
import { FirebaseDBService } from 'src/app/services/firebasedb.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginError: boolean = false;
  public allowedUserError: boolean = false;

  constructor(private fireauth: FirebaseAuthService,
    private firestore: FirebaseDBService,
    private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.fireauth.login().then(
      (user: firebase.auth.UserCredential) => {
        //Codi quan s'ha produït un login correcte
        let email = user.user.email;
        this.firestore.checkAllowedUser(email).pipe(take(1)).subscribe(
          (originalEmails: any[]) => {
            if(originalEmails.length == 1) {
              //Correcte
              this.loginError = false;
              this.allowedUserError = false;
              this.router.navigate(['/home']);
            } else {
              //Error de login
              this.loginError = true;
              this.allowedUserError = true;
              this.fireauth.logout();
            }
          }
        );
      }
    ).catch(
      (error: any) => {
        //Codi quan no s'ha pogut fer login per error de credencials
      }
    )
  }

}
