import { TelloController } from "./tello-controller";
import readline from "readline";

const telloIP: string = "192.168.10.1";
const telloPort: number = 8889;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tello = new TelloController(telloIP, telloPort);

const connected = tello.connected();

connected.then(() => {
  console.log("Connected to Tello");

  rl.setPrompt("Tello> :");

  rl.prompt();

  rl.on("line", async (line) => {
    const command = line.trim();

    switch (command) {
      case "takeoff":
        await tello.takeOff();
        break;
      case "land":
        await tello.land();
        break;
      case "emergency":
        await tello.emergency();
        break;

      case "battery":
        await tello.battery();
        break;

      case "up":
        rl.question("Enter distance: ", async (distance) => {
          const parsedDistance = parseInt(distance);
          if (isNaN(parsedDistance)) {
            console.log("Invalid distance");
          } else {
            await tello.up(parsedDistance);
          }
          rl.prompt();
        });
        break;

      case "down":
        rl.question("Enter distance: ", async (distance) => {
          const parsedDistance = parseInt(distance);
          if (isNaN(parsedDistance)) {
            console.log("Invalid distance");
          } else {
            await tello.down(parsedDistance);
          }
          rl.prompt();
        });
        break;

      case "left":
        rl.question("Enter distance: ", async (distance) => {
          const parsedDistance = parseInt(distance);
          if (isNaN(parsedDistance)) {
            console.log("Invalid distance");
          } else {
            await tello.left(parsedDistance);
          }
          rl.prompt();
        });
        break;

      case "right":
        rl.question("Enter distance: ", async (distance) => {
          const parsedDistance = parseInt(distance);
          if (isNaN(parsedDistance)) {
            console.log("Invalid distance");
          } else {
            await tello.right(parsedDistance);
          }
          rl.prompt();
        });
        break;

      case "forward":
        rl.question("Enter distance: ", async (distance) => {
          const parsedDistance = parseInt(distance);
          if (isNaN(parsedDistance)) {
            console.log("Invalid distance");
          } else {
            await tello.forward(parsedDistance);
          }
          rl.prompt();
        });
        break;

      case "back":
        rl.question("Enter distance: ", async (distance) => {
          const parsedDistance = parseInt(distance);
          if (isNaN(parsedDistance)) {
            console.log("Invalid distance");
          } else {
            await tello.back(parsedDistance);
          }
          rl.prompt();
        });
        break;

      // case "cw":
      //   rl.question("Enter angle: ", async (angle) => {
      //     const parsedAngle = parseInt(angle);
      //     if (isNaN(parsedAngle)) {
      //       console.log("Invalid angle");
      //     } else {
      //       await tello.cw(parsedAngle);
      //     }
      //     rl.prompt();
      //   });
      //   break;

      default:
        console.log(`Unknown command: ${command}`);
    }
  });
});
