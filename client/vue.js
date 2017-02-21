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
    }
  },
  methods: {
    listHouse: function(){
      axios.get('http://localhost:3000/api/houses')
      .then(function(response){
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
    editHouse: function(){

    }
  }
})
app.listHouse()
