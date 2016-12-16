$(document).ready(function(){


$("#city-input").submit(function(event){

  //you can chain the action
  var cityInput = $("#city-type").val().toLowerCase();
//I had this setup earlier before chaning the action
  // var enteredCity = $("city-type").val();
  // var cityInput = enteredCity.toLowerCase();
  // console.log(cityInput);

//discovered .match  Yay!
  if (cityInput.match(/^(sf|san francisco|san fran)$/)) {
    $("body").removeClass();
    $("body").addClass('sf');
  } else if (cityInput.match(/^(nyc|new york|new york city)$/)) {
    $("body").removeClass();
    $("body").addClass('nyc');
  } else if (cityInput.match(/^(la|los angeles|l\.a\.)$/)) {
    $("body").removeClass();
    $("body").addClass('la');
  } else if (cityInput === 'sydney') {
    $("body").removeClass();
    $("body").addClass('sydney');
  } else if (cityInput === 'austin') {
    $("body").removeClass();
    $("body").addClass('austin');
  }
  else {
    alert("Please enter another city");
  }

event.preventDefault();
});

});
