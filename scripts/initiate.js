$(document).ready(function () {
  for(var i = 1; i <= 10; i++) {
    $("#board").append("<div id=\"row" + i + "\" class=\"row\">");
    for(var j = 1; j <= 10; j++) {
      $("#row" + i).append("<div id=\"" + i + "-" + j + "\" class=\"tile\">");
    }
  }
  $("#start").click(function() {
    for (var i = 1; i <= 10; i++) {
      for (var j = 1; j <= 10; j++) {
        tiles[i][j] = true;
        $("#" + i + "-" + j).css("background-color", "#fff");
      }
    }
    if (typeof loop != "undefined")
      clearInterval(loop);
    initiate();
    loop = setInterval(update, 500);
    randomize();
  });
});
