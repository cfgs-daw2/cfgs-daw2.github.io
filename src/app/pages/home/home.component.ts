import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/app';

import { FirebaseAuthService } from '../../services/firebaseauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user: firebase.User;

  constructor(private fireauth: FirebaseAuthService) { }

  ngOnInit(): void {
    this.fireauth.user.subscribe(
      (originalUser: firebase.User) => {
        this.user = originalUser;
        console.log("------- DADES DE L'USUARI -------");
        console.log(this.user);
        console.log("---------------------------------");

      }
    );
  }

}
