Router.configure({
  layoutTemplate: 'rinLayout'
});
Router.route('/' , {name: 'goodnessList'});
Router.route('/create' , {name: 'inputForm'});
Router.route('/detail' , {name: 'goodnessDetail'});
