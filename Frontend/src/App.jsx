import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar.jsx'
import CourseCard from './Components/CourseCard.jsx'

const App = () => {
  const [courses, setCourses] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/courses')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data)
      })
      .catch((error) => {
        console.error('Error fetching courses:', error)
      })
  }, [])

  return (
    <>
      <Navbar />

      <main className="page-content">
        <p className="eyebrow">Your learning space</p>

        <h1>Build something you&apos;re proud of.</h1>

        <section
          className="course-grid"
          aria-label="Available courses"
        >
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              category={course.category}
              level={course.level}
              duration={course.duration}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default App