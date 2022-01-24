import ReactDOM from 'react-dom';
import Login from './components/Login';
import Cadastro from './components/Cadastro';
import 'normalize.css';
import './style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Habitos from './components/Habitos';
import UserContext from './contexts/UserContext';
import { useEffect, useState } from 'react';
import Historico from './components/Historico';
import Hoje from './components/Hoje';

function App() {
    const [status, setStatus] = useState(false);
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [habits, setHabits] = useState([]);
    const [todayHabits, setTodayHabits] = useState([]);
    const [doneHabits, setDoneHabits] = useState(0);

    useEffect(() => {
        if (todayHabits.length !== 0) {
            const array = [];
            todayHabits.forEach(habit => {
                if (habit.done) {
                    array.push(habit.id);
                }
            });
            const done = array.length;
            setDoneHabits((100 / todayHabits.length) * done);
        }
    }, [todayHabits]);

    return (
        <UserContext.Provider value={{
            token, setToken, userData, setUserData,
            status, setStatus, habits, setHabits, todayHabits, setTodayHabits,
            doneHabits, setDoneHabits
        }}>
            <BrowserRouter>
                <Routes>
                    <Route path='/habitos' element={<Habitos></Habitos>}></Route>
                    <Route path='/' element={<Login></Login>}></Route>
                    <Route path='/cadastro' element={<Cadastro></Cadastro>}></Route>
                    <Route path='/historico' element={<Historico></Historico>}></Route>
                    <Route path='/hoje' element={<Hoje></Hoje>}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

ReactDOM.render(<App />, document.querySelector('.root'));