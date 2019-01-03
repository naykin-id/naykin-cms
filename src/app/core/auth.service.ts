import { Injectable } from '@angular/core';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Router } from "@angular/router";
import { Observable, of } from 'rxjs';
import { switchMap} from 'rxjs/operators';
// import firebase = require('firebase');

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: Observable<User>;

  // private user: Observable<firebase.User>;
  // private userDetails: firebase.User = null;

  constructor(
    private fireAuth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private router: Router
  ) {
    //// Get auth data, then get firestore user document || null
    this.user = this.fireAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.fireStore.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    )
  }

  doLoginEmail(email, password) {
    // console.log('Login using email');
    // console.log('Email: ' + email);
    // console.log('Password: ' + password);
    const credential = auth.EmailAuthProvider.credential( email, password );
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password)
      .then((credential) => {
        this.updateUserData(credential.user);
      });
  }

  doLoginGoogle() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  doLoginFacebook() {
    const provider = new auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
  }

  doLoginTwitter() {
    const provider = new auth.TwitterAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.fireAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        localStorage.setItem("_userProfile", JSON.stringify(credential.additionalUserInfo.profile))
        this.updateUserData(credential.user);
      });
  }
  
  // isLoggedIn() {
  //   if (this.userDetails == null ) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

  logout() {
    this.fireAuth.auth.signOut()
    .then((res) => {
      localStorage.clear()
      this.router.navigate([''])
    });
  }

  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.fireStore.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    return userRef.set(data, { merge: true })
  }

  // signOut() {
  //   this.fireAuth.auth.signOut().then(() => {
  //       this.router.navigate(['/']);
  //   });
  // }
}
