var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    houses: [],
    houseInput: {
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
    }
  }
})
app.listHouse()
