var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
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
        console.log('success');
        app.houses.push(house.data)
      })
    },
    deleteHouse: function(){

    },
    editHouse: function(){

    }
  }
})
app.listHouse()
