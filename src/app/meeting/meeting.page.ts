import { Component, OnInit } from '@angular/core';
import { Api1Service } from '../api1.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.page.html',
  styleUrls: ['./meeting.page.scss'],
})
export class MeetingPage implements OnInit {

  constructor(private ser:Api1Service) { }
  meetings;
  ngOnInit() {
    this.ser.getmeetings().subscribe((data) => {
      console.log('sdfd');
      this.meetings = data;
      let y=this.meetings;
      let n=y.length;
      for(let i=0;i<n;i++)
      {
        this.meetings[i].d = new Date(this.meetings[i].at.seconds);
      }

      
    });
  }

}
