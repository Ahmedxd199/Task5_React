// import Login from "./login";
import SignUp from "./signup";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Login from "./login";
import NavB from "./NavBar";
import CardView from "./cardView";
import Film from "./film";
import FavMovie from "./favmovie";

function App() {
  return (
    <>
    
    <Router>
        <NavB />
        <Routes>
          <Route path="/" element={<CardView />} />
          <Route path="/login" element={<Login />}  />
          <Route path="/signup" element={<SignUp />}  />
          <Route path="/film/:id" element={<Film />} />
          <Route path="/favmovie" element={<FavMovie />} />
        </Routes>
      </Router>
  

    </>
  );
}

export default App;
