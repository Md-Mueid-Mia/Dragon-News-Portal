import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = (props = {}) => {
    const {news} = props || {}
    const {details}=news || {}
    const [isExpanded, setIsExpanded] = useState(false);
     // Function to toggle between showing a preview or the full text
  const toggleReadMore = () => setIsExpanded(!isExpanded);
  return (
    <div className="card w-full bg-base-100 shadow-lg rounded-lg my-5">
      <div className="flex items-center p-4">
        <img
          src={news.author.img
          }
          alt="Author"
          className="w-12 h-12 rounded-full mr-3"
        />
        <div>
          <p className="text-sm font-bold">{news?.author?.name}</p>
          <p className="text-xs text-gray-500">{news?.author?.published_date}</p>
        </div>
      </div>
      
      <div className="p-4">
        <h2 className="text-lg font-semibold">
          {news.title}
        </h2>
      </div>
      
      <img
        src={news.image_url
        }
        alt="News"
        className="w-full h-48 object-cover"
      />
      
      {/* <div className="p-4 text-sm text-gray-600">
        {news.details}
      </div> */}
      <div className="p-4 text-sm text-gray-600">
        {/* {isExpanded ? details : `${details.substring(0, 100)}...`} */}
        <p>
            {details.slice(0, 100)}...{" "}
            <Link to={`/news/${news._id}`}
          
          className="text-blue-500 font-semibold ml-2"
        >
          {/* {isExpanded ? 'Show Less' : 'Read More'} */}
          Read More
        </Link>
          </p>
        
      </div>
      
      <div className="flex justify-between items-center p-4 border-t">
        <div className="flex items-center text-yellow-500">
          <FaStar className="mr-1" />
          <FaStar className="mr-1" />
          <FaStar className="mr-1" />
          <FaStar className="mr-1" />
          <FaStar className="mr-1" /> {news.rating.number
          }
        </div>
        <div className="text-gray-500">{news.total_view
        } views</div>
      </div>
    </div>
  );
};

export default NewsCard;
