import axios from 'axios';
import { useState, useEffect } from 'react';
import useModal from './modal/use-modal';
import Modal from "./modal/modal";
import logo from './logo.svg';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [course, setCourse] = useState(null);
	const [modalClass, setModalClass] = useState(null);
	const [modalContent, setModalContent] = useState(null);
  const { modalView, modalToggle } = useModal();

	let content = {};

  useEffect(() => {
		fetchData();
	}, [])

	const fetchData = async () => {

		const TEE_SVC_URL = 'tees.json';

		try {
			setLoading(true);
			const response = await axios.get(TEE_SVC_URL);
			const data = response.data
			setCourse(data);
			setLoading(false);
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	}

  if (loading || course == null) {
		content.list = <div>Loading...</div>;
	} else {
		content.list = course.tees.map((item) => {
      console.log(item);
		});
  }

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
