import Controller from '@ember/controller';
import { inject as service } from '@ember/service';


export default Controller.extend({
    session: service(),
    actions: {
        login(user) {
            this.get('session').authenticate(user).then(()=>{
                this.transitionToRoute('index');
            });
        }
    }
});
