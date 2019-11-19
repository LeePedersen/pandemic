
import { State } from './../src/backend.js';
import { City } from './../src/backend.js';

describe('City', () => {
  jest.useFakeTimers();
  let portland;
  let oregon;


  beforeEach(function() {
    oregon = new State();
    oregon.addCities();
    // portland = new City(0);
    // portland.setContamination();
  });

  afterEach(function() {
    jest.clearAllTimers();
  });

  test('should have a name and a contamination level of 0 when it is created', () => {
    portland = new City(0);
    portland.setContamination();
    expect(portland.id).toEqual(0);
    expect(portland.contamination).toEqual(0);
  });

  test('should have a contamination level of 3 after 30001 milliseconds', () => {
    portland = new City(0);
    portland.setContamination();
    jest.advanceTimersByTime(30001);
    expect(portland.contamination).toEqual(3);
  });
  //
  test('should add contamination and id for each city, testing on index 0', function() {
    expect(oregon.cities[0]).toEqual({"contamination": 0, "id": 0});
  });
  //
  test('should create one random city with a contamination 1', function() {
    let randomIndex = oregon.randomContamination();
    expect(oregon.cities[randomIndex].contamination).toEqual(1);
  });

  test('should contaminate nearby city when contamination > 0', function() {
    let randomIndex = oregon.randomContamination();
    oregon.infectOther();
    jest.advanceTimersByTime(10001);
    console.log("Random index: ",(randomIndex));
    console.log("array of cities: ", oregon.cities);

    expect(oregon.cities[randomIndex - 1].contamination).toEqual(1);
  });
  //
  // test('should have a food level of ten if it is fed', function() {
  //   jest.advanceTimersByTime(9001);
  //   fuzzy.feed();
  //   expect(fuzzy.foodLevel).toEqual(10);
  // });

});
