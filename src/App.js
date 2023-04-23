import React from 'react';

import Nav from './Nav';

import ListJob from './ListJob';
import Footer from './Footer';

import './App.css';

function App() {
  const [jobs, setJobs] = React.useState([]);
  const [filteredJobs, setFilteredJobs] = React.useState([]);

  React.useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  function filterJobs(jobtitle, jobloc, fulltime, parttime) {
    let filtered = jobs.filter((job) => {
      let titleMatch = job.title.toLowerCase().includes(jobtitle.toLowerCase());
      let locationMatch = job.location.toLowerCase().includes(jobloc.toLowerCase());
      let fulltimeMatch = job.fulltime === fulltime;
      let parttimeMatch = job.parttime === parttime;

      return titleMatch && locationMatch && (fulltimeMatch || parttimeMatch);
    });

    setFilteredJobs(filtered);
  }

  return (
    <div className="App">
      <Nav />
      <div className="the-content">
        
        
        <ListJob jobs={filteredJobs} />
        
      </div>
      <div className='Footer'>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
