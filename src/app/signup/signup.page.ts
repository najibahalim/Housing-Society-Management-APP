import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Nav } from '../Nav';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  name;
  email;
  mobile;
  dob;
  mnum;
  vnum;
  password;
  flatno;


  ngOnInit() {
  }
  

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public firestore:AngularFirestore, public nav:Nav) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  register() {
// tslint:disable-next-line: max-line-length
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (this.name == undefined || this.vnum == undefined || this.mobile == undefined ||
       this.password == undefined || this.email == undefined || this.mnum == undefined ||
        this.flatno == undefined || this.dob == undefined) {
     this.presentAlert('Error','Registration','You must fill in all the fields');
    }
    else if (this.mobile.length != 10) {
      this.presentAlert('Error', 'Registration','Mobile number should be of 10 digits');
    }
    else if (this.password.length < 8) {
      this.presentAlert('Error', 'Registration',"Password should be atleast of 8 characters");
    }
    else if (!re.test(this.email)) {
      this.presentAlert('Error', 'Registration','Enter valid Email id');
    }
    else {
      const id = this.firestore.createId();
      const us = {
        id: id,
        Flatno: this.flatno,
        Name: this.name,
        password: this.password,
        email: this.email,
        dob: this.dob,
        mobile: this.mobile,
        noOfVehicles: this.vnum,
        noOfMembers: this.mnum

      }

      this.firestore.doc(`users/${id}`).set(us);
      this.nav.setUser(us);
      this.presentAlert('Success', 'Registration','Registration Successsfull. You can now login!');
      this.nav.push('login',{'one':1});
    }
  }
  login(){
    this.nav.push('login',{"one":1});
  }

  async presentAlert(h,s,m) {

  const alert = await this.alertCtrl.create({
    header: h,
    subHeader: s,
    message: m,
    buttons: ['OK']
  });
  return await alert.present();
}
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }


}
