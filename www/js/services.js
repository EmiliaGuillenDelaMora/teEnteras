angular.module('starter.services', [])

.factory('Menu', function() {
  var menus = [{
    name: 'Cerca de mi',
    logo: 'img/ben.png'
  },{
    name: 'Todos',
    logo: 'img/max.png'
  }];

  return {
    all: function() { return menus; }
  };
});
