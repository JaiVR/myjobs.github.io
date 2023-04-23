import React, { useState, useEffect } from 'react';
import Jobs from './Jobs';

function ListJob() {
 
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [formData, setFormData] = useState({
    jobtitle: '',
    jobloc: '',
    fullTime:false ,
    partTime:false
  });

   const [jobs,setJobs]=React.useState([
            {title:"Frontend Developer",nature:"Part-time",location:"India"
             ,company:"DVM",skills:"HTML,CSS,JS,React.js",
             about:"Creating websites for the fests in BITS-Pilani",
             partTime:true

         },
          {title:"Backend Developer",nature:"Full-time",location:"USA"
            ,company:"Google",skills:"Django,Python",
            about:"Yayy your going to working in Google nightmare :) lol",
            fullTime:true
         },
            {title:"Graphic Designer",nature:"Full-time",location:"France"
             ,company:"Ferrari",skills:"Blender",
            about:"Fast super fast ok i dont know what to write here",
            fullTime:true
         },
             {title:"Sleeping",nature:"Full-time",location:"India"
             ,company:"BITS Pilani",skills:"Bed,pillow",
            about:"This is easy hahahahah",fullTime:true
        },
            {title:"UI/UX Design lead",nature:"Part-time",location:"India"
            ,company:"Nutshell",skills:"Civil BITS Pilani Pilani Campus",
           about:"Do all the design pitch decks and everyyyything",
           partTime:true
       },
            {title:"App Developer",nature:"Full-time",location:"Japan"
             ,company:"Nothing",skills:"Flutter,Kotlin",
             about:"Do nothing get peid",fullTime:true
            
         }
        ])
  

  useEffect(() => {
    const filtered = jobs.filter(job => {
      if (formData.jobtitle && job.title.toLowerCase().indexOf(formData.jobtitle.toLowerCase()) === -1) {
        return false;
      }
      if (formData.jobloc && job.location.toLowerCase().indexOf(formData.jobloc.toLowerCase()) === -1) {
        return false;
      }
      if (formData.fullTime && !job.partTime) {
        return false;
      }
      if (formData.partTime && !job.fullTime) {
        return false;
      }
      return true;
    });
    setFilteredJobs(filtered);
  }, [formData, jobs]);

  function getInput(event) {
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }));
  }

  return (
      <div className='ok-finally-displaying'>
        <div className="Main">
            
            <form>
            <div className="Title-Place">
                <div className="Work-key">
                    <input 
                    type="text" 
                    placeholder="Job title/Keyword"
                    className="Work-key-input"
                    onChange={getInput}
                    name="jobtitle"
                    value={formData.jobtitle}
                    ></input>
                </div>
                <div className="Work-location">
                    <input 
                    type="text" 
                    placeholder="Job Location"
                    className="Work-location-input"
                    onChange={getInput}
                    name="jobloc"
                    value={formData.jobloc}
                    ></input>
                </div>
            </div>
            <div className="Work-nature">
            <div className="work-parttime">
                    <input 
                    type="checkbox"
                    
                    className="work-parttime-input"
                    name="partTime"
                    checked={formData.partTime}
                    onChange={getInput}
                    ></input>
                    <label htmlFor="partTime">Full-Time</label>
                </div>
                <div className="work-fulltime">
                    <input 
                    type="checkbox"
                    name="fullTime"  
                    className="work-fulltime-input"
                    
                    checked={formData.fullTime}
                    onChange={getInput}
                    ></input>
                    <label htmlFor="fulltime">Part-Time</label>
                </div>
                
            </div>
            
            
            </form>
        </div>
      <div className="jobs">
        {filteredJobs.map(job => (
          <Jobs
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            nature={job.nature}
            skills={job.skills}
            about={job.about}
          />
        ))}
      </div>
    </div>
  );
}

export default ListJob;
