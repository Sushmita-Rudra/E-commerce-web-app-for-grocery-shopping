import { FirebaseService } from "./../services/firebase.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"],
})
export class SignUpComponent implements OnInit {
  authError: any;
  constructor(private firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.firebaseService.eventAuthError$.subscribe((data) => {
      this.authError = data;
    });
  }

  createUser(regForm) {
    this.firebaseService.createUser(regForm.value);
  }
}
