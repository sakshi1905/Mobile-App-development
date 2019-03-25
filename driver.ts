import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DriverinfoPage } from '../driverinfo/driverinfo';
import { UpdatePage } from '../update/update';
import { SortedPage } from '../sorted/sorted';

/**
 * Generated class for the DriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driver',
  templateUrl: 'driver.html',
})
export class DriverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  display_driver() 
  {
     this.navCtrl.push(DriverinfoPage);
  }
  Update() 
  {
   this.navCtrl.push(UpdatePage);
  }
  Sorted() 
  {
    this.navCtrl.push(SortedPage);
     
  }
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverPage');
  }

}
