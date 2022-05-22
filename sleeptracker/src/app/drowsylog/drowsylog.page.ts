import { Component, OnInit,Input  } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

//import { format, parseISO } from 'date-fns';

@Component({
  selector: 'app-drowsylog',
  templateUrl: './drowsylog.page.html',
  styleUrls: ['./drowsylog.page.scss'],
})
export class DrowsylogPage implements OnInit {

//   timeValue:string = new Date().toISOString();
  public timeValue:Date;
  public value:number;

  constructor(
    private modalCtr: ModalController, private alertController:AlertController
  ) { }

  ngOnInit() { 
  }

  // closes the modal
  async close() {
    await this.modalCtr.dismiss(undefined);
    
    
  }

  // shows alert message
  async presentAlert(message) {
    const alert = await this.alertController.create({
      cssClass: 'alertCustomCss',
      //header: 'Alert',
      //subHeader: 'Subtitle',
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    //console.log('onDidDismiss resolved with role', role);
  }

  // logs the drowsiness value and time
  async confirm() {
    //this.datetime.nativeEl.confirm();
    if(!this.value)
    {
      this.presentAlert("Please specify your drowsiness level.");
    }
    

    else{
      if(this.timeValue){
        await this.modalCtr.dismiss(
       
          {
            'value': this.value,
            'timeValue':this.timeValue,
          }
        );
      }
      else{
        await this.modalCtr.dismiss(
       
          {
            'value': this.value,
            'timeValue':new Date(),
          }
        );
      }
    }
  }

  // updates the drowsiness level to the selected option
  updateRadioSelect(value)
  {
    this.value=value.detail;
  }

}
