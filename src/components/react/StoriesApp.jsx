import React from 'react';
import Stories from 'react-insta-stories';


const stories = [
	'/images/1.jpeg',
    '/images/2.jpeg',
    '/images/3.jpeg',
    '/images/4.jpeg',
    '/images/5.jpeg',
    '/images/6.jpeg',
    '/images/7.jpeg',
    '/images/8.jpeg',
    '/images/9.jpeg',
	
];

const StoriesApp = () => {
  return (
    
      <Stories
        stories={stories}
        defaultInterval={5000}
        width={360}
        height={640}
      />
    
  );
};

export default StoriesApp;