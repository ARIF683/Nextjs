import Link from 'next/link'
import React from 'react'

const Courses = ({courses}) => {
  return (
    <div>
        {courses.map((course) => (
        <>
          <p>{course.title}</p>
          <p>{course.description}</p>
          <p>{course.level}</p>
          <Link href = {course.link}>Go to course</Link>
        </>
        ))}
    </div>
  )
}
export default Courses;
