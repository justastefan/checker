import Service from '@ember/service';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';

export default Service.extend({
  store: service(),

  findAll(user_id, date_id) {
    let promise = new RSVP.Promise((resolve, reject)=>{
      let loadedActivities = [];
      this.get('store').findAll('activity').then((activities)=>{
        loadedActivities = activities ;
        return this.get('store').query('activity-log', {
          user: user_id,
          date: date_id
        });
      }).then((activityLogs)=>{
        let result = [];
        loadedActivities.forEach((activity)=>{
          let log = activityLogs.find((log)=>{ return log.get('activity') === activity.get('id')*1; });
          result.push({
            activity: activity,
            log: log,
            amount: log ? log.get('amount') : ""
          });
        });
        resolve(result);
      }).catch(reject);
    });
    return promise;
  }
});
