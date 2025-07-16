import React, { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { useParams, Link } from 'react-router-dom';

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

const MentorDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMentor = async () => {
      setLoading(true);
      try {
        const record = await pb.collection('mentors').getOne(id!);
        setMentor(record);
      } catch (error) {
        console.error('Fetch error details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMentor();
  }, [id]);

  // Validate URL to ensure it starts with http:// or https://
  const validateUrl = (url?: string): string | undefined => {
    if (!url) return undefined;
    return url.match(/^https?:\/\//) ? url : `https://${url}`;
  };

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
            {loading ? (
              <p className="text-center">Loading mentor details...</p>
            ) : mentor ? (
              <div className="bg-white/15 p-8 rounded-lg shadow-lg backdrop-blur-md">
                <img
                  src={mentor.photo}
                  alt={mentor.name}
                  className="h-32 w-32 mx-auto mb-6 rounded-full object-cover"
                />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{mentor.name}</h2>
                <p className="text-gray-200 mb-6">{mentor.description}</p>
                <div className="flex justify-center gap-4">
                  {mentor.linkedin && (
                    <a
                      href={validateUrl(mentor.linkedin)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      LinkedIn
                    </a>
                  )}
                  {mentor.twitter && (
                    <a
                      href={validateUrl(mentor.twitter)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Twitter
                    </a>
                  )}
                  {mentor.github && (
                    <a
                      href={validateUrl(mentor.github)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {mentor.website && (
                    <a
                      href={validateUrl(mentor.website)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Website
                    </a>
                  )}
                </div>
                <Link
                  to="/mentors"
                  className="mt-6 inline-block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Back to Mentors
                </Link>
              </div>
            ) : (
              <p className="text-center text-white">Mentor not found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetail;