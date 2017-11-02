import Mixin from '@ember/object/mixin';
import { inject as service } from '@ember/service';

export default Mixin.create({
    session: service(),
    beforeModel() {
        if (!this.get('session.isAuthenticated')) {
            this.transitionTo('login');
        }
    }
});
