import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

@Injectable()
export class Nav {
  data: any;
  user: any;

  constructor(public navCtrl: NavController) {}

  push(url: string, data: any = "") {
    this.data = data;

    this.navCtrl.navigateForward("/" + url);
  }

  pop(url) {
    this.navCtrl.navigateBack("/" + url);
  }

  get(key: string) {
    return this.data[key];
  }

  getfull() {
    return this.data;
  }

  getUser() {
    return this.user;
  }
  setUser(data: any = "") {
    this.user = data;
  }
}
