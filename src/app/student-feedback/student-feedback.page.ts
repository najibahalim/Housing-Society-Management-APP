import { Component, OnInit } from '@angular/core';
import { Nav } from '../Nav';
import { Http, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-feedback',
  templateUrl: './student-feedback.page.html',
  styleUrls: ['./student-feedback.page.scss'],
})
export class StudentFeedbackPage implements OnInit {
  topicvalues = [];
  topicvotes = [];
  overallvalue = 5;
  feedback = '';
  lecture;
  constructor(private nav: Nav, public http: Http, private router:Router) { }
  ngOnInit() {
    this.lecture = this.nav.getfull();
    console.log(this.lecture);
    // tslint:disable-next-line:forin
    for (const tc in this.lecture.topic) {
      this.topicvalues.push(5);
      this.topicvotes.push(false);
    }
  }

  doubt(i) {
    this.topicvotes[i] = true;
  }
  submit() {
    const requestOptions = new RequestOptions();
    const dataf = {
      'sid': 5,
      'topicvalues': this.topicvalues,
      'topicvote': this.topicvotes,
      'overallvalue': this.overallvalue,
      'feedback': this.feedback,
      'lid': this.lecture.lid
    };
    console.log(dataf);
    this.http.post('http://192.168.43.110:8000/addFeedback/', dataf , requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
        this.router.navigate(['/lec-list']);
      }, error => {
        console.log(error);
      });
  }

}
