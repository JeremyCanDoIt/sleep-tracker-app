import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SleeplogPage } from '../sleeplog/sleeplog.page';
import { DrowsylogPage } from '../drowsylog/drowsylog.page';
import { AlllogsPage} from '../alllogs/alllogs.page';
import { SleepService } from '../services/sleep.service';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {4
  time:Date;
  updateTime:number;
  modalDataResponse: any;

	constructor(public sleepService:SleepService,public modalCtrl:ModalController) {

	}

	ngOnInit() {
		console.log(this.allSleepData);
		this.updateTime = setInterval(() => {
      this.time = new Date();
    });
	   this.sendNotification();
    //this.logNightData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00'));
    //console.log(this.allSleepData);
	}

	async sendNotification() {
	  LocalNotifications.requestPermissions();
	  console.log("permission received");
	  const notif = await LocalNotifications.schedule({
	    notifications: [
	    {
	      title: 'Log Reminder',
	      body: 'Have you logged your sleep today?',
	      id: 1,
	      //schedule: this.notifSchedule,
	      schedule: { at: new Date(Date.now()+5)},
	      sound: null,
        attachments: null,
        actionTypeId: "",
        extra: null
	    }
	  ]
	  });
	  console.log(notif);
	}

	/* Ionic doesn't allow bindings to static variables, so this getter can be used instead. */
	get allSleepData() {
		return SleepService.AllSleepData;
	}
	//gets recent data
	mostRecentData() {
		if(SleepService.AllSleepData.length==0){
			return "None";
		}
		return SleepService.AllSleepData[SleepService.AllSleepData.length-1].constructor.name;
	}
	//returns most recent SleepLog's summ string
	 mostRecentDataSumm() {
		return SleepService.AllSleepData[SleepService.AllSleepData.length-1].summaryString();
	}
	//returns most recent SleepLog's date string

	mostRecentDataDate() {
		return SleepService.AllSleepData[SleepService.AllSleepData.length-1].dateString();
	}
	//initializes sleeper modal
	async initModal() {
		const modal = await this.modalCtrl.create({
		  component: SleeplogPage,
		  initialBreakpoint: .95,
    	  breakpoints: [.95, 1, 1],


		  componentProps: {} });

			modal.onDidDismiss().then((modalDataResponse) => {
			if (modalDataResponse !== null && modalDataResponse.data!=undefined) {
				this.modalDataResponse = modalDataResponse.data;
				this.sleepService.logOvernightData(
					new OvernightSleepData(new Date(modalDataResponse.data["fromDate"]),new Date(modalDataResponse.data["toDate"])))
			}
			});

		return await modal.present();
	}
	//initializes drowsy modal
	async initDroswyModal() {
		const drowsy_modal = await this.modalCtrl.create({
		  component: DrowsylogPage,

		  componentProps: {} });

		drowsy_modal.onDidDismiss().then((modalDataResponse) => {
		  if (modalDataResponse !== null&&modalDataResponse.data != undefined &&
			modalDataResponse.data["value"] != undefined && modalDataResponse.data["timeValue"] != undefined) {
			  this.modalDataResponse = modalDataResponse.data;
			  this.sleepService.logSleepinessData(
					new StanfordSleepinessData(parseInt(modalDataResponse.data["value"]["value"]),new Date(modalDataResponse.data["timeValue"])))
// 			  this.logDrowsyData(modalDataResponse.data["value"], modalDataResponse.data["timeValue"]);

		  }
		});

		return await drowsy_modal.present();
	}
		//initializes all logs modal
		async initAlllogsModal() {
		const all_modal = await this.modalCtrl.create({
		  component: AlllogsPage,

		  componentProps: {} });

		all_modal.onDidDismiss().then((modalDataResponse) => {

		});

		return await all_modal.present();
	}
}

//		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
