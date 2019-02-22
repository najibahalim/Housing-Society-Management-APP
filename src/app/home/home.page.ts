import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sub: any;
  constructor(private geolocation: Geolocation, private backgroundMode: BackgroundMode,
     private http: HTTP, private router: Router) {

    // console.log('I am called');
    // this.geolocation.getCurrentPosition().then((resp) => {
    //   console.log(resp.coords.latitude);
    //    console.log(resp.coords.longitude);
    // }).catch((error) => {
    //   console.log('Error getting location', error);
    // });
    // let i = 0;
    // setInterval(function () {
    //   console.log('count ' + (i++));
    // }, 3000);
    // this.backgroundMode.enable();
  }


  abc() {
    const details = {
      'bus_no': 123,
      'route_no': 45,
      'latitude': '67',
      'longitude': '43',
      'timestamp': Date.now()
    };
    this.http.post('http://192.168.1.105:8200/postReq', details, {})
      .then(data => {
        console.log(data);
        // ---
        this.http.get('http://192.168.1.105:8200/getReq', {}, {})
          .then(data1 => {
            console.log(data1);
            this.sub = JSON.stringify(data1.data);

          })
          .catch(error => {
            console.log(error);
          });
        // ---

      })
      .catch(error => {

        console.log('sdf');
        console.log(error);
      });
  }
  xyc() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
       console.log(resp.coords.longitude);
      const details = {
        'bus_no': 123,
        'route_no': 45,
        'latitude': resp.coords.latitude,
        'longitude': resp.coords.longitude,
        'timestamp': Date.now()
      };
      this.http.post('http://192.168.1.105:8200/postReq', details, {})
        .then(data => {
          console.log(data);
          // ---
          this.http.get('http://192.168.1.105:8200/getReq', {}, {})
            .then(data1 => {
              console.log(data1);
              this.sub = JSON.stringify(data1.data);

            })
            .catch(error => {
              console.log(error);
            });
          // ---

        })
        .catch(error => {

          console.log('sdf');
          console.log(error);
        });
    }).catch((error) => {console.log(error); });

  }

}
