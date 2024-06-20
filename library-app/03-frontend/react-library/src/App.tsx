import './App.css'
import { Navbar } from './layouts/NavBarAndFooter/Navbar'
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage'
import { Footer } from './layouts/NavBarAndFooter/Footer'
import { HomePage } from './layouts/HomePage/HomePage'

function App() {
  return (
    <div>
      <Navbar />
      {/* <HomePage /> */}
      <SearchBooksPage />
      <Footer />
    </div>
  )
}

export default App
