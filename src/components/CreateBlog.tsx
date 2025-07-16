import React, { useState } from 'react';
   import PocketBase from 'pocketbase';
   import { useNavigate } from 'react-router-dom';

   const pb = new PocketBase('http://127.0.0.1:8090');

   const CreateBlog: React.FC = () => {
     const [title, setTitle] = useState('');
     const [content, setContent] = useState('');
     const [author, setAuthor] = useState('');
     const [message, setMessage] = useState('');
     const navigate = useNavigate();

     const handleSubmit = async (e: React.FormEvent) => {
       e.preventDefault();
       try {
         await pb.collection('blogs').create({
           title,
           content,
           author,
           date: new Date().toISOString(),
         });
         setMessage('Blog posted successfully!');
         setTimeout(() => {
           navigate('/blogs');
         }, 1000);
       } catch (error) {
         console.error('Error posting blog:', error);
         setMessage('Failed to post blog.');
       }
     };

     return (
       <div className="min-h-screen bg-climate-dark">
         <div className="relative min-h-screen flex items-center overflow-hidden py-16 md:pt-0">
           <div
             className="absolute inset-0 z-0"
             style={{
               backgroundImage: `url('/images/uc_myclimateaction_hero@2x.jpg')`,
               backgroundSize: "cover",
               backgroundPosition: "center",
               backgroundRepeat: "no-repeat",
               height: "120%",
               top: "-10%",
             }}
           />
           <div className="absolute inset-0 z-10 bg-black/50"></div>
           <div className="container mx-auto px-6 z-20 relative">
             <div className="w-full lg:w-1/2 mx-auto text-white">
               <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12 text-center">Write a Blog</h2>
               {message && <p className="text-center mb-4">{message}</p>}
               <form onSubmit={handleSubmit} className="space-y-4 bg-white/10 p-6 rounded-lg backdrop-blur-md">
                 <input
                   type="text"
                   value={title}
                   onChange={(e) => setTitle(e.target.value)}
                   placeholder="Title"
                   className="w-full p-2 border border-gray-300 rounded text-black"
                   required
                 />
                 <textarea
                   value={content}
                   onChange={(e) => setContent(e.target.value)}
                   placeholder="Content"
                   className="w-full p-2 border border-gray-300 rounded h-32 text-black"
                   required
                 />
                 <input
                   type="text"
                   value={author}
                   onChange={(e) => setAuthor(e.target.value)}
                   placeholder="Your Name"
                   className="w-full p-2 border border-gray-300 rounded text-black"
                   required
                 />
                 <button type="submit" className="w-full p-2 bg-climate-orange text-white rounded hover:bg-opacity-90 transition-all">
                   Submit Blog
                 </button>
               </form>
             </div>
           </div>
         </div>
       </div>
     );
   };

   export default CreateBlog;