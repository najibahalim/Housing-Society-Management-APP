import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Headers} from '@angular/http';


@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor(private http: HTTP, private httpClient: HttpClient) {
  }
  rules = [{type : '', value: ' '}];

  ngOnInit() {
    console.log('sdsdf');
    const details = {
      'bus_no': 123,
      'route_no': '45',
      'latitude': '45',
      'longitude': '45',
      'timestamp': 'time'
    };
    this.http.post('http://192.168.1.101:8200/postReq', details, { })
      .then(data => {
        console.log(data);
        alert(data);

      })
      .catch(error => {

        console.log('sdf');
        console.log(error);
      });

}
  // public createProduct(details): Observable<Product> {

  //   return this.httpClient

  //     .post(this.baseUrl + '/products', product)

  //     .map(response => {

  //       return new Product(response);

  //     })

  //     .catch((error) => {

  //       console.error(error);

  //     });

  // }
}
