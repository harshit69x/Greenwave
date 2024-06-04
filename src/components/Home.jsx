import React, { useState, useEffect } from 'react';

const BackgroundImageComponent = () => {
  const desktopImage = 'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?q=80&w=2052&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const mobileImage = 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D';

  const [backgroundImage, setBackgroundImage] = useState(desktopImage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage(mobileImage);
      } else {
        setBackgroundImage(desktopImage);
      }
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="home"
      className="relative w-full h-screen bg-cover bg-center md:bg-fixed"
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-8">
        <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          R2S GREENWAVE
        </h1>
        <br/>
        <p className="text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 font-semibold">
          Leading the way in eco-friendly solutions
        </p>
        <p className="text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl mt-2">
        We emphasize eco-conscious dining practices, offering products that are aesthetically pleasing, environmentally friendly, and socially responsible. 
        </p>
      </div>
    </div>
  );
};

export default BackgroundImageComponent;
