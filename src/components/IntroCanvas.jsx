import React from "react"
import styled from "styled-components"
import { Engine, MouseConstraint, Render, World, Bodies } from "matter-js"
import p1 from "../../static/assets/p1.jpg"
import p2 from "../../static/assets/p2.jpg"
import p3 from "../../static/assets/p3.jpg"
import p4 from "../../static/assets/p4.jpg"
import p5 from "../../static/assets/p5.jpg"
import p6 from "../../static/assets/p6.jpg"
import p7 from "../../static/assets/p7.jpg"
import p8 from "../../static/assets/p8.jpg"
import p9 from "../../static/assets/p9.jpg"
import p10 from "../../static/assets/p10.jpg"
import p11 from "../../static/assets/p11.jpg"
import p12 from "../../static/assets/p12.jpg"
import p13 from "../../static/assets/p13.jpg"
import p14 from "../../static/assets/p14.jpg"
import p15 from "../../static/assets/p15.jpg"
import p16 from "../../static/assets/p16.jpg"
import p17 from "../../static/assets/p17.jpg"
import p18 from "../../static/assets/p18.jpg"
import p19 from "../../static/assets/p19.jpg"
import p20 from "../../static/assets/p20.jpg"
import p21 from "../../static/assets/p21.jpg"
import p22 from "../../static/assets/p22.jpg"
import p23 from "../../static/assets/p23.jpg"
import p24 from "../../static/assets/p24.jpg"
import p25 from "../../static/assets/p25.jpg"
import p26 from "../../static/assets/p26.jpg"
import p27 from "../../static/assets/p27.jpg"
import p28 from "../../static/assets/p28.jpg"
import p29 from "../../static/assets/p29.jpg"
import p30 from "../../static/assets/p30.jpg"
import p31 from "../../static/assets/p31.jpg"
import p32 from "../../static/assets/p32.jpg"
import p33 from "../../static/assets/p33.jpg"
import p34 from "../../static/assets/p34.jpg"
import p35 from "../../static/assets/p35.jpg"
import p36 from "../../static/assets/p36.jpg"
import p37 from "../../static/assets/p37.jpg"
import p38 from "../../static/assets/p38.jpg"
import p39 from "../../static/assets/p39.jpg"

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

    const box = ({ pX, pY = 1, w, h, texture, xScale, yScale }) => {
      return Bodies.rectangle(
        wWidth * pX,
        (wHeight / 4) * -1 * pY,
        wWidth * w * 1.2,
        wWidth * h * 1.2,
        {
          restitution: 0.7,
          frictionAir: 0.04,
          render: {
            sprite: {
              texture,
              xScale: wWidth * 0.00012,
              yScale: wWidth * 0.00012
            }
          }
        }
      )
    }

    const ground = Bodies.rectangle(wWidth / 2, wHeight, wWidth, wHeight / 2, {
      isStatic: true,
      render: {
        fillStyle: "white",
        strokeStyle: "black",
        lineWidth: 3
      }
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
        stiffness: 0.9
      }
    })

    // add all of the bodies to the world
    World.add(engine.world, [
      // ROW 1
      box({
        pX: 0.25,
        pY: 4.2,
        w: 0.116,
        h: 0.0317,
        texture: p1,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.35,
        pY: 4.2,
        w: 0.0773,
        h: 0.0317,
        texture: p2,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.45,
        pY: 4.2,
        w: 0.0773,
        h: 0.0317,
        texture: p3,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.55,
        pY: 4.2,
        w: 0.116,
        h: 0.0317,
        texture: p4,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.71,
        pY: 4.2,
        w: 0.1546,
        h: 0.0317,
        texture: p5,
        xScale: 0.12,
        yScale: 0.2
      }),
      // ROW 2
      box({
        pX: 0.22,
        pY: 3.5,
        w: 0.116,
        h: 0.0318,
        texture: p6,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.36,
        pY: 3.5,
        w: 0.1159,
        h: 0.0318,
        texture: p7,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.49,
        pY: 3.5,
        w: 0.0773,
        h: 0.0318,
        texture: p8,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.61,
        pY: 3.5,
        w: 0.1546,
        h: 0.0318,
        texture: p9,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.74,
        pY: 3.5,
        w: 0.0386,
        h: 0.0318,
        texture: p10,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.78,
        pY: 3.5,
        w: 0.0386,
        h: 0.0318,
        texture: p10,
        xScale: 0.12,
        yScale: 0.2
      }),
      // ROW 3
      box({
        pX: 0.18,
        pY: 3,
        w: 0.0387,
        h: 0.0318,
        texture: p11,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.28,
        pY: 3,
        w: 0.1547,
        h: 0.0318,
        texture: p12,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.43,
        pY: 3,
        w: 0.0774,
        h: 0.0318,
        texture: p13,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.5,
        pY: 3,
        w: 0.0387,
        h: 0.0318,
        texture: p14,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.6,
        pY: 3,
        w: 0.116,
        h: 0.0318,
        texture: p15,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.73,
        pY: 3,
        w: 0.116,
        h: 0.0318,
        texture: p16,
        xScale: 0.12,
        yScale: 0.2
      }),
      // ROW 4
      box({
        pX: 0.21,
        pY: 2.5,
        w: 0.0774,
        h: 0.0318,
        texture: p17,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.3,
        pY: 2.5,
        w: 0.0774,
        h: 0.0318,
        texture: p18,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.4,
        pY: 2.5,
        w: 0.116,
        h: 0.0318,
        texture: p19,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.54,
        pY: 2.5,
        w: 0.0774,
        h: 0.0318,
        texture: p20,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.64,
        pY: 2.5,
        w: 0.116,
        h: 0.0318,
        texture: p21,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.74,
        pY: 2.5,
        w: 0.0774,
        h: 0.0318,
        texture: p22,
        xScale: 0.12,
        yScale: 0.2
      }),
      // ROW 5
      box({
        pX: 0.25,
        pY: 2,
        w: 0.1546,
        h: 0.0316,
        texture: p23,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.4,
        pY: 2,
        w: 0.116,
        h: 0.0318,
        texture: p24,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.5,
        pY: 2,
        w: 0.0387,
        h: 0.0318,
        texture: p25,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.6,
        pY: 2,
        w: 0.116,
        h: 0.0318,
        texture: p26,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.74,
        pY: 2,
        w: 0.116,
        h: 0.0318,
        texture: p27,
        xScale: 0.12,
        yScale: 0.2
      }),
      // ROW 6
      box({
        pX: 0.21,
        pY: 1.5,
        w: 0.0774,
        h: 0.0476,
        texture: p28,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.311,
        pY: 1.5,
        w: 0.116,
        h: 0.0476,
        texture: p29,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.43,
        pY: 1.5,
        w: 0.0774,
        h: 0.0476,
        texture: p30,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.53,
        pY: 1.5,
        w: 0.0774,
        h: 0.0476,
        texture: p31,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.62,
        pY: 1.5,
        w: 0.0773,
        h: 0.0476,
        texture: p32,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.73,
        pY: 1.5,
        w: 0.116,
        h: 0.0476,
        texture: p33,
        xScale: 0.12,
        yScale: 0.2
      }),
      // ROW 7
      box({
        pX: 0.22,
        w: 0.0387,
        h: 0.0475,
        texture: p34,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.26,
        w: 0.0774,
        h: 0.0476,
        texture: p35,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.33,
        w: 0.116,
        h: 0.0476,
        texture: p36,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.49,
        w: 0.0387,
        h: 0.0475,
        texture: p37,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.59,
        w: 0.116,
        h: 0.0476,
        texture: p38,
        xScale: 0.12,
        yScale: 0.2
      }),
      box({
        pX: 0.7,
        w: 0.1546,
        h: 0.0476,
        texture: p39,
        xScale: 0.12,
        yScale: 0.2
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
