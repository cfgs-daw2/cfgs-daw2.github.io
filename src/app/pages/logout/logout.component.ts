import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseAuthService } from 'src/app/services/firebaseauth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private fireauth: FirebaseAuthService, private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.fireauth.logout();
    this.router.navigate(['/home']);
  }

}
