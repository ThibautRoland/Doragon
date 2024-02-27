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
      <h1 className="text-center">Dragon Ball characters</h1>
      <button className="p-5 border" onClick={handleClick}>Click me</button>
      <div className='flex flex-wrap'>
        {dataImages.map((img, i) => (
          <div key={i}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
