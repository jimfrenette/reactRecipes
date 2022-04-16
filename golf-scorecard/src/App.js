import { useState, useEffect } from 'react';
import useModal from './modal/use-modal';
import Modal from "./modal/modal";
import logo from './logo.svg';
import './App.css';

function App() {
  const [course, setCourse] = useState(null);
	const [modalClass, setModalClass] = useState(null);
	const [modalContent, setModalContent] = useState(null);
  const { modalView, modalToggle } = useModal();

  useEffect(() => {
    const data = './appdata.json';
    setCourse(data.tees);
		// fetchData();
	}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
