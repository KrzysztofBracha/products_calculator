window.onload = function() {
for (var i = 1; i < 21; i++) {
  var field = document.createElement("option");
  document.getElementById('fantomalt_kcal').options.add(field);
  field.value = 19 * i;
  field.innerText = 19 * i;
}

document.getElementById('submit_fantomalt').addEventListener("click", function (evt) {
  evt.preventDefault();
  var select_id = document.getElementById("fantomalt_kcal");
  var kcal = select_id.options[select_id.selectedIndex].value;
  var scoops = kcal / 19;
  var grams = scoops * 5;
  var days = Math.floor(400 / grams);
  document.getElementById('description_fantomalt').innerHTML = 'Wartości Fantomalt dla ' + kcal + ' [kcal]:';
  document.getElementById('fantomalt_scoops').innerHTML = scoops;
  document.getElementById('fantomalt_grams').innerHTML = grams;
  document.getElementById('fantomalt_days').innerHTML = days;
});
// ====================================================================================

for (var i = 1; i < 21; i++) {
  var field = document.createElement('option');
  document.getElementById('protifar_protein').options.add(field);
  field.value = 2.2 * i;
  field.innerText = Math.round((2.2 * i) * 100) / 100;
}

document.getElementById('submit_protifar').addEventListener('click', function (evt) {
  evt.preventDefault();
  var select_id = document.getElementById('protifar_protein');
  var protein = select_id.options[select_id.selectedIndex].value;
  var scoops = protein / 2.2;
  var grams = scoops * 2.5;
  var days = Math.floor(225 / grams);
  document.getElementById('description_protifar').innerHTML = 'Wartości Prontifar dla ' + Math.round((protein) * 100) / 100 + ' [g] białka:';
  document.getElementById('protifar_scoops').innerHTML = scoops;
  document.getElementById('protifar_grams').innerHTML = grams;
  document.getElementById('protifar_days').innerHTML = days;
});
// =====================================================================================

for (var i = 1; i < 21; i++) {
  var field = document.createElement('option');
  document.getElementById('bebilon_ml').options.add(field);
  field.value = 100 * i;
  field.innerText = 100 * i;
}

document.getElementById('submit_bebilon').addEventListener('click', function (evt) {
  evt.preventDefault();
  var select_id = document.getElementById('bebilon_ml');
  var ml = select_id.options[select_id.selectedIndex].value;
  var scoops = ml / 100;
  var grams = scoops * 1.7;
  var days = Math.floor(135 / grams);
  document.getElementById('description_bebilon').innerHTML = 'Wartości Bebilon Nutrition dla ' + ml + ' [ml] diety:';
  document.getElementById('bebilon_scoops').innerHTML = scoops;
  document.getElementById('bebilon_grams').innerHTML = grams;
  document.getElementById('bebilon_days').innerHTML = days;
});
}
