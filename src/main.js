import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
// import { City } from "./backend.js";
import { World } from "./backend.js";

//
// let oregon = new State();

// for (let i = 0; i < 26; i++) {
//   let ("city" + i) = new City(i);
//   oregon.cities.push("city" + i);
// }



$(document).ready(function(){
  $("#startGame").click(function(){

    let earth = new World();
    earth.addCities();
    earth.randomContamination();
    earth.randomContamination();
    earth.infectOther();
    let method;

    setTimeout(() => {
      $(".instructions").fadeOut(500);
    }, 6500);

    setTimeout(() => {
      $("#vaccinate").show();
    }, 7000);

    setTimeout(() => {
      $("#treat").show();
    }, 20000);

    setInterval(() => {
      for (let i = 0; i < 25; i++) {
        if (earth.cities[i].contamination < 0) {
          $(".contamination" + i).text("0");
        } else {
          $(".contamination" + i).text(earth.cities[i].contamination);
        }
      }
    }, 100);


    setInterval(() => {

      for (let i = 0; i < 25; i++) {
        if (earth.cities[i].contamination > 9) {
          // let id = $(this).attr('id');
          $("#"+i).addClass("infected3");
        } else if (earth.cities[i].contamination > 5) {
          $("#"+i).addClass("infected2");
        } else if (earth.cities[i].contamination > 1) {
          $("#"+i).addClass("infected1");
        }
        else {
          $("#"+i).removeClass("infected3 infected2 infected1");
        }
      }
    }, 101);


    setInterval(() => {
      if (earth.results()) {
        $("#results").text(earth.results());
      }
    });

    $("#vaccinate").click(function() {
      method = "vaccinate";
      $("#treat").removeClass("btn-success");
      $("#treat").addClass("btn-secondary");
      $("#vaccinate").removeClass("btn-secondary");
      $("#vaccinate").addClass("btn-success");
    });

    $("#treat").click(function() {
      method = "treat";
      $("#vaccinate").removeClass("btn-success");
      $("#vaccinate").addClass("btn-secondary");
      $("#treat").removeClass("btn-secondary");
      $("#treat").addClass("btn-success");

    });

    $("td").click(function(){
      if (method === "vaccinate") {
        let id = $(this).attr('id');
        earth.cities[id].vaccinate();

      } else if (method === "treat") {
        let id = $(this).attr('id');
        earth.cities[id].treat();
      }

    });

  });
});
