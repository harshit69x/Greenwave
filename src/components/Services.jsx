import React from 'react';

function Services() {
  return (
    <div className="bg-gray-200 px-2 py-10 " id="services">
      <div id="features" className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          Services which we provide
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src="https://cdn-icons-png.flaticon.com/512/10982/10982450.png" alt="" className="mx-auto h-10 w-10"/>
            <h3 className="my-3 font-display font-medium"> Sourcing of goods</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
           Sourcing of goods involves finding and acquiring products from reliable suppliers to meet specific business needs. This service ensures that the products sourced are of high quality and are procured at competitive prices.

            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src="https://cdn-icons-png.flaticon.com/512/7032/7032234.png" alt="" className="mx-auto h-10 w-10"/>
            <h3 className="my-3 font-display font-medium">Logistics</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            Logistics services encompass the planning, implementation, and coordination of the movement of goods from origin to destination. This includes transportation, warehousing, and inventory management.
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991108.png" alt="" className="mx-auto h-10 w-10"/>
            <h3 className="my-3 font-display font-medium">Custom Documentation</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            Custom documentation services handle the preparation and management of all necessary documents required for international trade. This includes customs declarations, invoices, bills of lading, and certificates of origin.

            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
