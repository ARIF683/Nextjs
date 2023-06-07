"use client";
import React, { Suspense, useEffect, useState } from "react";
import Courses from "./components/Courses";
import { FaTruckLoading } from "react-icons/fa";

const page = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
    };
    fetchCourses();
  }, []);
  return (
    <div>
      Home
      <div>
        <Suspense fallback = {<div>Loading...</div>}>
        <Courses courses={courses} />
        </Suspense>
      </div>
    </div>
  );
};

export default page;
