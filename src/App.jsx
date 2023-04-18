import './styles/styles.scss'
import {
  Routes,
  Route
} from 'react-router-dom';
import Footer from './components/sections/Footer';
import Home from './components/pages/Home';
import About from './components/sections/About';
import JobList from './components/pages/JobList';
import JobDetail from './components/pages/JobDetail';
import ErrorPage from './components/pages/ErrorPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobList" element={<JobList />} />
        <Route path="/jobList/:jobID" element={ <JobDetail /> } />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </div>
  )

}

export default App
