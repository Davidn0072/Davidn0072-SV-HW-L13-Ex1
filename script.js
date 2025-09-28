class RentalTrip{
    constructor(renterName,rentalDate,rentalMileage){
      this.renterName = renterName;
      this.rentalDate = rentalDate;
      this.rentalMileage = rentalMileage;       
    }
}

class Car {
    constructor(companyName, modelName) {
        this.companyName = companyName;  
        this.modelName = modelName;      
        this.isAvailable = true;         
        this.totalKilometers = 0;        
        this.trips = [];                 
    }
    calcTotalKilometers(){
       this.totalKilometers = this.trips.reduce((accumulator, currentValue) => {
       return accumulator + currentValue.rentalMileage;}, 0);
    }
    addRentalTrip(RentalTrip ){
      this.isAvailable = false;
      this.trips.push(RentalTrip);
      this.calcTotalKilometers();
    }    
}

class CompanyFleet {
    printAvailable(){
      this.cars.forEach((item,i,arr)=>{
        if (item.isAvailable)
          console.log("Available:",item)   
      })
    }
    getMaxTotalKilometers() {
      if (this.cars.length === 0) {
        return null;  
      }
      const maxCar = this.cars.reduce(function (currentMax, currentCar) {
      if (currentCar.totalKilometers > currentMax.totalKilometers) {
        return currentCar; 
      } else {
        return currentMax; 
      }
    });
      return maxCar; 
    }
    addNewCar(companyName, modelName){
      this.cars.push(new Car(companyName, modelName));
    }
    addRentalTrip(companyName, modelName, RentalTrip ){
      const foundCar = this.cars.find(car => (car.companyName === companyName)&&(car.modelName === modelName));
       if (foundCar)
      {
        foundCar.addRentalTrip(RentalTrip ) 
      }
      else
      {
        console.log("CAR NOT FOUND:"+ companyName+" "+ modelName)
      }
    }
    constructor(companyName) {
        this.companyName = companyName; 
        this.cars = [];                 
    }
}

const companyFleet = new CompanyFleet('Avis');
companyFleet.addNewCar("Toyota","Corolla");
companyFleet.addNewCar("Honda","Civic");
companyFleet.addNewCar("Ford","Focus");
companyFleet.addNewCar("Hyundai","Elantra");
companyFleet.addNewCar("Chevrolet","Malibu");
companyFleet.addNewCar("Volkswagen","Golf");
companyFleet.addNewCar("Nissan","Sentra");
companyFleet.addNewCar("Subaru","Impreza");

companyFleet.addRentalTrip("Toyota", "Corolla", new RentalTrip("John Smith", "2024-01-14", 120));
//companyFleet.addRentalTrip("Honda", "Civic", new RentalTrip("Emily Johnson", "2024-01-15", 85));
companyFleet.addRentalTrip("Ford", "Focus", new RentalTrip("Michael Brown", "2024-01-16", 95));
//companyFleet.addRentalTrip("Hyundai", "Elantra", new RentalTrip("Sarah Davis", "2024-01-17", 110));
companyFleet.addRentalTrip("Chevrolet", "Malibu", new RentalTrip("David Wilson", "2024-02-18", 140));
//companyFleet.addRentalTrip("Volkswagen", "Golf", new RentalTrip("Laura Martinez", "2024-02-19", 70));
companyFleet.addRentalTrip("Nissan", "Sentra", new RentalTrip("James Anderson", "2024-02-20", 130));
//companyFleet.addRentalTrip("Subaru", "Impreza", new RentalTrip("Olivia Thomas", "2024-02-21", 90));

companyFleet.addRentalTrip("Toyota", "Corolla", new RentalTrip("Robert Jackson", "2024-03-22", 100));
//companyFleet.addRentalTrip("Honda", "Civic", new RentalTrip("Linda White", "2024-03-23", 115));
companyFleet.addRentalTrip("Ford", "Focus", new RentalTrip("William Harris", "2024-03-24", 125));
//companyFleet.addRentalTrip("Hyundai", "Elantra", new RentalTrip("Barbara Clark", "2024-03-25", 80));
companyFleet.addRentalTrip("Chevrolet", "Malibu", new RentalTrip("Joseph Lewis", "2024-04-26", 95));
//companyFleet.addRentalTrip("Volkswagen", "Golf", new RentalTrip("Patricia Young", "2024-04-27", 105));
companyFleet.addRentalTrip("Nissan", "Sentra", new RentalTrip("Charles King", "2024-04-28", 135));
//companyFleet.addRentalTrip("Subaru", "Impreza", new RentalTrip("Jennifer Scott", "2024-04-29", 85));

companyFleet.addRentalTrip("Toyota", "Corolla", new RentalTrip("Thomas Green", "2024-05-30", 140));
//companyFleet.addRentalTrip("Honda", "Civic", new RentalTrip("Susan Adams", "2024-05-31", 75));
companyFleet.addRentalTrip("Ford", "Focus", new RentalTrip("Christopher Baker", "2024-06-14", 120));
//companyFleet.addRentalTrip("Hyundai", "Elantra", new RentalTrip("Karen Gonzalez", "2024-06-15", 110));
companyFleet.addRentalTrip("Chevrolet", "Malibu", new RentalTrip("Matthew Nelson", "2024-06-16", 95));
//companyFleet.addRentalTrip("Volkswagen", "Golf", new RentalTrip("Nancy Carter", "2024-06-17", 100));
companyFleet.addRentalTrip("Nissan", "XSentra", new RentalTrip("Anthony Mitchell", "2024-07-18", 130));
companyFleet.addRentalTrip("XSubaru", "Impreza", new RentalTrip("Sandra Perez", "2024-07-19", 85));


//console.log(companyFleet.cars);
console.log("getMaxTotalKilometers:",companyFleet.getMaxTotalKilometers());
companyFleet.printAvailable();


