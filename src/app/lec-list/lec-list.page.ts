import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Nav } from '../Nav';
import { Http, RequestOptions } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-lec-list',
  templateUrl: './lec-list.page.html',
  styleUrls: ['./lec-list.page.scss'],
})
export class LecListPage implements OnInit {

  constructor(private nav: Nav, private http: Http) {
    // this.nav.push('/first', {'one': 1});
   }

  name;
  

  ngOnInit() {
    this.name = this.nav.getUser().Name;
    }
  navigate(i) {
    
  }

}
