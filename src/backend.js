export class State {

  constructor() {
    this.cities = [];
    this.currentId = 0;
  }

  addCities() {
    for (let i = 0; i < 25; i++) {
    let city = new City(i);
    // let string = "id";
    this.cities.push(city);
    // this.cities[`${string}`] = city;
    }
  }

  randomContamination() {
    let randomCity = Math.floor((Math.random() * (25 - 0)));
    // console.log("LOG: randomCity",randomCity);
    this.cities[randomCity].contamination +=1;
    return randomCity;
  }

  infectOther() {
    if (this.cities.contamination > 9) {
      return true;
    } else {
      return false;
    }
  }


}



export class City {

  constructor(i) {
    this.contamination = 0;
    this.id = i;
  }

  setContamination() {
    setInterval(() => {
      this.contamination++;
    }, 10000);
  }


}


// let oregon = new State();
