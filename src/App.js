import './App.css';
import {useState, useEffect} from 'react';
// import {Card, Container} from 'react-bootstrap';
import axios from 'axios';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

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
        <div className="App container-lg">
            <h1 className={'title-header'}>Monsters Rolodex</h1>
            <SearchBox onChangeHandler={onSearchChange} placeholder={'Search Monsters'}
                       className={'search-box form-control border-0 bg-dark'}/>
            <CardList monsters={filteredMonsters}/>
        </div>
    );
}

export default App;
