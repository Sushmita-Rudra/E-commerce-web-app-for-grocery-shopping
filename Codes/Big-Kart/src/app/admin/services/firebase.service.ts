import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  user$: Observable<firebase.User>;
  newUser: any;
  constructor(
    private firebaseAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.user$ = firebaseAuth.authState;
  }

  createUser(user) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((userCredential) => {
        this.newUser = user;

        userCredential.user.updateProfile({
          displayName: user.firstName + " " + user.lastName,
        });
        this.insertUser(userCredential).then(() => {
          this.router.navigate(["/home"]);
        });
      })
      .catch((error) => {
        this.eventAuthError.next(error);
      });
  }

  insertUser(userCredential: firebase.auth.UserCredential) {
    return this.db.object(`users/${userCredential.user.uid}`).update({
      email: this.newUser.email,
      firstname: this.newUser.firstName,
      lastName: this.newUser.lastName,
    });
  }

  logInUser(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        if (userCredential) {
          this.router.navigate(["/home"]);
        }
      })
      .catch((error) => {
        this.eventAuthError.next(error);
      });
  }

  forgotPassword(email: string) {
    this.firebaseAuth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert(`A password reset email is sent to your email address.`);
      })
      .catch((error) => {
        this.eventAuthError.next(error);
      });
  }

  logOutUser() {
    return this.firebaseAuth.signOut();
  }
}
