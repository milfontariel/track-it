import ReactDOM from 'react-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import 'normalize.css';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Habitos from './components/Habitos';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Habitos></Habitos>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/cadastro' element={<Cadastro></Cadastro>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'));