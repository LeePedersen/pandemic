export class World {

  constructor() {
    this.cities = [];
    this.currentId = 0;
  }

  addCities() {
    for (let i = 0; i < 25; i++) {
      let city = new City(i);
      this.cities.push(city);
    // this.cities[`${string}`] = city;
    }
  }

  randomContamination() {
    let randomCity = Math.floor((Math.random() * (25 - 0)));
    this.cities[randomCity].contamination +=1;
    return randomCity;
  }

  infectOther() {
    setInterval(() => {
      let contaminatedArray = [];
      let contaminatedIndex = [];
      for (let i = 0; i < 25; i++) {
        if (this.cities[i].contamination > 0) {
          contaminatedArray.push(this.cities[i]);
          contaminatedIndex.push(i);

        }
      }
      contaminatedArray.forEach((city, index) => {
        if (contaminatedArray[index].id < 19 && contaminatedArray[index].id > 4) {
          city.contamination++;
          this.cities[contaminatedIndex[index] + 1].contamination++;
          this.cities[contaminatedIndex[index] - 1].contamination++;
          this.cities[contaminatedIndex[index] + 5].contamination++;
          this.cities[contaminatedIndex[index] - 5].contamination++;
        } else if (contaminatedArray[index].id < 24 && contaminatedArray[index].id > 4) {
          city.contamination++;
          this.cities[contaminatedIndex[index] + 1].contamination++;
          this.cities[contaminatedIndex[index] - 1].contamination++;
          this.cities[contaminatedIndex[index] - 5].contamination++;
        } else if (contaminatedArray[index].id < 4 && contaminatedArray[index].id > 0) {
          city.contamination++;
          this.cities[contaminatedIndex[index] + 1].contamination++;
          this.cities[contaminatedIndex[index] - 1].contamination++;
          this.cities[contaminatedIndex[index] + 5].contamination++;
        } else if (contaminatedArray[index].id === 0) {
          city.contamination++;
          this.cities[contaminatedIndex[index] + 1].contamination++;
          this.cities[contaminatedIndex[index] + 5].contamination++;
        } else if (contaminatedArray[index].id === 24){
          city.contamination++;
          this.cities[contaminatedIndex[index] - 1].contamination++;
          this.cities[contaminatedIndex[index] - 5].contamination++;
        }
      });
    }, 10000);
  }

  treat(id) {
    this.cities[id].contamination -= 3;
  }

  score() {
    let score = 0;
    for (let i = 0; i < 25; i++) {
      if (this.cities[i].contamination > 0) {
        score += this.cities[i].contamination;
      }
    }
    return score;
  }

  results() {
    let score = this.score();
    if (score <= 0) {
      return "You cured the planet";
    } else if (score > 250) {
      return "Everyone's dead";
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

  vaccinate() {
    if (this.contamination < 1) {
      this.contamination = -15;
    } else if (this.contamination > 0) {
      this.contamination -= 1;
    }
  }



}
