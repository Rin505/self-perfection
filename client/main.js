setHeader = function(header) {
  Session.set('headerData', header);
};
getHeader = function() {
  var blank = {title: 'Lol', isBackVisible: false};
  return Session.get('headerData') ? Session.get('headerData') : blank;
};
