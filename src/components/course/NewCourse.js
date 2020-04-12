import React, { useState } from "react";

function NewCourse() {
  const [course, setCourse] = useState({
    name: "",
    authorId: "",
    category: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setCourse({ ...course, [name]: value });
  }

  return (
    <form>
      <div className="form-group">
        <label htmlFor="name">Course Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          value={course.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="authorId">Author Id</label>
        <input
          type="text"
          name="authorId"
          className="form-control"
          value={course.authorId}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="category">Course Category</label>
        <input
          type="text"
          name="category"
          className="form-control"
          value={course.category}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <input type="submit" value="Save course" />
      </div>
    </form>
  );
}

export default NewCourse;
