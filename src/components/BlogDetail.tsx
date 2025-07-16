import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);
interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  image?: string;
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        const record = await pb.collection('blogs').getOne(id!);
        setBlog(record);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setError('Failed to load blog. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchBlog();
    else setError('Invalid blog ID.');
  }, [id]);

  const processContent = (content: string) => {
    return DOMPurify.sanitize(content);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-teal-50 to-blue-100 text-gray-900">
      <div className="container mx-auto px-4 sm:px-4 lg:px-6 py-20 max-w-5xl">
        {loading ? (
          <div className="flex justify-center items-center min-h-[50vh]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
          </div>
        ) : error ? (
          <div className="border-l-4 border-red-500 p-6 rounded-lg max-w-5xl mx-auto animate-fade-in">
            <p className="text-red-600 text-lg font-medium tracking-wide">{error}</p>
          </div>
        ) : blog ? (
          <article className="mx-auto">
            <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-gray-900 mb-8 leading-tight tracking-tight text-center animate-fade-in">
              {blog.title}
            </h1>
            <div className="flex items-center justify-center mb-12 animate-fade-in delay-100">
              <div className="h-14 w-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 text-xl font-bold transition-transform hover:scale-110 duration-300">
                {blog.author[0].toUpperCase()}
              </div>
              <div className="ml-4 text-center">
                <p className="text-gray-700 font-medium text-lg tracking-wide">By {blog.author}</p>
                <p className="text-sm text-gray-500 tracking-wide">Published on {new Date().toLocaleDateString()}</p>
              </div>
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-12 rounded-full animate-fade-in delay-200"></div>
            
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-9 
                prose-headings:font-serif prose-headings:text-gray-900 
                prose-headings:font-extrabold prose-headings:tracking-tight prose-p:mb-8 
                prose-img:rounded-xl prose-img:shadow-sm 
                prose-img:max-w-full prose-img:h-auto 
                prose-a:text-teal-500 prose-a:hover:text-teal-700 
                prose-a:font-medium prose-a:transition-colors prose-a:duration-200
                prose-blockquote:border-l-4 prose-blockquote:border-teal-200 
                prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600
                prose-ul:list-disc prose-ul:pl-6 prose-li:mb-4 prose-li:tracking-wide
                animate-fade-in delay-300"
              dangerouslySetInnerHTML={{ __html: processContent(blog.content) }}
            />
            
            <div className="mt-16 text-center animate-fade-in delay-400">
              <a
                href="/blogs"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg 
                  hover:from-teal-600 hover:to-blue-600 transition-all duration-300 font-medium tracking-wide shadow-md hover:shadow-lg"
              >
                ← Back to Blogs
              </a>
            </div>
          </article>
        ) : (
          <div className="border-l-4 border-teal-500 p-6 rounded-lg max-w-5xl mx-auto animate-fade-in">
            <p className="text-teal-600 text-lg font-medium tracking-wide">Blog not found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;



