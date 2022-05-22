import { Injectable } from '@angular/core';
import { SleepData } from '../data/sleep-data';
import { OvernightSleepData } from '../data/overnight-sleep-data';
import { StanfordSleepinessData } from '../data/stanford-sleepiness-data';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class SleepService {
	private static LoadDefaultData:boolean = false;
	private static LoadStorageData:boolean = true;

	public static AllSleepData:SleepData[] = [];
	public static AllOvernightData:OvernightSleepData[] = [];
	public static AllSleepinessData:StanfordSleepinessData[] = [];

	constructor() {
		if(SleepService.LoadStorageData){
			this.loadData();
			SleepService.LoadStorageData=false;
		}
		
		if(SleepService.LoadDefaultData) {
			this.addDefaultData();
		SleepService.LoadDefaultData = false;
		// this.loadData();
		// console.log(SleepService.AllSleepinessData)	
		
	}
	}

	private addDefaultData() {
		this.logOvernightData(new OvernightSleepData(new Date('February 18, 2021 01:03:00'), new Date('February 18, 2021 09:25:00')));
		this.logSleepinessData(new StanfordSleepinessData(4, new Date('February 19, 2021 14:38:00')));
		this.logOvernightData(new OvernightSleepData(new Date('February 20, 2021 23:11:00'), new Date('February 21, 2021 08:03:00')));
	}

	public logOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
		this.setData(sleepData);
	}

	public logSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);
		this.setData(sleepData);

	}
	public loadOvernightData(sleepData:OvernightSleepData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllOvernightData.push(sleepData);
	}

	public loadSleepinessData(sleepData:StanfordSleepinessData) {
		SleepService.AllSleepData.push(sleepData);
		SleepService.AllSleepinessData.push(sleepData);

	}
	get staticAllData() {
    return SleepService.AllSleepData;
  }

  async setData(sleepData:any) {
	await Storage.set({
	  key: sleepData.id,
	  value: JSON.stringify(sleepData)
	});
	
  }

  async loadData() {
	await Storage.keys().then(async (keys) => {
		for(const id of keys["keys"]){
			const data= await  Storage.get({key:id})
			const dict=JSON.parse(data.value)
			if(dict.hasOwnProperty("loggedValue")){
				let old_date=new StanfordSleepinessData(dict["loggedValue"], new Date(dict["initDate"]));
				old_date.loggedAt=new Date(dict["loggedAt"]);
				this.loadSleepinessData(old_date);
			}
			else if (dict.hasOwnProperty("sleepEnd") && dict.hasOwnProperty("sleepStart")){
				let old_date=new OvernightSleepData(new Date(dict["sleepStart"]), new Date(dict["sleepEnd"])) 
				old_date.loggedAt=new Date(dict["loggedAt"]);
				this.loadOvernightData(old_date);

			}
		}
	
  	});

	  SleepService.AllSleepData.sort(function(a, b){
		
		return new Date(a.loggedAt).getTime() - new Date(b.loggedAt).getTime()
	});
}
  

}
