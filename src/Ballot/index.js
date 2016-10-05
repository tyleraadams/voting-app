import React from 'react';
import './Ballot.css';
import data from '../../data.json';
const { candidates } = data;
import Candidate from '../Candidate'

const Ballot = React.createClass({
	getInitialState() {
		return {
			votes: {
        'Donald Trump': 0,
        'Hillary Rodham Clinton': 0
			}
		};
	},

  handleClick(name) {
    const { votes } = this.state;
    let thisCandidateVoteCount = votes[name];
    const updatedState = {};
    updatedState[name] = thisCandidateVoteCount + 1;
    this.setState({
      votes: Object.assign({}, votes, updatedState)
    });
  },

  render() {
  	const state = this.state;
  	const { votes } = state;
    return (
      <ul className="ballot">
        {candidates.map((candidate, i) => {
        	const { name, poster } = candidate;
        	const votesForThisCandidate = votes[name];
          const boundClick = this.handleClick.bind(this, name);
        	return <Candidate
                    key={i}
                    name={name}
                    onClick={boundClick}
                    poster={poster}
                    votes={votesForThisCandidate}
                  />
          })}
      </ul>
    );
  }
});

export default Ballot;
