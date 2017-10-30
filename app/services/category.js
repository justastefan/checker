import Service from '@ember/service';

/**
 * returns all categories a single user has
 *
 * @param userId (e.g. '123')
 * @param dateString (e.g yyyy-mm-dd)
 */

 // TODO: extract categories AND link to daily "tracking"

/*
var categories = [
  {
    id: 'liegestuetze',
    name: 'Liegestütze (max)',
    description: 'Wieviele Liegestütze schafft man hintereinander ohne Pause.'
  },
  {
    id: 'schritte',
    name: 'Schritte',
    description: 'Wieviele Schritte hast Du heute gemacht.'
  }
];

var user = [
  {
    id: 1,
    name: 'jcr'
  }
  {
    id: 2,
    name: 'justastefan'
  }
];

var trackings = [
  {
    id: 1231241
    category: "liegestuetze",
    user: 1,
    value: 23.0,
    date: '2017-10-31'
  },
  {
    id: 1231242
    category: "liegestuetze",
    user: 1,
    value: 41.0,
    date: '2017-11-01'
  }
]
*/

var db = [
  {
    id: 'foo',
    user: 1,
    name: 'Liegestütze',
    private: false,
    date: '2017-10-30',
    value: 20.0
  },
  {
    id: 'bar',
    user: 1,
    name: 'Mittagessen auf Arbeit',
    date: '2017-11-01',
    value: -1 // not set yet
  }
];

export default Service.extend({
  findAll(userId, dateString) {
    // suche nach user und date
    return db.filter(category => category.user = userId && category.date == dateString);
  }
});
