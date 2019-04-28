import React from "react"
import styled from "styled-components"
import { Engine, Render, World, Bodies } from "matter-js"

class IntroCanvas extends React.Component {
  componentDidMount() {
    // Set up canvas
    const canvas = document.getElementById("canvas")
    const wWidth = window.innerWidth
    const wHeight = window.innerHeight

    // create an engine
    const engine = Engine.create()

    // create a renderer
    const render = Render.create({
      element: canvas,
      engine,
      options: {
        width: wWidth,
        height: wHeight,
        background: "#FFF",
        wireframes: false
      }
    })

    // create two boxes and a ground
    const box = size => {
      return Bodies.circle(
        wWidth / 2,
        wHeight * -1 * Math.random(),
        wWidth * size * 0.01,
        wHeight * size * 0.01
      )
    }

    const ground = Bodies.rectangle(wWidth / 2, wHeight, wWidth, 1, {
      isStatic: true
    })
    const wallLeft = Bodies.rectangle(0, wHeight, 1, wHeight * 2, {
      isStatic: true
    })
    const wallRight = Bodies.rectangle(wWidth, wHeight, 1, wHeight * 2, {
      isStatic: true
    })

    window.addEventListener("resize", function() {
      render.canvas.width = window.innerWidth
      render.canvas.height = window.innerHeight
      ground.width = wWidth
    })

    // add all of the bodies to the world
    World.add(engine.world, [
      box(5),
      box(5),
      box(6),
      box(6),
      box(7),
      box(8),
      box(9),
      box(10),
      box(9),
      box(10),
      ground,
      wallLeft,
      wallRight
    ])

    // run the engine
    Engine.run(engine)

    // run the renderer
    Render.run(render)
  }

  render() {
    return <Canvas id="canvas" />
  }
}

const Canvas = styled.div`
  width: 100vw;
  height: 100vh;
`

export { IntroCanvas }
