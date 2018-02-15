let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;

let passengerId = 0;

let tripId = 0;

class Driver {
  constructor(name){
    this.id = ++driverId;
    this.name = name;
    store.drivers.push(this);
  };
  trips() {
    return store.trips.filter(function(trip){
      return trip.driverId === this.id;
    }.bind(this))
  }; // end of trips()
  passengers() {
    return this.trips().map(function(trip){
      return trip.passenger();
    })
  }; //end of passengers()
};



class Passenger {
  constructor(name){
    this.id = ++passengerId;
    this.name = name;
    store.passengers.push(this);
  }; // end of constructor;;
  trips() {
    return store.trips.filter(function(trip){
      return trip.passengerId === this.id;
    }.bind(this))
  }; // end of trips()

  drivers() { // HAD TO LOOK AT SOLUTION; WOULD HAVE NEVER GOTTEN THIS OTHERWISE
     return this.trips().map(trip => { // SEE USE OF THIS.TRIPS
       return trip.driver();
     });
   }
};


class Trip {
  constructor(driver, passenger){
    this.id = ++tripId;
    store.trips.push(this);
    if (driver) {
      this.driverId = driver.id
    };
    if (passenger) {
      this.passengerId = passenger.id
    };
  }; // end of constructor

  passenger() {
    console.log(this)
    return store.passengers.find(function(passenger){
      console.log(this)
      return passenger.id === this.passengerId;
    }.bind(this)); //.bind(this);
  }; //end of passenger()

  driver() {
    return store.drivers.find(function(driver) {
      return driver.id === this.driverId
    }.bind(this));
  } // end of driver()

}; // end of class
