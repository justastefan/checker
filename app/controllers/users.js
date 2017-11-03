import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default Controller.extend({
  store: service(),
  session: service(),
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
    },
    deleteUser(user) {
      if (this.get('session.user.id') === user.get('id')) {
        return;
      }

      user.deleteRecord();
      user.save().then(()=>{
        // users route refreshen
        this.send('refreshRoute');
      });
    }
  }
});
