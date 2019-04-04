import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Api1Service } from '../api1.service';

@Component({
  selector: 'myhome',
  templateUrl: './myhome.page.html',
  styleUrls: ['./myhome.page.scss'],
})
export class MyhomePage implements OnInit {

  constructor(private alertCtrl:AlertController,private ser:Api1Service) { }

  ngOnInit() {
  }

  notice(){
    this.noticeadd();
  }

  meeting(){
    this.meetingadd();
  }
  async meetingadd() {

    const alert = await this.alertCtrl.create({
      header: 'ADD Meeting',
      inputs: [
        {
          name: 'at',
          type: 'date',
          placeholder: 'Meeting On'
        },
        {
          name: 'subject',
          type: 'text',
          placeholder: 'Subject'
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
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok');
            this.ser.AddMeeting(data);

          }
        }
      ]
    });
    return await alert.present();
  }

  async noticeadd() {

    const alert = await this.alertCtrl.create({
      header: 'ADD Notice',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Notice Title'
        },
        {
          name: 'Content',
          type: 'text',
          placeholder: 'Notice Content'
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
          text: 'Ok',
          handler: (data) => {
            console.log('Confirm Ok');
            data.date=(new Date).toString();
            this.ser.AddNotice(data);

          }
        }
      ]
    });
    return await alert.present();
  }

}
