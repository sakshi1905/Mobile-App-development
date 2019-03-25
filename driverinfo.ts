import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-driverinfo',
  templateUrl: 'driverinfo.html',
})
export class DriverinfoPage {

  arrData=[]
  Input
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl:AlertController) {

}

clickme()
  {
      this.showAlert(' Manish Chaudhari','Age:22 Contact no:1234056789  Address:Pavan Nagar,Pune',['Got it']);
  }
  clickme1()
  {
    this.showAlert('Mohan Patel','Age:32  Contact no:1234056789  Address:Pavan Nagar,Pune',['Got it']);
  }
  clickme2()
  {
    this.showAlert('Ashish Shah','Age:27 Contact no:1234056789 Address:Pavan Nagar,Pune',['Got it']);
  }
  clickme3()
  {
    this.showAlert('Pankaj Arora','Age:29 Contact no:1234056789 Address:Pavan Nagar,Pune',['Got it']);
  }
  clickme4()
  {
    this.showAlert('Kiran Mehta','Age:24 Contact no:1234056789 Address:Pavan Nagar,Pune',['Got it']);
  }
  clickme5()
  {
    this.showAlert('Aadesh Patil','Age:28 Contact no:1234056789 Address:Pavan Nagar,Pune',['Got it']);
  }
  clickme6()
  {
    this.showAlert('Rakesh Sharma','Age:42 Contact no:1234056789 Address:Pavan Nagar,Pune',['Got it']);
  }
  clickme7()
  {
    this.showAlert('Aman Singh','Age:26 Contact no:1234056789 Address:Pavan Nagar,Pune',['Got it']);
  }
  clickme8()
  {
    this.showAlert('Rajesh Kale','Age:32 Contact no:1234056789 Address:Pavan Nagar,Pune',['Got it']);
  }
  clickme9()
  {
    this.showAlert('Satish Jagtap','Age:35 Contact no:1234056789 Address:Pavan Nagar,Pune',['Got it']);
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
    console.log('ionViewDidLoad DriverinfoPage');
  }



  
}