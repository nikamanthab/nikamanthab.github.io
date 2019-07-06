import React from 'react';
import Home from './home';
import About from './about';
import Projects from './projects';

class Main extends React.Component{
    render = ()=>{

        let content = (<div></div>)
        let page = this.props.page;
        if(page === "Home"){
            content = (<Home changePage={this.props.changePage}/>)
        }
        else if(page === "Experience and Education"){
            content = (<About changePage={this.props.changePage}/>)
        }
        else if(page === "Interests and Projects"){
            content = (<Projects changePage={this.props.changePage}/>)
        }

        return(
            <div>
                {content}
            </div>
        )
    }
}

export default Main;