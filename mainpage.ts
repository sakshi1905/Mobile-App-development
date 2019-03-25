import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { DriverPage } from '../driver/driver';
import { BookingPage } from '../booking/booking';

/**
 * Generated class for the MainpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainpage',
  templateUrl: 'mainpage.html',
})
export class MainpagePage {

  public username ;
  public password ;
  public no ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController)
  {

  }

  clickme2()
  {
    
  this.navCtrl.push(BookingPage);

  }

  clickme3()
  {
    this.navCtrl.push(DriverPage);
  }


  showAlert (title, subTitle, buttons)
  {
    const alert = this.alertCtrl.create({
      title:title,
      subTitle:subTitle,
       buttons:buttons
    });
   
   alert.present();
   }

}
