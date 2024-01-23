// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function ProjectBox({ title, subheading, image, gitlink }) {
  return (
    <div className="bg-metal flex flex-col justify-center overflow-hidden rounded-lg shadow-inner p-4 m-auto">
      <a href= {gitlink}>
        <img src={image} alt={title} className="mx-auto block size-96 hover:scale-110 transition-transform duration-300" />
      </a>
      <h2 className="text-white text-xl font-bold text-left pl-4">{title}</h2>
      <p className="text-white text-lg text-left pl-4">{subheading}</p>
    </div>
  );
}


ProjectBox.propTypes = {
  title: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  gitlink: PropTypes.string.isRequired
};

export default ProjectBox;
