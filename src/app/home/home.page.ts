import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { getParentInjectorLocation } from '@angular/core/src/render3/di';
import { PopoverController, AlertController } from '@ionic/angular';
import { ChooseThingComponent } from '../choose-thing/choose-thing.component';
import { Storage } from '@ionic/storage';
import { Nav } from '../Nav';


@Component({
  selector: 'home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private geolocation: Geolocation, private backgroundMode: BackgroundMode,
    private http: HTTP, private router: Router, public popoverController: PopoverController, private storage: Storage,public nav:Nav,private alertCtrl:AlertController) {
      console.log(this.nav.getUser())
  }
  contact(){
    this.router.navigate(['contact']);
  }
  notice(){
    this.router.navigate(['notice']);
  }
  complain(){
    this.router.navigate(['complaint'])
  }
 
  bills(){
    this.router.navigate(['meetingadd'])
  }
  
  pay(){
  this.router.navigate(['lec-list'])

  }
  meet(){
    this.router.navigate(['meeting'])
  }
  admin(){
    this.presentAlert();
  }
  async presentAlert() {

    const alert = await this.alertCtrl.create({
      header: 'Admin Credentials',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'UserId'
        },
        {
          name: 'name2',
          type: 'password',
          placeholder: 'Password'
        }],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (data) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Submit',
          handler: (data) => {
            console.log('Confirm Ok');
           if(data.name1==="admin" && data.name2==="0000")
           {
             this.router.navigate(["myhome"]);
           }
           

          }
        }
      ]
    });
    return await alert.present();
  }
}
