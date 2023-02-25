import './App.css';
import {useState, useEffect} from 'react';
import {Card, Container} from 'react-bootstrap';
import axios from 'axios';
import { UilSearch } from '@iconscout/react-unicons'
function App() {
    const [monsters, setMonsters] = useState([]);
    // https://jsonplaceholder.typicode.com/users
    useEffect(() => {
        return () => {
            const getUsers = () => {
                axios.get('https://jsonplaceholder.typicode.com/users')
                    .then((response) => {
                        setMonsters(response.data);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }

            getUsers();
        };
    }, []);
    return (
        <div className="App container-md">
            <h1>Monsters Rolodex</h1>

            <div className="input-group mb-3">
                <input type={"search"} placeholder={"search monsters"} onChange={(event) => {
                   const searchString = event.target.value.toLowerCase();
                    const filteredMonsters = monsters.filter((monster) => {
                       return  monster.name.toLowerCase().includes(event.target.value)
                   });
                    setMonsters(filteredMonsters)
                }} />
                <button id="button-addon1" type="submit" className="btn btn-primary">Search</button>
            </div>

            {monsters.map(
                (users, id) => <h1 key={users.id}>{users.name}<br/>{users.email}</h1>
            )}

            {/*<button onClick={}>Get Users</button>*/}

        </div>
    );
}

export default App;
