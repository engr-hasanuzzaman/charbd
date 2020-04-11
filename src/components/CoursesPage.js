import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as courseActions from "../redux/actions/courseActions";
import { bindActionCreators } from "redux";
import CourseList from "./CourseLIst";

class CoursesPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("passing props are", props);
    this.state = {
      course: {
        title: ""
      }
    };
  }

  componentDidMount() {
    console.log("calling componentDidMount");
    this.props.actions.loadCourses();
  }

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    // debugger;
    this.setState({ course: course });
  };

  handleSubmit = event => {
    event.preventDefault();
    // debugger;
    this.props.actions.createCourse(this.state.course);
    this.setState({ course: { title: "", description: "" } });
    // this.setState({ title: "", description: "" });
  };

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <CourseList courses={this.props.courses} />
      </div>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  // debugger;
  return { courses: state.courses };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(courseActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
