import Configuration from '../configuration'

// Class for controll turret
export default class Turret {
  private port: any

  constructor() {
    // @ts-ignore
    this.port = new SerialPort(Configuration.PORT_URI, {
      baudRate: 19200
    })
  }

  public up() {
    this.port.write('u')
  }

  public down() {
    this.port.write('d')
  }

  public left() {
    this.port.write('l')
  }

  public right() {
    this.port.write('r')
  }

  public shoot() {
    this.port.write('s')
  }
}