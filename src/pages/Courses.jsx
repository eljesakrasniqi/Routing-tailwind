import React, { useEffect, useState } from "react";
import { getAllCourses } from "../services/coursesService";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getAllCourses()
      .then((data) => {
        setCourses(data);
      })
      .catch(() => {
        setError("Could not fetch the courses");
      })
      .finally((data) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return;
    <div>loading...</div>;
  }
  if (error) {
    return;
    <div>{error}</div>;
  }
  return (
    <>
      {courses.map((course) => (
        <div class="max-w-sm bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 m-5">


  <div className="p-5">
    <div className="flex items-center justify-between mb-2">
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Technology</span>
      <span className="text-gray-500 text-sm">5 min read</span>
    </div>

    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{course.name}</h5>
    
    <p className="mb-4 font-normal text-gray-600 text-sm leading-relaxed">
      {course.desc}
    </p>

    <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
      Enroll
      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://w3.org" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </a>
  </div>
</div>
      ))}
    </>
  );
}

export default Courses;
