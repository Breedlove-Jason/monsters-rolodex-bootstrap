import './App.css';
import {useState, useEffect} from 'react';
// import {Card, Container} from 'react-bootstrap';
import axios from 'axios';
import CardList from "./components/card-list/card-list.component";

function App() {
    const [monsters, setMonsters] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [filteredMonsters, setFilteredMonsters] = useState(monsters);
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
    useEffect(() => {
        const newFilteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchField.toLowerCase())
        );
        setFilteredMonsters(newFilteredMonsters);
    }, [monsters, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };

    return (
        <div className="App container-md">
            <h1>Monsters Rolodex</h1>

            <div className="input-group mb-3 search">
                <input type={"search"} placeholder={"search monsters"} onChange={onSearchChange} className={""}/>
                <button id="button-addon1" type="submit" className="btn btn-primary">Search</button>
            </div>

            {/*{filteredMonsters.map(*/}
            {/*    (users, id) => <h1 key={users.id}>{users.name}<br/>{users.email}</h1>*/}
            {/*)}*/}
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

export default App;
