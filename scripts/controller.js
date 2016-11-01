var draw = function(joint) {
  $("#" + joint[0] + "-" + joint[1]).css("background-color", "#000");
  tiles[joint[0]][joint[1]] = false;
};

var erase = function(joint) {
  $("#" + joint[0] + "-" + joint[1]).css("background-color", "#fff");
  tiles[joint[0]][joint[1]] = true;
};

var initiate = function() {
  head = [5, 3, "right"];
  draw(head);
  tail = new Array();
  tail[0] = [5, 2];
  tail[1] = [5, 1];
  tail.forEach(function(joint) {
    draw(joint);
  });
};

var update = function() {
  switch (head[2]) {

  case "right":
    if(head[1] >= 10) {
      clearInterval(loop);
      alert("YOU DIE");
    } else {
      draw([head[0], head[1] + 1]);
      erase(tail[tail.length - 1]);
      tail.unshift([head[0], head[1]]);
      // draw(tail[0]);
      tail.pop();
      head[1] += 1;
    }
    break;

  case "left":
    if (head[1] <= 1) {
      clearInterval(loop);
      alert("YOU DIE");
    } else {
      draw([head[0], head[1] - 1]);
      erase(tail[tail.length - 1]);
      tail.unshift([head[0], head[1]]);
      // draw(tail[0]);
      tail.pop();
      head[1] -= 1;
    }
    break;

  case "up":
    if (head[0] <= 1) {
      clearInterval(loop);
      alert("YOU DIE");
    } else {
      draw([head[0] - 1, head[1]]);
      erase(tail[tail.length - 1]);
      tail.unshift([head[0], head[1]]);
      // draw(tail[0]);
      tail.pop();
      head[0] -= 1;
    }
    break;

  case "down":
    if (head[0] >= 10) {
      clearInterval(loop);
      alert("YOU DIE");
    } else {
      draw([head[0] + 1, head[1]]);
      erase(tail[tail.length - 1]);
      tail.unshift([head[0], head[1]]);
      // draw(tail[0]);
      tail.pop();
      head[0] += 1;
    }
    break;
  }

  if (head[0] == pea[0] && head[1] == pea[1]) {
    tail.unshift([head[0], head[1]]);
    randomize();
  }

  for (var i = 2; i != tail.length; i++) {
    if (head[0] == tail[i][0] && head[1] == tail[i][1]) {
      clearInterval(loop);
      alert("YOU DIE");
    }
  }
};
// setInterval(update, 1000);


$(document).keydown(function(e) {
  switch (e.which) {

  case 37:
    if (head[2] != "right" && head[2] != "left"){
      head[2] = "left";
      // update();
    }
    break;

  case 38:
    if (head[2] != "down" && head[2] != "up"){
      head[2] = "up";
      // update();
    }
    break;

  case 39:
    if(head[2] != "left" && head[2] != "right"){
      head[2] = "right";
      // update();
    }
    break;

  case 40:
    if (head[2] != "up" && head[2] != "down"){
      head[2] = "down";
      // update();
    }
    break;

  default:
    return;
  }
});

var randomize = function() {
  var position = [Math.floor(Math.random() * 10 + 1), Math.floor(Math.random() * 10 + 1)];
  if (tiles[position[0]][position[1]]) {
    draw(position);
    pea = position;
  } else {
    return randomize();
  }
};
