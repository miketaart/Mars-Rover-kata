const myRover = {
  direction: "n",
  x:0,
  y:0,
  travelLog: [{x:0, y:0}]
};

// a function to turn left once. It announces its move and also prints the new direction.
function turnLeft(rover){
  console.log("turnLeft was called!");
  let myDirection = rover.direction;
  switch (rover.direction) {
    case "n":
      rover.direction = "w";
      break;
    case "s":
      rover.direction = "e";
      break;
    case "e":
      rover.direction = "n";
      break;
    case "w":
      rover.direction = "s";
      break;
  }
  console.log("New direction of Rover is " + rover.direction);
};

// opposite of turnLeft function
function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "n":
      rover.direction = "e";
      break;
    case "s":
      rover.direction = "w";
      break;
    case "e":
      rover.direction = "s";
      break;
    case "w":
      rover.direction = "n";
      break;
  }
  console.log("New direction of Rover is " + rover.direction);
};

// not sure this is the most efficient way since there are lots of lines of codes but in this way we can be sure that it won't loop the coordinates when the rover is at the border.
function moveForward(rover) {
  console.log("moveForward was called!")
  if(rover.direction === "n" && rover.y > 0) { // restriction y<9 is not necessary to state because moving forward in direction North will always decrease the y coordinate.
    rover.y--;
    console.log(`Current coordinates => [x:${rover.x}, y:${rover.y}]`);
  } else if (rover.direction === "s" && rover.y < 9) {
    rover.y++;
    console.log(`Current coordinates => [x:${rover.x}, y:${rover.y}]`);
  } else if (rover.direction === "e" && rover.x < 9) {
    rover.x++;
    console.log(`Current coordinates => [x:${rover.x}, y:${rover.y}]`);
  } else if (rover.direction === "w" && rover.x > 0) {
    rover.x--;
    console.log(`Current coordinates => [x:${rover.x}, y:${rover.y}]`);
  } else {
    console.log(`Rover can not pass the holy border. Current coordinates => [x:${rover.x}, y:${rover.y}]`);
  }
  let currentCoordinates = {x: rover.x, y: rover.y};
      rover.travelLog.push(currentCoordinates);
};

  function moveBackward(rover) {
      console.log("moveBackward was called!")
      if(rover.direction === "s" && rover.y > 0) {
        rover.y--;
        console.log(`Current coordinates => [x:${rover.x}, y:${rover.y}]`);
      } else if (rover.direction === "n" && rover.y < 9) {
        rover.y++;
        console.log(`Current coordinates => [x:${rover.x}, y:${rover.y}]`);
      } else if (rover.direction === "w" && rover.x < 9) {
        rover.x++;
        console.log(`Current coordinates => [x:${rover.x}, y:${rover.y}]`);
      } else if (rover.direction === "e" && rover.x > 0) {
        rover.x--;
        console.log(`Current coordinates => [x:${rover.x}, y:${rover.y}]`);
      } else {
        console.log(`Rover can not pass the holy border. Current coordinates => [x:${rover.x}, y:${rover.y}]`);
      }
  let currentCoordinates = {x: rover.x, y: rover.y};
      rover.travelLog.push(currentCoordinates);
};

// command function which 'passes' the letters to the turn/move functions in order to execute the orders.
function command(rover, directions, currentDirection) {
 for (let i = 0; i < directions.length; i++) {
  let letter = directions[i];
  switch (letter) {
      case "f":
      moveForward(rover);
      break;
     case "r":
      turnRight(rover);
      break;
     case "l":
      turnLeft(rover);
      break;
     case "b":
      moveBackward(rover);
      break;
     default:
      console.log("Please only use the commands: 'f', 'r', 'l' or 'b'.");
   }
  };

 switch (currentDirection) {
      case "c": {
          if (rover.direction === "n") {
              console.log("Rover is currently facing the north");
              } else if (rover.direction === "s") {
                  console.log("Rover is currently facing the south");
              } else if (rover.direction === "e") {
                  console.log("Rover is currently facing the east");
              } else {
                  console.log("Rover is currently facing the west");
              }
          };
          break;
      default:
          break;
  };

 console.log(rover.travelLog); // Iteration 5
};

command (myRover,"lflflf");

console.log(myRover.travelLog); // why doesn't it print the objects in the array? In Codepen it does.

// This is pretty much the basic assignment. I will check your review and add the bonuses to the assignment later.