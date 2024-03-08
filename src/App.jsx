import {scraper, characterDetailsScraper} from './scraper';
import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { JSDOM } from 'jsdom';


function App() {
  const [dataImages, setDataImages] = useState([]);

  // useEffect(() => {
  //   const allImages = scraper();
  //   setDataImages(allImages)
  // },
  //   []
  // )

  const handleClick = async () => {
   const allImages = await scraper()
   await characterDetailsScraper('chi-chi')
  //  allImages.then(
  //   function(value) { if (value) {console.log(value)}}
  //  )
   setDataImages(allImages)
  }

  return (
    <div className="">
      <h1 className="text-center text-3xl font-bold my-5">DBZ characters</h1>
      

      <div className="flex flex-row py-4">
        <div className="basis-1/6">
        </div>

        <div className='basis-4/6'>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 sm:grid-cols-1 gap-4 justify-items-center'>
            {dataImages.map((dbz, i) => (
              <div key={i} className="max-w-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl p-4 h-80 w-64 flex flex-col items-center bg-orange-300/50 pt-5">
              <img className="size-44 rounded-full" src={dbz.img} alt={`picture of ${dbz.name}`} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{dbz.name}</div>
                <p className="text-gray-700 text-base mt-4">
                  {dbz.race}
                </p>
              </div>
            </div>
            ))}
          </div>
        </div>

        <div className='basis-1/6 flex justify-center items-start'>
          <button className="p-5 border rounded-lg" onClick={handleClick}>Click me</button>
        </div>
      </div>
    </div>
  );
}

export default App;
