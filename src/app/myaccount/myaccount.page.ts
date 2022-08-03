import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {
  username: string = "";
  fname: string = "";
  lname: string = "";
  comName: string = "";
  comType: string = "";
  comOwn: string = "";

  constructor(private router: Router, private storage:Storage) { 
    this.storage.get('user').then((val)=>{
      this.username = val.username;
      this.fname = val.fname;
      this.lname = val.lname;
    });

    this.storage.get('Company').then((val)=>{
      this.comName = val;
    });

    this.storage.get('Type').then((val)=>{
      this.comType = val;
    });

    this.storage.get('Ownership').then((val)=>{
      this.comOwn = val;
    });
  }


  ngOnInit() {
  }
    logout(){
      this.storage.set('Company', "");
      this.storage.set('Type', "");
      this.storage.set('Ownership', "");
      this.storage.set('user', "");
      this.storage.set('currentUser', "");
      this.router.navigate(['/login']);
      


    }
  
  

}
