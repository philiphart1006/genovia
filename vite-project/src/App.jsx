// * Imports

// React/Packages

// Styling - imported directly into main.jsx

// Components
import Header from './components/header'
import Form from './components/form'
import Footer from './components/footer'

function App() {

  return (
    <>
      <Header />
      <main>
        {/* ! For a static page, React Router not required so can replace 'Outlet' with 'Form' */}
        <Form />
      </main>
      <Footer />
    </>
  )
}

export default App
