import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "./../services/firebase.service";
@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.css"],
})
export class ForgotPasswordComponent implements OnInit {
  authError: any;
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.eventAuthError$.subscribe(
      (data) => (this.authError = data)
    );
  }

  forgotPassword(forgotPasswordForm) {
    this.firebaseService.forgotPassword(forgotPasswordForm.value.inputEmail);
  }
}
