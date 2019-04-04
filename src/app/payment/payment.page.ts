import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  constructor() { }
  paymethods="creditcard"
  ngOnInit() {
  }
  send(){
    alert('Redirecting you to Bank Servers....Please Wait');
    
  }

}
