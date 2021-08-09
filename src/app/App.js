import './App.css';
import Navbar from '../components/navigationBar/NavBar';
import HomePage from '../homePage/HomePage';
import AboutPage from '../aboutPage/AboutPage';
import ProjectPage from '../projectsPage/ProjectPage';
import ContactPage from '../contactPage/ContactPage';

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <HomePage/>
      <AboutPage/>
      <ProjectPage/>
      <ContactPage/>
    </div>
  );
}

export default App;
