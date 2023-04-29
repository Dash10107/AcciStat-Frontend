import React from 'react'
import {FaTrafficLight, FaTruckLoading, FaDirections} from 'react-icons/fa'

const Home = () => {
  return (
    <>
    {/* header heading */}
        <h1 className='text-5xl p-5' style={{fontFamily:'El Messiri'}}>
            <span className='text-[#F77F00]'>Accident</span> <span className='text-[#003049]'>Ratings</span> : <span className='text-2xl'>Top-3 of the week</span>
        </h1>

    {/* Top cards */}
    <div id="container" className='m-5 flex' style={{fontFamily:'El Messiri'}}>
        {/* card 1 */}
        <div id="1" className='bg-blue-200 flex w-[60%] p-5 rounded-2xl mx-2'>
            <img src="https://images.indianexpress.com/2023/02/accident-15.jpg" alt="accident img" className='h-96 w-72 rounded-2xl' />
            <div id="inner-container">
                <h1 id="rank" className='text-5xl font-bold py-10 px-5'>#1</h1>
                <br />
                <br />
                <br />
                <p id="description" className=' px-4 text-2xl'>
                    <span className='font-bold'>Location :</span> 69th road 420 lane <br/>
                    <span className='font-bold'>Casualties :</span> 6 <br/>
                    <span className='font-bold'>Injuries :</span> 2 <br/>
                    <span className='font-bold'>Vehicle type :</span> Sedan <br/>
                </p>
            </div>
        </div>

        {/* card 2 */}
        <div id="2" className='bg-red-200 mx-2 w-[20%] p-3 rounded-lg'>
            <img src="https://mc.webpcache.epapr.in/pro.php?size=large&in=https://mcmscache.epapr.in/post_images/website_326/post_32333100/full.jpg" alt="" className='rounded-lg'/>
            <br/>
            <div>
                <h1 id="rank" className='text-3xl'>#2</h1>
                <br/>
                <br/>
                <p id="description" className=' px-4 text-xl'>
                    <span className='font-bold'>Location :</span> 69th road 420 lane <br/>
                    <span className='font-bold'>Casualties :</span> 6 <br/>
                    <span className='font-bold'>Injuries :</span> 2 <br/>
                    <span className='font-bold'>Vehicle type :</span> Sedan <br/>
                </p>
            </div>
        </div>
        
        {/* card 3 */}
        <div id="2" className='bg-violet-200 mx-2 w-[20%] p-3 rounded-lg'>
            <img src="https://mc.webpcache.epapr.in/pro.php?size=large&in=https://mcmscache.epapr.in/post_images/website_326/post_32333100/full.jpg" alt="" className='rounded-lg'/>
            <br/>
            <div>
                <h1 id="rank" className='text-2xl'>#3</h1>
                <br/>
                <br/>
                <p id="description" className=' px-4 text-xl'>
                    <span className='font-bold'>Location :</span> 69th road 420 lane <br/>
                    <span className='font-bold'>Casualties :</span> 6 <br/>
                    <span className='font-bold'>Injuries :</span> 2 <br/>
                    <span className='font-bold'>Vehicle type :</span> Sedan <br/>
                </p>
            </div>
        </div>
    </div>

     {/* toggle banner */}
    <div id="banner" className='flex bg-black text-white py-5 px-3' style={{fontFamily:'El Messiri'}}>
        <div className='flex-1 text-3xl'>Encountered an accident?</div>
        <div className='flex-1 text-3xl'>Report Now ➡</div>
        <div className='flex-1 w-16'>
            <p>
            Your small contribution towards
            a safer road to drive...
            </p>
        </div>
    </div>

    {/* Carousel */}
    <section class="text-gray-600 body-font" style={{fontFamily:'El Messiri'}}>
  <div class="container px-5 py-24 mx-auto">
    <div class="text-center mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">Security Rules and Guidelines</h1>
      <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
      <div class="flex mt-6 justify-center">
        <div class="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
      </div>
    </div>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className='text-5xl'>
            <FaTrafficLight />
        </div>
        <br/>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Lorem 1</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className='text-5xl'>
            <FaTruckLoading />
        </div>
        <br/>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Lorem 2</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className='text-5xl'>
            <FaDirections />
        </div>
        <br/>
        <div class="flex-grow">
          <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Lorem 3</h2>
          <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
          <a class="mt-3 text-blue-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    
  </div>
</section>


    {/* Footer */}
    </>
  )
}

export default Home