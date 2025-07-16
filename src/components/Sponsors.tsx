import React, { useState, useEffect } from 'react';
   import PocketBase from 'pocketbase';

   const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
   console.log('PocketBase URL:', import.meta.env.VITE_POCKETBASE_URL);

   interface Sponsor {
     id: string;
     name: string;
     logo: string;
     description: string;
   }

   const Sponsors: React.FC = () => {
     const [sponsors, setSponsors] = useState<Sponsor[]>([]);
     const [loading, setLoading] = useState(true);

     useEffect(() => {
       const fetchSponsors = async () => {
         setLoading(true);
         console.log('Attempting to fetch sponsors...'); // Initial log
         try {
           const records = await pb.collection('sponsors').getFullList();
           console.log('Fetched sponsors:', records); // Success log
           setSponsors(records);
         } catch (error) {
           console.error('Fetch error details:', error); // Detailed error log
         } finally {
           setLoading(false);
         }
       };

       fetchSponsors();
     }, []);

     return (
       <section id="sponsors" className="py-12 bg-gray-100">
         <div className="container mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-8">Our Sponsors</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
             {loading ? (
               <p className="text-center">Loading sponsors...</p>
             ) : sponsors.length > 0 ? (
               sponsors.map((sponsor) => (
                 <div key={sponsor.id} className="flex flex-col items-center">
                   <img src={sponsor.logo} alt={sponsor.name} className="h-20 mb-4" />
                   <h3 className="text-xl font-semibold">{sponsor.name}</h3>
                   <p className="text-gray-600 text-center">{sponsor.description}</p>
                 </div>
               ))
             ) : (
               <p className="text-center">No sponsors available.</p>
             )}
           </div>
         </div>
       </section>
     );
   };

   export default Sponsors;