import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';

//import การสร้างตัวแปรแบบ storage
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-tab-home',
  templateUrl: 'tab-home.html',
})
export class TabHomePage {

  email: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage) {

    this.storage.set('myemail', 'visitbee@gmail.com');

    //สร้างตัวแปรเก็บลง storage
    this.storage.get('myemail').then((result) => {
      this.email = result;
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabHomePage');
  }

  register() {
    this.navCtrl.push(RegisterPage);
  }
}
