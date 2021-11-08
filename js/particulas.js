var n_particulas = 100

const randomInt = ( min, max) => Math.floor( Math.random() * (max - min) + min)

function obtenerDistancia( ob1, ob2) {
  let x = ob1.x - ob2.x
  let y = ob1.y - ob2.y
  return Math.sqrt( x*x + y*y)
}


var canvas = document.querySelector('canvas')
canvas.style.background = '#000'
canvas.width = window.innerWidth
canvas.height = 300

var c = canvas.getContext('2d')

class Particula {
    constructor( x, y, radio, color) {
      this.color = color || '  crimson'
      this.x = x
      this.y = y
      this.radio = radio || 1
      this.dx = Math.random() - 0.5
      this.dy = Math.random() - 0.5
    }
  dibujar() {
    c.beginPath()
    c.arc( this.x, this.y, this.radio, 0, Math.PI * 2, true)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }
  recargar( array = []) {
    
    for ( let i = 0; i < array.length; i++) {
      let d = obtenerDistancia( this, array[i])
      if ( d < 100 ){
        c.beginPath()
        c.moveTo( this.x, this.y)
        c.lineTo( array[i].x, array[i].y)
        c.lineWidth = .4
        c.strokeStyle = '  crimson'
        c.stroke()
        c.closePath()
      }

    }
    
    if ( this.y + this.radio > canvas.height || this.y -this.radio < 0 ) this.dy = -this.dy
    if ( this.x + this.radio > canvas.width || this.x -this.radio < 0 ) this.dx = -this.dx
    
    this.x += this.dx
    this.y += this.dy
    this.dibujar()
  }
}



var particulas = []

for ( let i = 0; i < n_particulas; i++) {
  let radio = 4
  // let x = Math.random() * canvas.width
  let x = randomInt( radio*2, canvas.width - radio*2)
  let y = randomInt( radio*2, canvas.height - radio*2)
  // let y = Math.random() * canvas.height
  particulas.push( new Particula( x, y, radio))
}
console.log( particulas )



function animacion() {
  requestAnimationFrame( animacion )
  c.clearRect( 0, 0, canvas.width, canvas.height)
  
  particulas.forEach( particula => particula.recargar( particulas ) )
}
animacion()