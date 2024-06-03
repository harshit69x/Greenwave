import React from 'react';

function Content() {
  return (
    <>
      <section className="bg-white dark:bg-gray-200">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-normal text-gray-500 sm:text-lg dark:text-black">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">Our Expertise</h2>
            <div className="mb-4">
              <p className="mb-4">
                At <b>R2S GREENWAVE</b>, we specialize in delivering comprehensive, tailored solutions that address the unique challenges and opportunities of each client. Our key highlight is our Arecanut Palm Leaf Dinnerware, which exemplifies our commitment to eco-friendly and sustainable products.
              </p>
              <p className="mb-4">
                We excel in sourcing high-quality goods, including these elegant and biodegradable dinnerware items, and managing all aspects of logistics to ensure timely delivery.
              </p>
              <p className="mb-4">
                Our expertise in custom documentation facilitates smooth international trade, ensuring compliance with regulatory standards. By leveraging our industry knowledge and dedication, we empower our clients to thrive, fostering growth and profitability while making a positive environmental impact.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://images.unsplash.com/photo-1605732562742-3023a888e56e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8" alt="office content 1" />
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGJ1c2luZXNzfGVufDB8fDB8fHww" alt="office content 2" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
