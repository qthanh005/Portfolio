import { useEffect, useRef } from 'react'

const Particles = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    const particles = []
    const particleCount = 140 // Tăng đáng kể lượng hạt
    
    // Đối tượng theo dõi vị trí chuột
    const mouse = {
      x: null,
      y: null,
      radius: 250 // Phạm vi hút tỏa rộng hơn
    }

    const handleMouseMove = (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }
    
    const handleMouseOut = () => {
      mouse.x = null
      mouse.y = null
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseout', handleMouseOut)

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1.5 // Kích thước hạt lớn hơn một chút
        this.speedX = Math.random() * 0.6 - 0.3
        this.speedY = Math.random() * 0.6 - 0.3
        this.opacity = Math.random() * 0.6 + 0.3 // Rõ hơn
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Nảy lại hoặc lặp lại khi chạm rìa
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
        
        // Cập nhật để các hạt bị hút nhẹ về phía chuột
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x
          let dy = mouse.y - this.y
          let distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (mouse.radius - distance) / mouse.radius
            
            const directionX = forceDirectionX * force * 1.5
            const directionY = forceDirectionY * force * 1.5
            
            this.x += directionX
            this.y += directionY
          }
        }
      }

      draw() {
        ctx.fillStyle = `rgba(0, 0, 0, ${this.opacity * 0.6})` // Đậm màu hơn
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const init = () => {
      particles.length = 0
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }
    init()

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      
      // Vẽ mạng lưới kết nối
      for (let i = 0; i < particles.length; i++) {
        // 1. Kết nối các hạt lại với nhau nếu ở gần (tạo chùm mạng nhện)
        for (let j = i; j < particles.length; j++) {
          let dxLine = particles[i].x - particles[j].x
          let dyLine = particles[i].y - particles[j].y
          let distanceLine = Math.sqrt(dxLine * dxLine + dyLine * dyLine)
          
          if (distanceLine < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 0, 0, ${(1 - distanceLine/100) * 0.2})` // Nét nền mờ nhẹ
            ctx.lineWidth = 0.8
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }

        // 2. Kết nối hạt với chuột (đường hút)
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - particles[i].x
          let dy = mouse.y - particles[i].y
          let distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < mouse.radius) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 0, 0, ${(1 - distance/mouse.radius) * 0.8})` // Đường tới chuột đậm hơn hẳn
            ctx.lineWidth = 1.8 // Nét to và rõ hơn
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      setCanvasSize()
      init() 
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}

export default Particles
