import { FirebaseService } from "./../services/firebase.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"],
})
export class LogInComponent implements OnInit {
  authError: any;
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.eventAuthError$.subscribe(
      (data) => (this.authError = data)
    );
  }

  logInUser(logInForm) {
    this.firebaseService.logInUser(
      logInForm.value.inputEmail,
      logInForm.value.inputPassword
    );
  }
}
