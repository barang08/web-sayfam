
import './App.css';
import Header from "./layout/Header"
import Skills from './layout/Skills';
import Profile from "./layout/Profile"
import Projects from './layout/Projects';
import Footer from './layout/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createContext, useState } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ReactSwitch from 'react-switch';



const user = {
  name: "Baran",
  surName: "GÜNEY"
}

export const ThemeContext = createContext(null)

function App() {
  const [theme, setTheme] = useState("dark")

  const toogleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"))
  }

  return (

    <div className="App">
      <ThemeContext.Provider value={{ theme, toogleTheme }}>


        < Header user={user} />

        <Skills />
        <Profile />
        <Projects />
        <Footer />
      </ThemeContext.Provider>



    </div>


  );
}

export default App;
