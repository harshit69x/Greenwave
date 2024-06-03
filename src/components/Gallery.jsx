import React from 'react'

function Gallery() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-6">Gallery</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 max-w-full place-items-center">
        <img className="w-full h-auto hover:opacity-75" src="https://source.unsplash.com/collection/1346951/300x300?sig=1" alt="Gallery item 1"/>
        <img className="w-full h-auto hover:opacity-75" src="https://source.unsplash.com/collection/1346951/300x300?sig=2" alt="Gallery item 2"/>
        <img className="w-full h-auto hover:opacity-75" src="https://source.unsplash.com/collection/1346951/300x300?sig=3" alt="Gallery item 3"/>
        <img className="w-full h-auto hover:opacity-75" src="https://source.unsplash.com/collection/1346951/300x300?sig=4" alt="Gallery item 4"/>
        <img className="w-full h-auto hover:opacity-75" src="https://source.unsplash.com/collection/1346951/300x300?sig=5" alt="Gallery item 5"/>
        <img className="w-full h-auto hover:opacity-75" src="https://source.unsplash.com/collection/1346951/300x300?sig=6" alt="Gallery item 6"/>
        <img className="w-full h-auto hover:opacity-75" src="https://source.unsplash.com/collection/1346951/300x300?sig=3" alt="Gallery item 7"/>
        <img className="w-full h-auto hover:opacity-75" src="https://source.unsplash.com/collection/1346951/300x300?sig=4" alt="Gallery item 8"/>
        <img className="w-full h-auto hover:opacity-75" src="https://source.unsplash.com/collection/1346951/300x300?sig=5" alt="Gallery item 9"/>
        <img className="w-full h-auto hover:opacity-75" src="https://source.unsplash.com/collection/1346951/300x300?sig=5" alt="Gallery item 9"/>
      </div>
    </div>
  )
}

export default Gallery
