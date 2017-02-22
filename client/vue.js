var app = new Vue({
  el: '#app',
  data: {
    houses: [],
    houseCreate: {
      title : '',
  		price : '',
  		detail : '',
  		image : '',
  		latitude: '',
      longitude: ''
    },
    houseEdit: {
      title : '',
  		price : '',
  		detail : '',
  		image : '',
  		latitude: '',
      longitude: ''
    }
  },
  methods: {
    listHouse: function(){
      axios.get('http://localhost:3000/api/houses')
      .then(function(response){
        console.log(response);
        app.houses = response.data
      })
    },
    createHouse: function(){
      axios.post('http://localhost:3000/api/houses', {
        title : app.houseCreate.title,
    		price : app.houseCreate.price,
    		detail : app.houseCreate.detail,
    		image : app.houseCreate.image,
    		latitude: app.houseCreate.latitude,
        longitude: app.houseCreate.longitude
      })
      .then(function(house){
        app.houses.push(house.data)
      })
    },
    deleteHouse: function(id){
      axios.delete(`http://localhost:3000/api/houses/${id}`)
      .then(function() {
        app.houses = app.houses.filter(function(house){
          return house._id != id
        })
      })
    },
    editHouse: function(id){
      axios.put(`http://localhost:3000/api/houses/${id}`, {
        title : app.houseEdit.title,
    		price : app.houseEdit.price,
    		detail : app.houseEdit.detail,
    		image : app.houseEdit.image,
    		latitude: app.houseEdit.latitude,
        longitude: app.houseEdit.longitude
      })
      .then(function(){
        app.listHouse()
      })
    },
    modalEdit: function(id, price, image, detail, longitude, latitude, title) {
      $('.ui.modal#modalEdit')
      .modal('setting', {
        onApprove: function(){
          app.editHouse(id)
        }
      })
      .modal('show')
      app.houseEdit.title = title
      app.houseEdit.price = price
      app.houseEdit.detail = detail
      app.houseEdit.image = image
      var map = new GMaps({
        el: '#mapEdit',
        lat: latitude,
        lng: longitude,
        click: function(e){
          map.removeMarkers()
          map.addMarker({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          })
          app.houseEdit.latitude = e.latLng.lat()
          app.houseEdit.longitude = e.latLng.lng()
        }
      })
      map.addMarker({
        lat: latitude,
        lng: longitude,
        title: 'Home Location'
      })
    },
    modalCreate: function() {
      $('.ui.modal#modalCreate')
      .modal('show')
      var map = new GMaps({
        el: '#createMap',
        lat: -6.211545,
        lng: 106.845323,
        click: function(e){
          map.removeMarkers()
          map.addMarker({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
          })
          app.houseCreate.latitude = e.latLng.lat()
          app.houseCreate.longitude = e.latLng.lng()
        }
      })
    },
    modalMap: function(latitude, longitude){
      $('.small.modal#modalMap')
      .modal('show')
      var map = new GMaps({
        el: '#mapDetail',
        lat: latitude,
        lng: longitude,
      })
      map.addMarker({
        lat: latitude,
        lng: longitude,
        title: 'Home Location',
        infoWindow: {
          content:
            `<button class="ui button positive"><i class="icon payment"></i>BUY NOW</button>`
        }
      })
    }
  }
})
app.listHouse()
