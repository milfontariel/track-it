import ReactDOM from 'react-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import 'normalize.css';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Habitos from './components/Habitos';
import UserContext from './contexts/UserContext';
import { useState } from 'react/cjs/react.development';


function App() {
    const [status, setStatus] = useState(false);
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [habits, setHabits] = useState([]);
    
        return (
        <UserContext.Provider value={{token, setToken, userData, setUserData,
        status, setStatus, habits, setHabits}}>
            <BrowserRouter>
                <Routes>
                    <Route path='/habitos' element={<Habitos></Habitos>}></Route>
                    <Route path='/' element={<Login></Login>}></Route>
                    <Route path='/cadastro' element={<Cadastro></Cadastro>}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'));