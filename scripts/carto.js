var CartoDB = require('cartodb');
var namedMaps = new CartoDB.Maps.Named({
    api_key: '4d604bdb2a4e07e5fa4b46b546d6e6fa272463c3'
});
namedMaps.maps_api_url = 'http://cartodb.skytruth.org:80/user/production/api/v1/map/named'

// namedMaps.create({
namedMaps.update({
  template: require('./MPA_template.json')
})
.error(function(){console.log(arguments)}).on('done', function(res) {
  namedMaps.instantiate({
  template_id: 'MPA_template',
  // params: {
  //   color: '#ff0000',
  //   cartodb_id: 3
  // }
})
  .error(function(){console.log(arguments)}).on('done', function(res) {
    console.log(JSON.stringify(res))
  })
})

  // namedMaps.definition({
  //   template_id: 'tpl_3d8e8416_866c_11e6_8c6b_0242ac110006'
  // })
  // .error(function() {
  //   console.log(arguments)
  // })
  //   .on('done', function(res) {
  //     console.log(JSON.stringify(res));
  //
  //   });
