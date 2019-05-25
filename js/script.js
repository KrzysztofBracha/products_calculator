"use strict";
window.onload = function () {

    function fantomalt() {
      function create_fantomalt_options() {
        for (let i = 1; i < 21; ++i) {
          let field = document.createElement("option");
          document.getElementById('fantomalt_kcal').options.add(field);
          field.value = 19 * i;
          field.innerText = 19 * i;
        }
      }
      create_fantomalt_options();

      document.getElementById('submit_fantomalt').addEventListener("click", function (evt) {
        evt.preventDefault();
        let select_id = document.getElementById("fantomalt_kcal");
        let kcal = select_id.options[select_id.selectedIndex].value;
        let scoops = kcal / 19;
        let grams = scoops * 5;
        let days = Math.floor(400 / grams);
        document.getElementById('description_fantomalt').innerHTML = 'Wartości Fantomalt dla ' + kcal + ' [kcal]:';
        document.getElementById('fantomalt_scoops').innerHTML = scoops;
        document.getElementById('fantomalt_grams').innerHTML = grams;
        document.getElementById('fantomalt_days').innerHTML = days;
      });
    }
    fantomalt();

    function prontifar() {
      function create_prontifar_options() {
        for (let i = 1; i < 21; ++i) {
          let field = document.createElement('option');
          document.getElementById('protifar_protein').options.add(field);
          field.value = 2.2 * i;
          field.innerText = Math.round((2.2 * i) * 100) / 100;
        }
      }
      create_prontifar_options();

      document.getElementById('submit_protifar').addEventListener('click', function (evt) {
        evt.preventDefault();
        let select_id = document.getElementById('protifar_protein');
        let protein = select_id.options[select_id.selectedIndex].value;
        let scoops = protein / 2.2;
        let grams = scoops * 2.5;
        let days = Math.floor(225 / grams);
        document.getElementById('description_protifar').innerHTML = 'Wartości Prontifar dla ' + Math.round((protein) * 100) / 100 + ' [g] białka:';
        document.getElementById('protifar_scoops').innerHTML = scoops;
        document.getElementById('protifar_grams').innerHTML = grams;
        document.getElementById('protifar_days').innerHTML = days;
      });
    }
    prontifar();

    function bebilon() {
      function create_bebilon_options() {
        for (let i = 1; i < 21; i++) {
          let field = document.createElement('option');
          document.getElementById('bebilon_ml').options.add(field);
          field.value = 100 * i;
          field.innerText = 100 * i;
        }
      }
      create_bebilon_options();

      document.getElementById('submit_bebilon').addEventListener('click', function (evt) {
        evt.preventDefault();
        let select_id = document.getElementById('bebilon_ml');
        let ml = select_id.options[select_id.selectedIndex].value;
        let scoops = ml / 100;
        let grams = scoops * 1.7;
        let days = Math.floor(135 / grams);
        document.getElementById('description_bebilon').innerHTML = 'Wartości Bebilon Nutrition dla ' + ml + ' [ml] diety:';
        document.getElementById('bebilon_scoops').innerHTML = scoops;
        document.getElementById('bebilon_grams').innerHTML = grams;
        document.getElementById('bebilon_days').innerHTML = days;
      });
    }
    bebilon();
}
