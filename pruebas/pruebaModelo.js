const mongoose = require('mongoose');
const Trip = require('./models/trip.model');

(async () =>{
    await mongoose.connect(mongo mongodb://mongo:EE1ececB4aa15-4HDAFGd3FFcg1B3ECD@roundhouse.proxy.rlwy.net:36489);
    
    const newTrip = await Trip.create({
        name: 'prueba de viaje',
        description: 'prueba de desc',
        destination: 'Berlin',
        category: 'amigos',
        start_date: '2022-05-02'
    });

    console.log(newTrip);
})();
