import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";
import { LuMouse } from "react-icons/lu";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = document.getElementById('scrollContainer').scrollTop;
      setScrollPosition(position);
    };

    const scrollContainer = document.getElementById('scrollContainer');
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getImageBasedOnScroll = () => {
    const imageIndex = Math.floor(scrollPosition / window.innerHeight);
    const imageUrls = [
      'https://via.placeholder.com/500x500?text=Image+1',
      'https://via.placeholder.com/500x500?text=Image+2',
      'https://via.placeholder.com/500x500?text=Image+3',
      // Add more image URLs as needed
    ];

    return `url(${imageUrls[imageIndex % imageUrls.length]})`;
  };

  return (
    <div className="flex flex-col">
      <div
        id="scrollContainer"
        className="z overflow-y-scroll snap-mandatory h-screen flex flex-col justify-between"
        style={{
          backgroundImage: getImageBasedOnScroll(),
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <Navbar />
        <div className="flex flex-col items-center justify-center px-5">
          <div className="flex flex-col items-center">
            <h1 className="text-6xl font-bold">#TiatoGuam</h1>
            <h1>Travel on 23 Dec 2023</h1>
            <LuMouse size={40} className="mt-5" />
            <h1>Scroll to travel </h1>
          </div>
        </div>
        <Shop />
      </div>
    </div>
  );
}

export default App;
