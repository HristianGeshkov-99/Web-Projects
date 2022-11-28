$(document).ready(function () {
  $(".entry").hover(
    function () {
      $(this).css("background-color", "red");
    },
    function () {
      $(this).css("background-color", "#777");
    }
  );
  $(".entry").hover(
    function () {
      $(this).fadeTo("slow", 0.5, "swing");
    },
    function () {
      $(this).fadeTo("slow", 1, "swing");
    }
  );
  $("#lyrics-head").click(function () {
    $("#lyrics").slideToggle("slow");
  });
  $("#story-head").click(function () {
    $("#story").slideToggle("slow");
  });
  $("#family-head").click(function () {
    $("#family").slideToggle("slow");
  });
});
