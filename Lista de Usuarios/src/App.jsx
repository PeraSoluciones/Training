import { useEffect, useState } from 'react';
import './MyStyles.css';

function App() {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className={'container'}>
            <h1>Lista de Usuarios</h1>
            <label htmlFor='search'>
                <b>Filtrar: </b>
            </label>
            <input
                type='text'
                name='search'
                id='search'
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className={'search'}
            />
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className={'card-container'}>
                    {filteredUsers.map((user) => (
                        <Card key={user.id} user={user} />
                    ))}
                </div>
            )}
        </div>
    );
}

function Card({ user }) {
    return (
        <div className={'card'}>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
        </div>
    );
}

export default App;
