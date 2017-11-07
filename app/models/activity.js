import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  name: DS.attr('string'),
  inputType: DS.attr('string'),
  value: DS.attr('string'),
  isCounter: computed.equal('inputType', 'counter'),
  isBoolean: computed.equal('inputType', 'boolean')
});
