import './App.scss';
import { Footer, About, Header, Skills, Work } from './container/index';
import { Navbar } from './components/index';

function App() {
	return (
		<div className="app">
			<Navbar />
			<Header />
			<About />
			<Work />
			<Skills />
			<Footer />
		</div>
	);
}

export default App;
