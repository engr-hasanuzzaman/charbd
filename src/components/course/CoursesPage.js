import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import { bindActionCreators } from "redux";
import CourseList from "./CourseLIst";
import * as authorActions from "../../redux/actions/authorActions";
// import CourseForm from "./NewCourse";
import { Link } from "react-router-dom";
import Layout from '../layout';

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
    const { courses, authors } = this.props;

    console.log("calling componentDidMount");
    if (courses.length == 0) {
      this.props.courseActions.loadCourses();
    }

    if (authors.length == 0) {
      this.props.authorActions.loadAuthor();
    }
  }

  handleChange = event => {
    const course = { ...this.state.course, title: event.target.value };
    // debugger;
    this.setState({ course: course });
  };

  handleSubmit = event => {
    event.preventDefault();
    // debugger;
    this.props.courseActions.createCourse(this.state.course);
    this.setState({ course: { title: "", description: "" } });
    // this.setState({ title: "", description: "" });
  };

  render() {
    return (
      <Layout>
        <div>
          <div className="row">
            <div className="col-6">
              <h1>Courses</h1>
            </div>
            <div className="col-6">
              <Link to="courses/new" className="btn btn-smaller btn-success">
                New Course
              </Link>
            </div>
          </div>
          <CourseList courses={this.props.courses} />
        </div>
      </Layout>  
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  courseActions: PropTypes.object.isRequired,
  authorActions: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  // debugger;
  return {
    courses:
      state.authors.length == 0
        ? []
        : state.courses.map(c => {
            // debugger;
            return {
              ...c,
              authorName: state.authors.find(a => {
                // debugger;
                return a.id === c.authorId;
              }).name
            };
          }),
    authors: state.authors
  };
}

function mapDispatchToProps(dispatch) {
  return {
    courseActions: bindActionCreators(courseActions, dispatch),
    authorActions: bindActionCreators(authorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
