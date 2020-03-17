function myMap() {
  var mapOptions1 = {
    center: new google.maps.LatLng(25.130098, 55.380181),
    zoom:15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var mapOptions2 = {
    center: new google.maps.LatLng(25.130098, 55.380181),
    zoom:15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var mapOptions3 = {
    center: new google.maps.LatLng(25.130098, 55.380181),
    zoom:15
  };

  var map1 = new google.maps.Map(document.getElementById("g_map_aus"),mapOptions1);
  var latlng = new google.maps.LatLng(25.130098, 55.380181);
  var myMarker = new google.maps.Marker(
    {
        position: latlng,
        map: map1,
        title:"n0/58 Krikton Drive"
   });


  var map2 = new google.maps.Map(document.getElementById("g_map_uk"),mapOptions2);
  var latlng = new google.maps.LatLng(25.130098, 55.380181);
  var myMarker = new google.maps.Marker(
    {
        position: latlng,
        map: map2,
        title:"68 Hatton Garden"
   });


  var map3 = new google.maps.Map(document.getElementById("g_map_sl"),mapOptions3);
  var latlng = new google.maps.LatLng(25.130098, 55.380181);
  var myMarker = new google.maps.Marker(
    {
        position: latlng,
        map: map3,
        title:"Nekfa"
   });

}