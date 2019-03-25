import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SmallPage } from '../small/small';
import { MiddlePage } from '../middle/middle';
import { LargePage } from '../large/large';

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-booking',
  templateUrl: 'booking.html',
})
export class BookingPage {
  public wt;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController) {
  }
  clickme4()
  {
    console.log(this.wt);
    if(this.wt<0)
    {
      this.showAlert('Invalid wt','aa',['Try Again']);
     //this.navCtrl.push(PagesDashboardPage);
     // this.navCtrl.setRoot(PagesDashboardPage;
    }
    else if(this.wt>0 && this.wt<500)
    {
       this.navCtrl.push(SmallPage);
    }
    else if(this.wt>=500 && this.wt<1000)
    {
       this.navCtrl.push(MiddlePage);
    }
    else if(this.wt>=1000)
    {
       this.navCtrl.push(LargePage);
    }
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingPage');
  }

}
