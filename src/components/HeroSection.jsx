import '../App.css'

const images = [
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

function HeroSection() {
  return (
    <section id="home" className="app-container pt-24 pb-12 overflow-hidden sm:overflow-visible ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        {/*left content*/}

        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ">
            <span className="gradient-text ">Artificial Intelligence</span>
            <br />
            For a Smarter Future
          </h1>
          <p className="text-lg text-gray-600 max-w-lg">
            Discover how AI is transforming industries and improving lives,
            worldwide. Our cutting-edge solutions harness the power of machine
            learning to solve complex problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#" className="btn-primary">Explore AI Solutions</a>
            <a href="#" className="btn-outline">Learn More</a>
          </div>

        <div className="pt-4 flex items-center space-x-4">
          <div className="flex -space-x-2">
            {images.map((image,i) => {
              return(
              <img 
              key={i}
              className="avatar"
              src={image}
              alt={`User ${i + 1}`} />
              )
            })}
          </div>
          <p className="text-sm font-medium text-gray-600">Trusted by {" "}
            <span className="text-primary font-bold">10,000+</span> people worldwide</p>
        </div>

        </div>

        {/*right image*/}
        <div className="relative w-full h-80 md:h-150 ">
          <img 
          className="w-full h-full object-cover rounded-2xl"
          src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="hero section" 
          />
          <div className="absolute w-32 h-32 rounded-full bg-secondary/20 -bottom-6 -left-6 blur-xl"></div>
          <div className="absolute w-32 h-32 rounded-full bg-accent/20 -top-6 -right-6 blur-xl"></div>
        </div>
      </div>
    </section>

  )
}

export default HeroSection