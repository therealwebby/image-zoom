import React from 'react';

import './Image.css';
import image from '../../assets/images/flower.jpg';

const Image = () => (
  <div className="image-container">
    <img src={image} className="image" alt="sunset" />
  </div>
);

export default Image;
