import { Injectable } from '@angular/core';
import {IActivity} from '../shared/activity.model';
import {SAVED_ACTIVITIES} from '../shared/activities';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor() { }

  getActivities(): IActivity[] {
    return SAVED_ACTIVITIES.slice(0);
  }

  getTotalActivities(AllActivities: IActivity[]){
    return AllActivities.length;
  }

  getTotalDistance(AllActivities: IActivity[]){
    var TotalDistance = 0;
    for(var i = 0; i < AllActivities.length; i++){
      TotalDistance += AllActivities[i].distance;
    }
    return TotalDistance;
  }

  getFirstDate(AllActivities: IActivity[]){
    var earliestDate = new Date('01/01/9999');
    for(var i = 0; i < AllActivities.length; i++){
      var currentDate = AllActivities[i].date;
      if(currentDate<earliestDate){
        earliestDate = currentDate;
      }
    }
    return earliestDate;
  }
}
