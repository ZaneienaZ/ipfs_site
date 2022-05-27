import React from 'react';
import Header from './Header'
import './index.css';
import './style.css';
import Navbar from './components/Navbar';
import { HashRouter as Router, Routes, Route}
	from 'react-router-dom';
import Go from './pages/Go';
import About from './pages/About';
import Footer from './components/Footer';



function App() {
	/*const [darkMode, setDarkMode] = React.useState(false);

	React.useEffect(() => {
		if (darkMode) {
		  document.body.classList.add("dark");
		} else {
		  document.body.classList.remove("dark");
		}
	  }, [darkMode]);*/
return (
	<Router>
    <Header />
	<Navbar />
	<Routes>
		<Route exact path='/'  element={<Go />} />
		<Route exaxt path='/About' element={<About/>} />
	</Routes>
    <Footer />
	</Router>
);
}

export default App;
