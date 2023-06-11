import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work'; // use for Work experience
import DukeLogo from '../img/experience/DukeLogo.png';
import HKPCLogo from '../img/experience/HKPCLogo.jpg';

function Experience() {
  return (
    <div className="section">
      <VerticalTimeline lineColor="#3e497a">

{/*
           <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          contentArrowStyle={{borderRight: '15px solid', color: '#3e497a' }}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
      <img src={} width="150" height="50"/>  
          <b>  To Be Updated in Summer 2023</b>
          </h3>
       <p> Software Engineer Intern</p>
          <p> June 2023 – August 2023 </p> 
        </VerticalTimelineElement> 

        
        */}


         <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          contentArrowStyle={{borderRight: '15px solid', color: '#3e497a' }}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          <img src={HKPCLogo} width="150" height="50"/>
          <b>  Hong Kong Productivity Council </b>
          </h3>
          <p> Software Engineer Intern</p>
          <p> June 2023 – Present </p>
        </VerticalTimelineElement> 

       


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date=""
          contentArrowStyle={{borderRight: '15px solid', color: '#3e497a' }}
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon/>}
        >
          <h3 className="vertical-timeline-element-title">
            <img src={DukeLogo} width="100" height="100"/>
            <br/>
           <b> Duke University </b> 
          </h3>
          <p> Bachelor of Science in Computer Science</p>
          <p> Class of 2025 </p>
        </VerticalTimelineElement>




      </VerticalTimeline>
    </div>
  );
}

export default Experience;