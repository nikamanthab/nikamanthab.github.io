import React from 'react'
import data from './../data/interests';
import {Button} from 'semantic-ui-react';

class Home extends React.Component{

    render = ()=>{
        let interests = (<div></div>);

        interests = data["data"].map((field)=>{
            return(
                <div className="interest-field">
                    <h3 className="subheading">{field.title}</h3>
                    <p>{field.description}</p>
                </div>
            )
        })

        return(
            <div className="project-div" style={{paddingTop:"50px"}}>
                <div className="interest-div">
                        <h1 className="heading">Projects</h1>
                    <div className="interest-field">
                        <p>
                            I have worked on projects in web dev, decentralized systems and currently 
                            working on deep learning and distributed systems
                        </p>
                        <a href="https://github.com/nikamanthab">
                            <Button inverted color="brown">Go to github</Button>
                        </a>
                    </div>
                </div>
                <div className="interest-div">
                    <h1 className="heading">Interests</h1>
                    {interests}
                </div>
            </div>
        )
    }
}

export default Home;