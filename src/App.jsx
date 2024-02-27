import {scraper} from './scraper';
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { JSDOM } from 'jsdom';


function App() {
  const [dataImages, setDataImages] = useState([]);

  const handleClick = async () => {
   const allImages = await scraper()
  //  allImages.then(
  //   function(value) { if (value) {console.log(value)}}
  //  )
   setDataImages(allImages)
  }

  return (
    <div className="">
      <h1 className="text-center text-3xl">Dragon Ball characters</h1>
      

      <div className="flex flex-row py-4">
        <div className="basis-1/6">
          <button className="p-5 border" onClick={handleClick}>Click me</button>
        </div>

        <div className='basis-4/6'>
          <div className='grid grid-cols-3 gap-4'>
            {dataImages.map((dbz, i) => (
              <div key={i} class="max-w-sm rounded overflow-hidden shadow-lg">
              <img class="w-full" src={dbz.img} alt="Mountain" />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{dbz.name}</div>
                <p class="text-gray-700 text-base">
                  A beautiful view of the mountains.
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>

        <div className='basis-1/6'></div>
      </div>
    </div>
  );
}

export default App;
