let counter = 0

export default class Square {
  private x: number = 0
  private y: number = 0
  private size: number = 4
  private color: string = "#7d7"
  private canvas: HTMLCanvasElement

  constructor(size?: number, color?: string) {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    if (!canvas) throw Error("canvas element not found")

    this.canvas = canvas
    this.x = Math.random() * canvas.width
    this.y = canvas.height

    if (size) this.size = size
    if (color) this.color = color

    counter++
  }

  moveY(value: number) {
    this.y += value
  }

  public get getY(): number {
    return this.y
  }
  public get getSize(): number {
    return this.size
  }

  draw(ctx: CanvasRenderingContext2D) {
    if (counter === 100) console.log(`SIZE ${this.size} Y ${this.y}`)
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.size, this.size)
    this.size *= 0.99
    this.y = this.y - 2

    if (counter === 100) console.log(`SIZE ${this.size} Y ${this.y}`)
  }
}
