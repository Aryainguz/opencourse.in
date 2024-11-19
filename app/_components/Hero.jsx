
export const Hero = () => {
  return (
<div className="bg-white p-4 sm:p-0">

  <section className="bg-[#FCF8F1] bg-opacity-30 py-10 sm:py-16 lg:py-24">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
          For Learners. By Learners.
          </p>
          <h1 className="mt-4 text-5xl font-bold text-black lg:mt-4 sm:text-6xl xl:text-8xl">
          Learn Everything Pay Nothing.
          </h1>
          <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">
          Learning made open and free for everyone.
          </p>

<div className="relative inline-flex mt-6 group">
  <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt" />
  <a href="#"  className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" role="button">
    Get access to 4,958 resources
  </a>
</div>


          <p className="mt-5 text-gray-600">
            Already joined us?{' '}
            <a href="#" title="" className="text-black transition-all duration-200 hover:underline">
              Log in
            </a>
          </p>
        </div>

        <div>
          <img
            className="w-full"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</div>


  )
}
