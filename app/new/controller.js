import Ember from 'ember';

export default Ember.Controller.extend({
  saveRun() {
    const attributes = {
      time: this.time,
      date: this.date,
      notes: this.notes,
    };
    fetch(`http://tiny-tn.herokuapp.com/collections/runs-dm`, {
      method: `POST`,
      headers: {
        Accept: `application/json`,
        'Content-Type': `application/json`,
      },
      body: JSON.stringify(attributes),
    }).then((res) => res.json()).then((run) =>
    {
      // Redirect to index
    });
  },


});
