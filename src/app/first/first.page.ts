import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import {Headers} from '@angular/http';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';
import { AlertController } from '@ionic/angular';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Nav } from '../Nav';


@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(private http: HTTP, private alctrl: AlertController, private router: Router, 
    private nativeStorage: NativeStorage, private nav: Nav) {
  }
  thing = {};
  rules = [{ type: '', value: ' ' }];

  n = 1 ;
  ngOnInit() {
    // console.log(this.nav.get('one'));
}
  addRule() {
    // console.log(this.rules);
    this.n++;
    this.rules.push({ type: '', value: ' ' });
  }

  register() {
    if (this.n >= 3) {
      this.thing['type'] = this.rules[0].type;
      this.thing['value'] = this.rules[0].value;
      this.thing['type1'] = this.rules[1].type;
      this.thing['value1'] = this.rules[1].value;
      this.thing['type2'] = this.rules[2].type;
      this.thing['value2'] = this.rules[2].value;
    } else if (this.n === 2) {
      this.thing['type'] = this.rules[0].type;
      this.thing['value'] = this.rules[0].value;
      this.thing['type1'] = this.rules[1].type;
      this.thing['value1'] = this.rules[1].value;
    } else if (this.n === 1) {
      this.thing['type'] = this.rules[0].type;
      this.thing['value'] = this.rules[0].value;
    }
    this.thing['SensorType'] = 'GPS';
  console.log(this.thing);
    this.http.post('http://192.168.1.104:8000/api/create_thing/', this.thing, {})
      .then(data1 => {
        console.log(data1);
        this.showAlert('Success', 'Thing created Successfully!', 'You can now start sending Data');
        this.nativeStorage.setItem('thing', { name: this.thing['SensorName']})
          .then(
            () => console.log('Stored item!'),
            error => console.error('Error storing item', error)
          );
        this.router.navigate(['/home']);
      })
      .catch(error => {
        console.log(error);
      });
}

async showAlert(msg1, msg2, msg3) {
  const a = await this.alctrl.create({
    header: msg1,
    subHeader: msg2,
    message: msg3,
    buttons: ['OK']
  });
  await a.present();

}
}
