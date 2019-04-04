import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Nav } from '../Nav';
import { Api1Service } from '../api1.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.page.html',
  styleUrls: ['./complaint.page.scss'],
})
export class ComplaintPage implements OnInit {

  constructor(private alertCtrl:AlertController,private nav:Nav,private ser:Api1Service) { }

  ngOnInit() {
    this.ser.getcomplaints().subscribe((data)=>{
      this.complain=data;
      let y = this.complain;
      let n = y.length;
      for (let i = 0; i < n; i++) {
        this.complain[i].d = new Date(this.complain[i].pou.second);
      }
    });
  }
  complain;

  add(){
   this.presentAlert();
  }
  a2(){
    console.log(this.complain);
  }
  async presentAlert() {

    const alert = await this.alertCtrl.create({
      header: 'ADD Complain',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Please Type Here'
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
              const u=this.nav.getUser();
              const d={
                "flatno": u.Flatno,
                "name":u.Name,
                "complaint":data.name1,
                "at":new Date().toString()
              };
              this.ser.AddComplain(d);
              
            }
          }
        ]
    });
    return await alert.present();
  }

}
