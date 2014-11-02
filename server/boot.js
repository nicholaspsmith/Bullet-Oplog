Meteor.startup(function() {
  if(!Todos.findOne()) {
    Todos.insert({title: "Learn Meteor with DiscoverMeteor", date: new Date(), isDone: true});
    Todos.insert({title: "Deploy with Meteor Up", date: new Date()});
    Todos.insert({title: "Improve Performance with Kadira", date: new Date()});
  }
});