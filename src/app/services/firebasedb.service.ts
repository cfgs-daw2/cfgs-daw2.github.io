import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseDBService {

  constructor(private firestore: AngularFirestore) { }

  /**
   * USERS MANAGEMENT
   */
  checkAllowedUser(email: string): Observable<any[]> {
    return this.firestore.collection("allowed_users", ref => this.queryByEmail(email, ref)).valueChanges();
  }

  private queryByEmail(email: string, ref: any) {
    return ref.where("email", "==", email);
  }

  /**
   * PORTFOLIO CONTENT MANAGEMENT
   */
  getPortfolio(): Observable<any[]> {
    return this.firestore.collection("portolio").valueChanges();
  }

  addPortfolioElement(data: string, tagsStr: string) {
    let tags: string[];
    tags = tagsStr.split(' ');

    this.firestore.collection("portfolio").add({
        content: data,
        tags: tags
      }
    );
  }

}
