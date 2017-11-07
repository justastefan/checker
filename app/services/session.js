import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import RSVP from 'rsvp';

export default Service.extend({
    store: service(),
    id: null,
    isAuthenticated: computed.notEmpty('id'),
    user: computed('id', function() {
        return this.get('id') ? this.get('store').find('user', this.get('id')) : null;
    }),
    authenticate(user) {
        this.set('id', user.get('id'));
        return RSVP.resolve(true);
    },
    invalidate() {
        this.set('id', null);
        return RSVP.resolve(true);
    }
});
