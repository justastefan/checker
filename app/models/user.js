import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  gravatarUrl: computed('email', function() {
    var email = this.get('email'),
        size = 50;
    return 'http://lorempixel.com/50/50/people?2';
  })
});
