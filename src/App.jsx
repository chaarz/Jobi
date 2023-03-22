import './styles/styles.scss'
import {
  Routes,
  Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import JobList from './components/JobList';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <div className= "wrapper">
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobList" element={<JobList />} />
        <Route path="*" element={<ErrorPage />} /> 
      </Routes>

      <Footer/>
    </div>
  )

}

export default App
