$(document).ready(function(){

  //testing to see what type of input belongs to the id city-type.
  var type = ($('#city-type').attr("type"));
  alert("Type of input box is: " + type);

$("#city-input").submit(function(event){


  //you can chain the action
  var cityInput = $("#city-type").val().toLowerCase();

  //I had this setup earlier before chaning the action
  // var enteredCity = $("city-type").val();
  // var cityInput = enteredCity.toLowerCase();
  // console.log(cityInput);

//discovered .match  Yay!
  if (cityInput.match(/^(sf|san francisco|san fran|bay area|sfo)$/)) {
    $("body").removeClass();
    $("body").addClass('sf');
    console.log("aslkdjfasj");
  } else if (cityInput.match(/^(nyc|new york|new york city)$/)) {
    $("body").removeClass();
    $("body").addClass('nyc');
  } else if (cityInput.match(/^(la|los angeles|l\.a\.|lax)$/)) {
    $("body").removeClass();
    $("body").addClass('la');
  } else if (cityInput === 'sydney') {
    $("body").removeClass();
    $("body").addClass('sydney' || cityInput === 'syd');
  } else if (cityInput === 'austin') {
    $("body").removeClass();
    $("body").addClass('austin');
  // used || as required by homework assignment
  } else if (cityInput === 'paris' || cityInput === 'cdg' || cityInput === 'city of lights') {
    $("body").removeClass();
    $("body").addClass('paris');
  }

  else {
    document.reset();
  }

event.preventDefault();
});

});
