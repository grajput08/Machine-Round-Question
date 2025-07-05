import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ImportTopicsTable from './components/ImportTopicsTable';
import ComponentRouter from './components/ComponentRouter';

// Wrapper component to handle navigation
const AppContent = () => {
  const navigate = useNavigate();

  const handleTopicClick = (url: string) => {
    navigate(url);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>
            Machine Code
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      <main className="container mt-4">
        <Routes>
          <Route path="/" element={
            <>
              <div className="text-center">
                <h1 className="display-4 mb-4">Welcome to Machine Code Learning Topics</h1>
                <p className="lead mb-4">
                  Your comprehensive resource for learning React.js concepts, hooks, HTML, CSS and best practices.
                </p>
              </div>
              <ImportTopicsTable onTopicClick={handleTopicClick} />
            </>
          } />
          <Route path="/:route" element={<ComponentRouter />} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
