import React from 'react';
import './Candidate.css';
import ResponsiveImage from '../ResponsiveImage';

const Candidate = (props) => {
  const { votes, onClick, poster, name } = props;
  return (
    <li className='ballot__candidate hover' onClick={onClick}>
      <ResponsiveImage className='ballot__poster' data={poster} />
      <h2 className='ballot__name'>
        {name}
        <span className='ballot__vote-count'>{votes}</span>
      </h2>
    </li>
  );
};

Candidate.propTypes = {
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
  poster: React.PropTypes.object.isRequired,
  votes: React.PropTypes.number.isRequired
};

export default Candidate;
