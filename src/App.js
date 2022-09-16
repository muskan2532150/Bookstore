import { Route, Routes} from 'react-router-dom'
import './App.css';
import Header from './component/Header'
import Books from './component/Books';
import Category from './component/Category';

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Books/>}/>
        <Route path='/books' element={<Books/>}/>
        <Route path='/category' element={<Category/>}/>
      </Routes>
    </>
  );
}

export default App;
