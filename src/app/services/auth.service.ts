import { Injectable } from '@angular/core';

import { AppUser } from '../Models/app-user';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap } from 'rxjs/operators';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public appUser$: Observable<any>;

  constructor(
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFirestore,
    public auth: AngularFireAuth
  ) {
    this.appUser$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.db.doc<AppUser>(`appusers/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  private updateUserData(user: any) {
    const userRef = this.db.doc(`appusers/${user.uid}`);
    const data = {
    name: user.displayName,
    email: user.email,
    photoURL: user.photoURL
    };
    return userRef.set(data, { merge: true });
  }

  async login() {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') 
   || this.router.url;
    localStorage.setItem('returnUrl', returnUrl);
    const credential = await this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    return this.updateUserData(credential.user);
    }
    async logout() {
    await this.auth.signOut().then(() => {
    this.router.navigate(['/']);
    });
  }
}
