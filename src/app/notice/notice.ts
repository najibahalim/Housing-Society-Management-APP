import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { LoginPage } from '../login/login';
import {Notice} from '../notice.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Api1Service } from '../api1.service';
/**
 * Generated class for the NoticePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

  @Component({
    selector: "notice",
    templateUrl: "./notice.html",
    styleUrls: ["./notice.scss"]
  })
  export class NoticePage implements OnInit {

    constructor(private ser: Api1Service) { }
    notices;
    ngOnInit() {
      this.ser.getNotices().subscribe((data) => {
        console.log('sdfd');
        this.notices = data;
        let y = this.notices;
        let n = y.length;
        for (let i = 0; i < n; i++) {
          this.notices[i].d = new Date(this.notices[i].at.seconds);
        }


      });
    }

  }
