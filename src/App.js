import './App.css';
import Header from './Header/Header';
import Link from './Link/Link';
import Uslugi from './uslugi/Uslugi';
import Company from './Company/Company';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Link />
      <Uslugi />
      <Company />
      <Footer />
    </div>
  );
}

export default App;
