import React , {Component,Fragment} from 'react'

class CourseList extends Component{
state={
    isEdit:false
}

//toggle
toggleState = ()=>{
   let {isEdit} = this.state;
   this.setState({
       isEdit: !isEdit
    })
}

//update function
    updateCourse=(e)=>{
        e.preventDefault();
        this.props.editCourse(this.props.index,this.input.value);
        this.toggleState();
    }

//render
renderCourse = () => {
    return(
        <li>
            <span>{this.props.details.name}</span>
            <button onClick={()=>{this.toggleState()}}>Edit </button>
            <button onClick={()=>{this.props.deleteCourse(this.props.index)}}>Delete</button>
        </li>
    )
}

//render update form
renderUpdate = ()=>{
    return(
        <form onSubmit={this.updateCourse}>
            <input type="text" ref={(v)=>{this.input=v}} defaultValue={this.props.details.name}/>
            <button>Update </button>
        </form>
    )
}



    render() {
    let {isEdit} = this.state;
        return (
            <Fragment>
                {isEdit ? this.renderUpdate() : this.renderCourse()}
            </Fragment>)
    }
}


export default  CourseList;
