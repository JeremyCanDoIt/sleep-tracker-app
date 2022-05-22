import { Component, OnInit,Input  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-sleeplog',
  templateUrl: './sleeplog.page.html',
  styleUrls: ['./sleeplog.page.scss'],
})
export class SleeplogPage implements OnInit {
  public fromDate;
  public toDate;
  public presentFDate:string;
  public presentTDate:string;
  public showDateModalFrom:boolean;

  public showDateModal:boolean;
  constructor(
    private modalCtr: ModalController,private alertCtr:AlertController
  ) { }

  ngOnInit() {
    this.showDateModal=false;
    this.showDateModalFrom=false;
    this.presentFDate= "From date";
    this.presentTDate="End date";
     
   }
   async presentAlert(message) {
    const alert = await this.alertCtr.create({
      cssClass: 'alertCustomCss',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
  
  async close() {
    await this.modalCtr.dismiss(undefined);

  }
  
  async save() {
    if(this.fromDate==undefined || this.toDate==undefined){
      this.presentAlert("Please specify a date.");
    }
    else if(new Date(this.fromDate).getTime()>=new Date(this.toDate).getTime() ||this.toDate==this.fromDate ||
      (Math.round((new Date(this.toDate).getTime() - new Date(this.fromDate).getTime())/ 36e5) )<=0){
      this.presentAlert("Invalid date.");
    }
    else{
    
     
      await this.modalCtr.dismiss({
        'fromDate': this.fromDate,
        'toDate':this.toDate,
      });
    }
    
  }
  processFromDate(){
    this.presentFDate=new Date(this.fromDate).toLocaleString();
  }
  processToDate(){
    this.presentTDate=new Date(this.toDate).toLocaleString();
  
}
dismissDatetime(){
  this.showDateModal=false;
  if(this.toDate==undefined){
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    this.toDate = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    this.processToDate();
  }
}
openEndDate(){
  this.showDateModal=true;
  
}

openEndDateFrom(){
  this.showDateModalFrom=true;
}
dismissDatetimeFrom(){
  this.showDateModalFrom=false;


  if(this.fromDate==undefined){
    var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    this.fromDate = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);

    this.processFromDate();
  
  }

}



}

