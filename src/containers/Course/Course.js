import React, { Component } from 'react';

class Course extends Component {
    constructor(props){
        super(props);
        this.state={
            courses:{
                courseTitle :''
            }
        };
    }

    componentDidMount(){        
        const searchParams = new URLSearchParams(this.props.location.search);
        for(let [key, value] of searchParams){
            console.log(key, value);
            if(key==="courseTitle") this.setState({
                courses:{
                    courseTitle: value
                }
            });
        }
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