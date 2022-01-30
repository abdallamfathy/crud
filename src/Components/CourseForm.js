import React from 'react';

const CourseForm = (props) =>{
    return(
        <div>
            <form onSubmit={props.addCourse}>
                <input type="text" value={props.current} onChange={props.updateList}/>
                    <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default  CourseForm;