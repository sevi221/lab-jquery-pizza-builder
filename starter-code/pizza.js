// Write your Pizza Builder JavaScript in this file.

// first iteration
$(function() {

  // second iteration
  $(".sauce").removeClass("sauce-white");
  $(".btn-sauce").removeClass("active");
  $(".crust").removeClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");

  $("aside.panel strong").text(sumaTotal());

  $(".btn-pepperonni").click(function() {
    $("aside.panel li:nth-child(1)").toggle();
    if ($(this).hasClass("active")) {
      $(".pep").hide();
      $(".btn-pepperonni").removeClass("active");
    } else {
      $(".pep").show();
      $(".btn-pepperonni").addClass("active");
    }
      $("aside.panel strong").text(sumaTotal());
  });
  $(".btn-mushrooms").click(function() {
    $("aside.panel li:nth-child(2)").toggle();
    if ($(this).hasClass("active")) {
      $(".mushroom").hide();
      $(".btn-mushrooms").removeClass("active");
    } else {
      $(".mushroom").show();
      $(".btn-mushrooms").addClass("active");
    }
      $("aside.panel strong").text(sumaTotal());
  });
  $(".btn-green-peppers").click(function() {
    $("aside.panel li:nth-child(3)").toggle();
    if ($(this).hasClass("active")) {
      $(".green-pepper").hide();
      $(".btn-green-peppers").removeClass("active");
    } else {
      $(".green-pepper").show();
      $(".btn-green-peppers").addClass("active");
    }
      $("aside.panel strong").text(sumaTotal());
  });

  $(".btn-sauce").click(function() {
     // Debes de quitar y poner la clase sauce-white, no active, se hace con toggleClass.
     // Si a toggleClass le pones 2 clases las intercambia una por la otra y viceversa.
    $(".sauce").toggleClass("sauce-white");
    $("aside.panel li:nth-child(4)").toggle();
    if ($(this).hasClass("active")) {
      $(".btn-sauce").removeClass("active");
    } else {
      $(".btn-sauce").addClass("active");
    }
      $("aside.panel strong").text(sumaTotal());
  });

   $(".btn-crust").click(function() {

    $("aside.panel li:nth-child(5)").toggle();
     // Debes de quitar y poner la clase crust-gluten-free, no active, se hace con toggleClass.
     // Si a toggleClass le pones 2 clases las intercambia una por la otra y viceversa.
    ($(".crust").toggleClass("crust-gluten-free"));
    if ($(this).hasClass("active")) {
      $(".btn-crust").removeClass("active");
    } else {
      $(".btn-crust").addClass("active");
    }
      $("aside.panel strong").text(sumaTotal());
  });


  // Third iteration is already in the first/second one
  // Fourth iteration is already in the first/second one
  // Fifth iteration


});

function sumaTotal() {
  var sum = 10;
  // Te olvidaste de una n en pepperonni
  if ($(".btn-pepperonni").hasClass("active")) {
    sum += 1;
  }
  if ($(".btn-mushrooms").hasClass("active")) {
    sum += 1;
  }
  if ($(".btn-green-peppers").hasClass("active")) {
    sum += 1;
  }
  // Hay que cobrarlo cuando no esté activo (white sauce (desactivado sauce normal) = + cara)
  if (!$(".btn-sauce").hasClass("active")) {
    sum += 3;
  }
  // Hay que cobrarlo cuando no esté activo (Gluten free (desactivado) = + cara)
  if (!$(".btn-crust").hasClass("active")) {
    sum += 5;
  }
  return sum;
}
