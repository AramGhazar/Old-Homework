import './App.css';
import Home from './Main/index'
import Header from './Header/index'
import About from './About';
import NewsLetter from './NewsLetter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './Router';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
        {
          routes.map(({path, element}) => (
            <Route key={path} path={path} element={element} />
            ))
        }
           <Route path="/Main" element={<Home />} />
           <Route path="/About" element={<About />} />
           <Route path="/NewsLetter" element={<NewsLetter />} />
           <Route path="*" element={<>Not found</>} />
        </Routes>
        <Header />
        {/* <Home /> */}
    </BrowserRouter>
      	
    </div>
  );
}

export default App;
