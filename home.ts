import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MainpagePage } from '../mainpage/mainpage';
import * as firebase from 'firebase';
import {snapshotToArray} from '../../app/envroiment';
@Component
({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage
{
   public username ;
   public password ;
   public no ;

   items=[];
   ref=firebase.database().ref('items/');
   inputText:string ='';



  constructor(public navCtrl: NavController,public alertCtrl:AlertController) 
  {
     this.ref.on('value',resp =>{
     this.items= snapshotToArray(resp);
     });
  }

  addItem(item){
    if(item!==undefined&&item!==null)
    {
    let newItem= this.ref.push();
    newItem.set(item);
    this.inputText='';
    }
  }

      clickme2()
      {
        console.log(this.username,this.password);
        if(this.username == 'admin@gmail.com' && this.password == 'admin123')
        {
          this.showAlert('Login Successful','',['OK']);
         this.navCtrl.push(MainpagePage);
        this.navCtrl.setRoot(MainpagePage);
        }
        else
        {
          this.showAlert('Unsuccessful Login','',['OK']);
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
    }

    
    


