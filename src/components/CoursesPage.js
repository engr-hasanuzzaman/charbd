import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("passing props are", props);
    this.state = {
      course: {
        title: "",
      },
    };
  }

  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const course = {
      title: this.state.title,
      description: this.state.description,
    };

    this.props.dispatch(courseActions.createCourse(course));
    // this.setState({ title: "", description: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h2>Add Course</h2>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <input type="submit" value="Save" />
        {this.props.courses.map((c, i) => (
          <p key={i}>Title is: {c.title}</p>
        ))}
      </form>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { courses: state.courses };
}

export default connect(mapStateToProps)(CoursesPage);
