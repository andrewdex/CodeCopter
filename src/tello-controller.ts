import { UDPClient } from "./udp-client";

export class TelloController {
  private udpClient: UDPClient;
  private telloAddress: string;
  private telloPort: number;

  constructor(telloAddress: string = "", telloPort: number = 8889) {
    this.udpClient = new UDPClient();
    this.telloAddress = telloAddress;
    this.telloPort = telloPort;
  }

  async connected(): Promise<void> {
    return this.sendCommand("command");
  }

  async sendCommand(command: string): Promise<void> {
    return this.udpClient.send(command, this.telloPort, this.telloAddress);
  }

  async takeOff(): Promise<void> {
    console.log("Taking off");

    return this.sendCommand("takeoff");
  }

  async land(): Promise<void> {
    console.log("Landing");
    return this.sendCommand("land");
  }

  async emergency(): Promise<void> {
    console.log("Emergency");
    return this.sendCommand("emergency");
  }

  async up(distance: number): Promise<void> {
    console.log("Going up");

    return this.sendCommand(`up ${distance}`);
  }

  async down(distance: number): Promise<void> {
    return this.sendCommand(`down ${distance}`);
  }

  async left(distance: number): Promise<void> {
    return this.sendCommand(`left ${distance}`);
  }

  async right(distance: number): Promise<void> {
    return this.sendCommand(`right ${distance}`);
  }

  async forward(distance: number): Promise<void> {
    return this.sendCommand(`forward ${distance}`);
  }

  async back(distance: number): Promise<void> {
    return this.sendCommand(`back ${distance}`);
  }

  async rotateClockwise(degrees: number): Promise<void> {
    return this.sendCommand(`cw ${degrees}`);
  }

  async rotateCounterClockwise(degrees: number): Promise<void> {
    return this.sendCommand(`ccw ${degrees}`);
  }

  async flip(direction: string): Promise<void> {
    return this.sendCommand(`flip ${direction}`);
  }

  async setSpeed(speed: number): Promise<void> {
    return this.sendCommand(`speed ${speed}`);
  }

  async querySpeed(): Promise<void> {
    return this.sendCommand("speed?");
  }

  async queryBattery(): Promise<void> {
    return this.sendCommand("battery?");
  }

  async queryTime(): Promise<void> {
    return this.sendCommand("time?");
  }

  async queryHeight(): Promise<void> {
    return this.sendCommand("height?");
  }

  async queryTemp(): Promise<void> {
    return this.sendCommand("temp?");
  }

  async queryAttitude(): Promise<void> {
    return this.sendCommand("attitude?");
  }

  async queryBaro(): Promise<void> {
    return this.sendCommand("baro?");
  }

  async queryAcceleration(): Promise<void> {
    return this.sendCommand("acceleration?");
  }

  async queryTof(): Promise<void> {
    return this.sendCommand("tof?"); // Time of flight
  }

  async queryWifi(): Promise<void> {
    return this.sendCommand("wifi?"); // Signal strength
  }

  async battery(): Promise<void> {
    return this.sendCommand("battery?");
  }

  close() {
    this.udpClient.close();
  }
}
