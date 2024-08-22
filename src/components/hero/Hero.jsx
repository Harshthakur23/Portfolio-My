import "./hero.scss"

const Hero = () => {
  return (
    <div className="hero">
        <div className="textContainer">
            <div className="wrapper">
            <h2>Harsh Bhadouriya</h2>
            <h1>Software Developer</h1>
            <div className="button">
                <button>See the Latest Works</button>
                <button>Contact Me</button>
            </div>
            <img src="/scroll.png" alt="" />
        </div>
     </div>
      <div className="imageContainer">
        <img src="/me4.png" alt="" />
      </div>
    </div>
  )
}

export default Hero
