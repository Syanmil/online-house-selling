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
    editHouse: function(id){
      axios.put(`http://localhost:3000/api/houses/${id}`, {
        title : $('#modalEdit input[name=title]').val(),
    		price : $('#modalEdit input[name=price]').val(),
    		detail : $('#modalEdit textarea[name=detail]').val(),
    		image : $('#modalEdit input[name=image]').val(),
    		latitude: $('#modalEdit input[name=latitude]').val(),
        longitude: $('#modalEdit input[name=longitude]').val()
      })
      .then(function(){
        app.listHouse()
      })
    },
    modalEdit: function(id, price, image, detail, longitude, latitude, title) {
      $('.ui.modal#modalEdit')
      .modal('setting', {
        onShow: function(){
          $('#modalEdit input[name=title]').val(title)
          $('#modalEdit input[name=price]').val(price)
          $('#modalEdit textarea[name=detail]').val(detail)
          $('#modalEdit input[name=image]').val(image)
          $('#modalEdit input[name=latitude]').val(latitude)
          $('#modalEdit input[name=longitude]').val(longitude)
        },
        onApprove: function(){
          app.editHouse(id)
        }
      })
      .modal('show')
    }
  }
})
app.listHouse()
