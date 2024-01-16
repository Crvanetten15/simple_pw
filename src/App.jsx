import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Blog from './pages/Blog'
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer'
import Header from './components/Header'
import Test from './pages/Test'

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/connect" element={<Contact />} />
          <Route path="/Testing" element={<Test />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App
