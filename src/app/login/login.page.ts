import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

 
  public accounts = {

    username: "",
    password: ""
  }

  public accountValidation() {
    if(this.accounts.username == "Ralph" && this.accounts.password == "CULLA") {
      alert("Access Granted");
      this.router.navigate(['/home'])
    }
    else if (this.accounts.username =="Lady" && this.accounts.password == "SERILLANO"){
      alert("Access Granted");
      this.router.navigate(['/home'])
    }
    else {
      alert("Access Denied");
      this.accounts.username = "";
      this.accounts.password = "";

    }
  }
  

  /*public accounts = {

    usernameInput: "",
    passwordInput: ""
  }
  public accountValidation() {
    var username = this.navParams.get('username')
    var password = this.navParams.get('password')

    if(this.accounts.usernameInput == username && this.accounts.passwordInput == username) {
      alert("Access Granted");
      this.router.navigate(['/home'])
    }
  }
  */
  ngOnInit() {
  }

}
