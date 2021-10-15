// import logo from './logo.svg';
import './App.css';

function App() {
  state = { users: [] }

  componentDidMount() {
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({ users }));
  };

  return (
    <div className="App">
      <h1>Users</h1>
      
    </div>
  );
}

export default App;
