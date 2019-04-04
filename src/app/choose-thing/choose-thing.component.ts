import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'app-choose-thing',
  templateUrl: './choose-thing.component.html',
  styleUrls: ['./choose-thing.component.scss'],
})
export class ChooseThingComponent implements OnInit {
  things = [];
  constructor(public navParams: NavParams, private storage: Storage, private popCtrl: PopoverController) {
    this.things = navParams.get('thingData');
   }

   set(i) {
     this.storage.set('thing',  this.things[i].thingName)
       .then(
         () => {console.log('Stored item!');
          this.popCtrl.dismiss();
        },
         error => console.error('Error storing item', error)
       );
   }
  ngOnInit() {}

}
