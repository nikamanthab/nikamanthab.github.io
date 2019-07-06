import React from 'react'
import school from './../../images/school.svg';
import graduation from './../../images/graduation.svg'
import internship from './../../images/internship.svg'
import data from './../data/about';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const colors = ["violet","green","yellow","pink","blue","teal","lilaic","purple","gray","orange"]
class Home extends React.Component{

    render = ()=>{
        let chart = (<div></div>)
        console.log(data);

        chart = data["data"].map((ele)=>{
            let i = school;
            if(ele.type === "school") i = school;
            else if(ele.type === "college") i = graduation;
            else if(ele.type === "internship") i = internship;

            let score = (ele.score?(<p>score:{ele.score}</p>):(<div></div>))
            return(
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date = {ele.date} 
                    iconStyle={{ background: colors[parseInt(Math.random()*10)]} }
                    icon={<img 
                        alt="*"
                        src={i} 
                        className="img-icon"
                        />}
                >
                    <h3 className="vertical-timeline-element-title">{ele.title}</h3>
                    <h4 className="vertical-timeline-element-subtitle">{ele.subtitle}</h4>
                    <p>
                    {ele.description}
                    </p>
                    <p>{score}</p>
                </VerticalTimelineElement>
            )
        })

        return(
            <div className="shadowbackground" style={{"text-align":"center"}}>
                <h1 style={{color:"white",padding:"10px"}}>Experience And Education</h1>
                <VerticalTimeline>
                    {chart}
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        // icon={<StarIcon />}
                    />
                    </VerticalTimeline>
            </div>
        )
    }
}

export default Home;