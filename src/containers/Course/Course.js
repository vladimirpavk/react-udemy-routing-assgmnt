import React, { Component } from 'react';

class Course extends Component {
    constructor(props){
        super(props);
        this.state={
            courses:{
                courseTitle : null
            }
        };
    }

    componentDidMount(){        
        /* console.log('component did load...'); */
        this.loadData();        
    }

    loadData = ()=>{
        let newCourseTitle;
        const searchParams = new URLSearchParams(this.props.location.search);
        for(let [key, value] of searchParams){            
            if(key==="courseTitle")  newCourseTitle = value;
        }

        if(!this.state.courses.courseTitle || (this.state.courses.courseTitle && this.state.courses.courseTitle!==newCourseTitle)){
            this.setState({
                courses:{
                    courseTitle:newCourseTitle
                }
            });
        }                
    }

    componentDidUpdate(){
        /* console.log('component did update...');  */   
        this.loadData();    
    }

    render () {
        return (
            <div>
                <h1>{this.state.courses.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params['id']}</p>
            </div>
        );
    }
}

export default Course;