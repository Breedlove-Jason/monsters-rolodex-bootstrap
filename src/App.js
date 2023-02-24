import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import axios from 'axios';

function App() {
    const [monster, setMonster] = useState([
        {name: 'Linda', id: 1},
        {name: 'Frank', id: 2},
        {name: 'Jacky', id: 3},
    ],
);

    const [users, setUsers] = useState([]);
    // https://jsonplaceholder.typicode.com/users

    useEffect(() => {
        return () => {
            const getUsers = () => {
                axios.get('https://jsonplaceholder.typicode.com/users')
                    .then((response) => {
                        setUsers(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }

            getUsers();
        };
    }, []);
    // const getUsers = () => {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => {
    //             setUsers(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
    console.log(users);
return (
    <div className="App container-lg">
        {users.map(
            (users, index) => <h1 key={index}>{users.name}</h1>
        )}

        {/*<button onClick={}>Get Users</button>*/}

    </div>
);
}

export default App;
