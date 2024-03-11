import { TelloController } from "./tello-controller";
import readline from "readline";

const telloIP: string = "192.168.10.1";
const telloPort: number = 8889;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.setPrompt("Tello> ");

rl.prompt();

rl.on("line", async (line) => {
  const command = line.trim();

  const tello = new TelloController(telloIP, telloPort);

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
    default:
      console.log(`Unknown command: ${command}`);
  }
});
