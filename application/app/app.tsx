import * as React from 'react'

import Turret from './class/turret'

interface Props {}
interface State {}
type Button = 'top' | 'bottom' | 'left' | 'right' | 'shoot'

const turret = new Turret()

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    window.addEventListener('keydown', (event) => {
      switch(event.code) {
        case 'ArrowUp':
          this.action('top')
          break
        case 'ArrowDown':
          this.action('bottom')
          break
        case 'ArrowLeft':
          this.action('left')
          break
        case 'ArrowRight':
          this.action('right')
          break
        case 'Space':
          this.action('shoot')
          break
        default:
          break
      }
    }, true)
  }

  action(button: Button) {
    switch(button) {
      case 'top':
        turret.up()
        break
      case 'bottom':
        turret.down()
        break
      case 'left':
        turret.left()
        break
      case 'right':
        turret.right()
        break
      case 'shoot':
        turret.shoot()
        break
      default:
        break
    }
  }

  render() {
    return (
      <div className='nerf-app'>
        <div className='buttons'>
          <button
            onClick={ () => this.action('top') }
            className='direction-button direction-button-top'></button>

          <button
            onClick={ () => this.action('bottom') }
            className='direction-button direction-button-bottom'></button>

          <button
            onClick={ () => this.action('left') }
            className='direction-button direction-button-left'></button>

          <button
            onClick={ () => this.action('right') }
            className='direction-button direction-button-right'></button>

          <button
            onClick={ () => this.action('shoot') }
            className='shoot-button'>SHOOT</button>
        </div>
      </div>
    )
  }
}
