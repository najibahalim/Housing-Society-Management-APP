import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, AngularDelegate } from '@ionic/angular';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Nav } from '../Nav';
import { Observable } from 'rxjs';
import { HomePage } from '../home/home.page';
import { AngularFirestore } from 'angularfire2/firestore';



@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage {

  email: string;
  password: string;
  loading: any;

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, private firebase: Firebase, public nav: Nav,public fireStore:AngularFirestore) {
    console.log(this.nav.getUser());
    if (this.nav.getUser() !== undefined) {
      this.nav.push('home', {'one': 1} );
    }
  }

  passwordType = 'password';
  passwordIcon = 'eye-off';

  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  signup() {
    this.nav.push('signup', {'one': 1});
  }

  changep() {
  this.presentAlert('Forgot Passoword','','Please Contact your Secretary');
  }

  login() {

    this.getUser(this.email).subscribe((data) => {
      this.nav.setUser(data[0]);
      console.log(this.nav.getUser());
      console.log(data);
      if(data[0] === undefined)
      {
        this.presentAlert('Error', '', 'User Does not exist');
      }
      else if (data[0].password === this.password) {
        this.nav.push('home', {'one': 1});
      } else {
      this.presentAlert('Error','','Incorrect Password');
      }
    });
  }

  getUser(email: string): Observable<any> {
    return this.fireStore.collection<any>('users', ref => ref.where('email', '==', email)).valueChanges();

  }

  async presentAlert(h, s, m) {

    const alert = await this.alertCtrl.create({
      header: h,
      subHeader: s,
      message: m,
      buttons: ['OK']
    });
    return await alert.present();
  }
  }


