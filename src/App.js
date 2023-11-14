
import './App.css';
import Header from "./layout/Header"
import Skills from './layout/Skills';
import Profile from "./layout/Profile"
import Projects from './layout/Projects';
import Footer from './layout/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { createContext, useState, useContext } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';



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
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
      />
      <div className="App">
        <ThemeContext.Provider value={{ theme, toogleTheme }}>
          <LanguageProvider>
            < Header user={user} />
            <Skills />
            <Profile />
            <Projects />
            <Footer />
          </LanguageProvider>






        </ThemeContext.Provider>



      </div>

    </>


  );
}

export default App;
