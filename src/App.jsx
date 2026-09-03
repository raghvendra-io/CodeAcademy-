
import Navbar from './Components/Navbar.jsx'
import CourseCard from './Components/CourseCard.jsx'
import Courses from './Components/Courses.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <main className="page-content">
        <p className="eyebrow">Your learning space</p>
        <h1>Build something you&apos;re proud of.</h1>
        <section className="course-grid" aria-label="Available courses">
          {Courses.map((course) => (
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

export default App;
