
import './App.css';
import Header from "./layout/Header"
import Skills from './layout/Skills';
import Profile from "./layout/Profile"
import Projects from './layout/Projects';
import Footer from './layout/Footer';



const user = {
  name: "Baran",
  surName: "GÜNEY"
}

function App() {

  return (

    <div className="App">
      <Header user={user} />
      <Skills />
      <Profile />
      <Projects />



    </div>


  );
}

export default App;
