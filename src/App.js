import './App.css';
import Row from './components/Row';
import requests from './requests';
import Banner from './components/Banner';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <Banner/>
      </header>
      <Row title="Trending In India"
        fetchUrl={requests.fetchTrending}
      />
      <Row title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Top Rated Shows & Movies"
        fetchUrl={requests.fetchTopRated}
      />
      <Row title="Action"
        fetchUrl={requests.fetchActionMovies}
      />
      <Row title="Comedy"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row title="Horror"
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row title="Romance"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row title="Romance"
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
}

export default App;
