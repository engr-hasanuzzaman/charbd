import * as types from './actionTypes';
import * as courseApi from '../../api/courseApi';

export function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course
  };
}

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses
  };
}

// thunk function
export function loadCourses() {
  return function(dispatch) {
    return courseApi.getCourses()
      .then(courses => {
        console.log('getting courses is ' + courses);
        dispatch(loadCoursesSuccess(courses))
      })
      .catch(err => {
        throw err;
      })
  };
}