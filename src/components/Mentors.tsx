import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { Link, useNavigate } from 'react-router-dom';

const pb = new PocketBase(import.meta.env.VITE_POCKETBASE_URL);

interface Mentor {
  id: string;
  name: string;
  photo: string;
  description: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
  website?: string;
}

const Mentors: React.FC = () => {
  const [mentors, setMentors] = useState<Mentor[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMentors = async () => {
      setLoading(true);
      console.log('Attempting to fetch mentors...');
      try {
        const records = await pb.collection('mentors').getFullList();
        console.log('Fetched mentors:', records);
        setMentors(records);
      } catch (error) {
        console.error('Fetch error details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div className="min-h-screen bg-climate-dark">
      <div className="relative min-h-screen flex items-center overflow-hidden py-16 md:pt-0">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('images/uc_myclimateaction_hero@2x.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "120%",
            top: "-10%",
          }}
        />
        <div className="absolute inset-0 z-10 bg-black/60"></div>
        <div className="container mx-auto px-6 z-20 relative">
          <div className="w-full lg:w-3/4 mx-auto text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">Our Mentors</h2>
            {loading ? (
              <p className="text-center">Loading mentors...</p>
            ) : mentors.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {mentors.map((mentor) => (
                  <Link
                    to={`/mentor/${mentor.id}`}
                    key={mentor.id}
                    className="bg-white/15 p-6 rounded-lg shadow-lg backdrop-blur-md hover:bg-white/25 transition-all duration-300 cursor-pointer"
                  >
                    <img
                      src={mentor.photo}
                      alt={mentor.name}
                      className="h-24 w-24 mx-auto mb-4 rounded-full object-cover"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-white">{mentor.name}</h3>
                    <p className="text-gray-200 text-center">{mentor.description}</p>
                  </Link>
                ))}
              </div>
            ) : (
              <p className="text-center text-white">No mentors available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentors;