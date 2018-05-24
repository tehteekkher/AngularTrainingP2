import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginAttempts = 0;

  headerTitle = 'seagate corp';

  countLogin() {
    this.loginAttempts = this.loginAttempts + 1;
  }
}
