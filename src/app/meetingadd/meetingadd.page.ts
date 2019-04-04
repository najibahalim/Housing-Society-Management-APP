import { Component, OnInit } from '@angular/core';
import { Api1Service } from '../api1.service';
import { Nav } from '../Nav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meetingadd',
  templateUrl: './meetingadd.page.html',
  styleUrls: ['./meetingadd.page.scss'],
})
export class MeetingaddPage implements OnInit {

  constructor(private nav:Nav,private router:Router) {
   }
   name
  ngOnInit() {
    this.name=this.nav.getUser().Name;
  }

  pay(){
    this.router.navigate(['payment']);
  }

}
