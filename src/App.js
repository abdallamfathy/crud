import React , {Component} from 'react'
import CourseList from './Components/CourseList';
import CourseForm from './Components/CourseForm';
import './App.css'
class App extends Component{

    state= {
        courses:[

            {name: "HTML"},
            {name: "CSS"},
            {name: "JS"},

        ],
        current:'',

    }


    updateList=(e)=>{
        console.log(e.target.value)
        this.setState({
            current:e.target.value
        })
    }
    addCourse=(e)=>{
        e.preventDefault();
        let current = this.state.current;
        let courses = this.state.courses;
        courses.push({name:current});
        this.setState({
            courses,
            current:'',
        })
}
    editCourse=(index,value) =>{
        let courses = this.state.courses;
        let course = courses[index];
        course['name'] = value;
        this.setState({courses})

    }
    deleteCourse=(index)=>{
        let courses = this.state.courses;
        courses.splice(index,1);
        this.setState({courses})
    }
render() {

        const courses = this.state.courses;
        const coursesList= courses.map((course,index) => {
            return <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
        })
  return (
    <section className="App">
        <h2>Add Course</h2>
      <CourseForm updateList={this.updateList} addCourse={this.addCourse} current={this.state.current} />
        <ul>{coursesList}</ul>
    </section>)
}
}


export default App;
