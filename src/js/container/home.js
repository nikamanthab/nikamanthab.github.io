import React from 'react'
import {Container,Image} from 'react-bootstrap';
import {Button} from 'semantic-ui-react';
import profile from './../../images/profile.jpg';
import cv from './../data/cv.pdf';

class Home extends React.Component{
    handleClick = ()=>{
        this.props.changePage("Experience and Education");
    }

    render = ()=>{
        return(
            <div className="homediv animated fadeIn" style={{padding:"10px"}}>
                <Container>
                    <div className="inner-div flex-container" style={{"text-align":"center"}}>
                        <div className="padding">
                            <Image src={profile} style={{"border-radius":"500px",width:"200px"}}></Image>
                        </div>
                                
                        <div style={{"text-align":"center",paddingTop:"5vh"}} className="padding">
                            <h1>Computer Scientist</h1>
                            <h2>
                                Computer Science Undergrad
                            </h2>
                            <h4> Interested in areas of Machine learning, distributed systems and web development </h4>
                            <div style={{marginBottom:"10px"}}>
                                <Button onClick={this.handleClick} inverted color="red">Explore more</Button>
                            </div>
                                <a href={cv}>
                                    <Button inverted color="brown">Download CV</Button>
                                </a>
                        </div>    
                                    
                               
                    </div>
                </Container>
            </div>
        )
    }
}

export default Home;