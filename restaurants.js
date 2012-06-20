Restaurants = new Meteor.Collection('restaurants');

if (Meteor.is_client) {
  
  Template.main.restaurants = function() {
    return Restaurants.find({}, { sort: { votes: -1 } }).fetch();
  }

  Template.main.events = {
    
    'click #new_button': function() {
      Restaurants.insert({ name: $('#new_text').val() });
    },

    'click .restaurant': function() {
      Restaurants.update(this._id, { $inc: { votes: 1 } })
    }
    
  }
}