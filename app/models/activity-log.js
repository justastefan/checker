import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('string'),
  amount: DS.attr('number'),
  activity: DS.attr('number'),
  user: DS.attr('number')
});
