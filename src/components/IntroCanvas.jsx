import React from "react"
import styled from "styled-components"
import { Engine, MouseConstraint, Render, World, Bodies } from "matter-js"
import img from "../../static/assets/background.jpg"

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

    const box = ({ pX, pY, w, h, texture, xScale, yScale }) => {
      return Bodies.rectangle(
        wWidth * pX,
        wHeight * pY,
        wWidth * w,
        wHeight * h,
        {
          render: {
            sprite: {
              texture,
              xScale,
              yScale
            }
          }
        }
      )
    }

    const ground = Bodies.rectangle(wWidth / 2, wHeight - 100, wWidth, 1, {
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

    var mouseConstraint = MouseConstraint.create(engine, {
      element: canvas,
      constraint: {
        render: {
          visible: false
        },
        stiffness: 0.8
      }
    })

    // add all of the bodies to the world
    World.add(engine.world, [
      box({
        pX: 0.3,
        pY: -1,
        w: 0.1,
        h: 0.1,
        texture: img,
        xScale: 0.05,
        yScale: 0.05
      }),
      box({
        pX: 0.4,
        pY: -1,
        w: 0.1,
        h: 0.1,
        texture: img,
        xScale: 0.05,
        yScale: 0.05
      }),
      box({
        pX: 0.5,
        pY: -1,
        w: 0.1,
        h: 0.1,
        texture: img,
        xScale: 0.05,
        yScale: 0.05
      }),
      box({
        pX: 0.6,
        pY: -1,
        w: 0.1,
        h: 0.1,
        texture: img,
        xScale: 0.05,
        yScale: 0.05
      }),
      box({
        pX: 0.7,
        pY: -1,
        w: 0.1,
        h: 0.1,
        texture: img,
        xScale: 0.05,
        yScale: 0.05
      }),
      ground,
      wallLeft,
      wallRight,
      mouseConstraint
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
