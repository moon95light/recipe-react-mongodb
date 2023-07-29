import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { CreateRecipe } from './pages/create-recipe';
import { SavedRecipes } from './pages/saved-recipes';
import { Auth } from './pages/auth';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/create-recipe" element={<CreateRecipe />}></Route>
          <Route path="/saved-recipes" element={<SavedRecipes />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
