import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router : Router){

  }

  title = 'BasicAngular';
  password: string;
  userName: string;
  status: string;
  message: string;
  showResult: boolean = false;

  submit() {
    this.showResult = true;
    if (this.userName.toLowerCase() == 'gowtham' && this.password == "Rithan123$") {
      this.status = 'Success';
      this.message = "Log In Sucess";
      this.router.navigateByUrl('/home');
    }
    else{
      this.status = 'Failure';
      this.message = "Log In Failed";
    }
    
  }
}
