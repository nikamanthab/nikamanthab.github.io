import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';

class NavbarComp extends React.Component{
    
    handleClick=(e)=>{
        console.log(e.target.innerHTML);
        if(e.target.innerHTML === "Nitin Nikamanth Appiah")this.props.changePage("Home")
        else
        this.props.changePage(e.target.innerHTML);
    }

    render = ()=>{

        return(
            <div>
                <Navbar bg="dark" expand="lg">
                <Navbar.Brand onClick={this.handleClick} val="home" style={{color:"white"}}>Nitin Nikamanth Appiah</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link onClick={this.handleClick} val="home" style={{color:"white",padding:"10px"}}>Home</Nav.Link>
                    <Nav.Link onClick={this.handleClick} val="about" style={{color:"white",padding:"10px"}}>Experience and Education</Nav.Link>
                    <Nav.Link onClick={this.handleClick} val="projects" style={{color:"white",padding:"10px"}}>Interests and Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default NavbarComp;