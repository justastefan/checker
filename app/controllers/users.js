import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
  store: service(),
  actions: {
    addUser() {
      let newUser = this.get('store').createRecord('user', {
        name: this.get('model.name'),
        email: this.get('model.email')
      });
      newUser.save().then(()=>{
        // users route refreshen
        this.send('refreshRoute');
      });
    }
  }
});
