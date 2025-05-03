import React from 'react';
import Stories from 'react-insta-stories';

const stories = [
	'/src/images/1.jpeg',
	'/src/images/2.jpeg',
    '/src/images/3.jpeg',
    '/src/images/4.jpeg',
    '/src/images/5.jpeg',
    '/src/images/6.jpeg',
    '/src/images/7.jpeg',
    '/src/images/8.jpeg',
    '/src/images/9.jpeg',
	
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