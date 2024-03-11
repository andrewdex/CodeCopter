import { Socket, createSocket } from "dgram";

export class UDPClient {
  private socket: Socket;

  constructor() {
    this.socket = createSocket("udp4");
  }

  async send(message: string, port: number, address: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.socket.send(message, port, address, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }

  close() {
    this.socket.close();
  }
}
