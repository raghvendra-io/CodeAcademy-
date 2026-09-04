import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

const CourseDetails = () => {
  const { id } = useParams()

  const [course, setCourse] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`http://localhost:8080/api/courses/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCourse(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching course:', error)
        setLoading(false)
      })
  }, [id])

  if (loading) {
    return <p>Loading course...</p>
  }

  if (!course) {
    return <p>Course not found.</p>
  }

  return (
    <main className="course-details">

      <Link to="/">
        ← Back to Courses
      </Link>

      <p className="eyebrow">
        {course.category}
      </p>

      <h1>{course.title}</h1>

      <p className="course-description">
        {course.description}
      </p>

      <div className="course-info">

        <div>
          <strong>Level</strong>
          <p>{course.level}</p>
        </div>

        <div>
          <strong>Duration</strong>
          <p>{course.duration}</p>
        </div>

        <div>
          <strong>Lessons</strong>
          <p>{course.lessons}</p>
        </div>

        <div>
          <strong>Rating</strong>
          <p>⭐ {course.rating}</p>
        </div>

      </div>

      <p>
        Instructor: <strong>{course.instructor}</strong>
      </p>

      <button>
        Start Learning
      </button>

    </main>
  )
}

export default CourseDetails