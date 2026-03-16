import { Wrapper, Button, ShopByCategory, NewArrivals, Contact } from "../imports"

const Home = () => {
  return (
    <section className="bg-[#f9fafb] pt-[90px]">
      <Wrapper className="flex flex-col md:flex-row items-center justify-between gap-10 py-16 px-6 md:px-0">

        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-6 max-w-[608px]">

            <h2 className="text-4xl md:text-[60px] font-bold leading-tight">
              Essentials for <span className="text-[#197FE6]">Modern Living</span>
            </h2>

            <p className="text-base md:text-[18px] text-[#4B5563] leading-relaxed max-w-[506px]">
              Discover a curated collection of premium products designed with minimalism and functionality in mind. Elevate your daily routine.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button className="bg-black text-white px-6 py-3 border-2 border-black rounded-lg
transition-all duration-300 ease-out
hover:bg-white hover:text-black hover:border-black
hover:shadow-lg hover:-translate-y-0.5" onClick={() => { }}>
                Shop Now
              </Button>

              <Button className="bg-white text-black px-6 py-3 border-2 border-gray-200 rounded-lg
transition-all duration-300 ease-out
hover:bg-black hover:text-white hover:border-black
hover:shadow-lg hover:-translate-y-0.5" onClick={() => { }}>
                Learn More
              </Button>
            </div>

          </div>
        </div>

        <img
          src="/Lifestyle_Product.png"
          alt="Minimal lifestyle product setup"
          className="w-full md:w-[608px] h-[400px] md:h-[500px] object-cover rounded-2xl mt-[70px]"
        />

      </Wrapper>
      <ShopByCategory />
      <NewArrivals />
      <Contact />
    </section>
  )
}

export default Home
