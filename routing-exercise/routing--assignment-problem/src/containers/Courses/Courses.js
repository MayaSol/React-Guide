import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    courseClickHandler(id) {
        console.log('courseClickHandler');
        console.log(id);
    }

    render () {
        console.log(this.props);
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article className="Course" onClick={() => this.courseClickHandler(course.id)} key={course.id}>{course.title}</article>
                        } )
                    }
                </section>
            </div>
        );
    }
}

export default Courses;