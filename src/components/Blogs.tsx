// import React, { useState, useEffect } from 'react';
// import PocketBase from 'pocketbase';
// import { Link } from 'react-router-dom';

// const pb = new PocketBase('http://127.0.0.1:8090');

// interface Blog {
//   id: string;
//   title: string;
//   content: string;
//   author: string;
//   date: string;
//   image?: string; // Image field is a URL string
// }

// const Blogs: React.FC = () => {
//   const [blogs, setBlogs] = useState<Blog[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       setLoading(true);
//       console.log('Attempting to fetch blogs...');
//       try {
//         const records = await pb.collection('blogs').getFullList({
//           sort: '-date', // Sort by date descending (latest first)
//         });
//         console.log('Fetched blogs:', records);
//         setBlogs(records);
//       } catch (error) {
//         console.error('Fetch error details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative bg-gray-900 py-16 md:py-24">
//         <div
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: `url('/images/uc_myclimateaction_hero@2x.jpg')`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat',
//             opacity: 0.3,
//           }}
//         />
//         <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 to-transparent"></div>
//         <div className="container mx-auto px-6 z-20 relative text-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Blog</h2>
//           <p className="text-lg text-gray-300 max-w-2xl mx-auto">
//             Discover insights, tips, and updates on climate action and sustainability.
//           </p>
//         </div>
//       </div>

//       {/* Blog Grid Section */}
//       <div className="container mx-auto px-6 py-12">
//         {loading ? (
//           <p className="text-center text-gray-600 text-lg">Loading blogs...</p>
//         ) : blogs.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogs.map((blog) => (
//               <Link
//                 key={blog.id}
//                 to={`/blog/${blog.id}`}
//                 className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//               >
//                 {/* Featured Image */}
//                 <div className="w-full h-48 overflow-hidden">
//                   <img
//                     src={blog.image || '/images/placeholder.jpg'}
//                     alt={blog.title}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//                     onError={(e) => {
//                       e.currentTarget.src = '/images/placeholder.jpg'; // Fallback on image load error
//                     }}
//                   />
//                 </div>
//                 {/* Card Content */}
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">{blog.title}</h3>
//                   <div className="flex items-center text-sm text-gray-500">
//                     <span>{blog.author}</span>
//                     <span className="mx-2">•</span>
//                     <span>
//                       {new Date(blog.date).toLocaleDateString('en-US', {
//                         month: 'short',
//                         day: 'numeric',
//                         year: 'numeric',
//                       })}
//                     </span>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600 text-lg">No blogs available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Blogs;


import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { Link } from 'react-router-dom';

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  image?: string;
}

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      console.log('Attempting to fetch blogs...');
      try {
        const records = await pb.collection('blogs').getFullList({
          sort: '-date',
        });
        console.log('Fetched blogs:', records);
        setBlogs(records);
      } catch (error) {
        console.error('Fetch error details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-teal-50 to-blue-100 text-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-teal-500 to-blue-500 py-16 md:py-24">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/images/uc_myclimateaction_hero@2x.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.2,
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-4 lg:px-6 z-20 relative text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-white mb-6 tracking-tight animate-fade-in">
            Our Blog
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto tracking-wide animate-fade-in delay-100">
            Discover insights, tips, and updates on climate action and sustainability.
          </p>
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="container mx-auto px-4 sm:px-4 lg:px-6 py-16">
        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-start items-start justify-content-start">
            {blogs.map((blog, index) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.id}`}
                className="group bg-white rounded-xl border border-teal-100 shadow-md overflow-hidden w-full max-w-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Featured Image */}
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={blog.image || '/images/placeholder.jpg'}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-xl"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder.jpg';
                    }}
                  />
                </div>
                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-gray-900 mb-3 line-clamp-2 tracking-tight">
                    {blog.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">{blog.author}</span>
                    <span className="mx-2">•</span>
                    <span>
                      {new Date(blog.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border-l-4 border-teal-500 p-6 rounded-lg max-w-5xl animate-fade-in">
            <p className="text-teal-600 text-lg font-medium tracking-wide">No blogs available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;