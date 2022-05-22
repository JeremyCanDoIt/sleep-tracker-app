import { Component, OnInit,Input  } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { SleepService } from '../services/sleep.service';

@Component({
  selector: 'app-alllogs',
  templateUrl: './alllogs.page.html',
  styleUrls: ['./alllogs.page.scss'],
})
export class AlllogsPage implements OnInit {

  constructor(
    private modalCtr: ModalController,
    public sleepService:SleepService
  ) { }

  ngOnInit() { }

  // closes modal
  async close() {
    const closeModal: string = "Modal Closed";
    await this.modalCtr.dismiss(closeModal);
  }

  get staticData() {
    return this.sleepService.staticAllData;
  }

  // shows log type
  private getLogType(data) {
    //console.log(data.constructor.name);
    let data_type = data.constructor.name;
    if(data_type == "OvernightSleepData") {return "Sleep Log";}
    else {return "Drowsy Log";}
  }

  // gets log info
  private getLogInfo(data){
    let text = "";
    if(this.getLogType(data) == "Drowsy Log"){
      text += "Stanford Level of Sleepiness:\n" + data.summaryString();
      text += "\n on " + data.dateString();
    }
    else{
      text += "Slept " + data.summaryString();
      text += "\n"+data.dateString();
    }
    return text;
  }

}

