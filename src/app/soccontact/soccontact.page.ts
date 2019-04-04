import { Component, OnInit } from '@angular/core';
import { Api1Service } from '../api1.service';

@Component({
  selector: 'app-soccontact',
  templateUrl: './soccontact.page.html',
  styleUrls: ['./soccontact.page.scss'],
})
export class SoccontactPage implements OnInit {
contacts=[];
  constructor(private ser:Api1Service) {
    this.ser.getUsers().subscribe((data)=>{
      this.contacts=data;
      console.log(this.contacts);
      let y = this.contacts;
      let n = y.length;
      for (let i = 0; i < n; i++) {
        this.contacts[i].d = new Date(this.contacts[i].pou.second);
      }
    });
   }

  ngOnInit() {
  }

}
