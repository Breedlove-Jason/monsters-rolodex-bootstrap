import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import {Container} from 'react-bootstrap';

function App() {
    const [monster, setMonster] = useState([
        {name: 'Linda',},
        {name: 'Frank'},
        {name: 'Jacky'}
    ],
);

return (
    <div className="App container-lg">
        {monster.map(
            (monster, index) => <h1 key={index}>{monster.name}</h1>
        )}


    </div>
);
}

export default App;
