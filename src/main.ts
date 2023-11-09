import "./style.css"
import Square from "./Square"

const sqrs: Square[] = []
const max = 200000 as const
const createLimit = 6 as const

function initCanvas() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement

  if (canvas.getContext("2d")) {
    render()
  }

  function render() {
    const ctx = canvas.getContext("2d")!

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (sqrs.length < max) {
      for (let i = 0; i < createLimit; i++) {
        sqrs.push(new Square(Math.random() * 20))
      }
    }

    sqrs.forEach((sqr, i) => {
      sqr.draw(ctx)
      if (sqr.getSize < 0) sqrs.splice(i, 1)
    })

    requestAnimationFrame(render)
  }
}

window.addEventListener("load", initCanvas)
