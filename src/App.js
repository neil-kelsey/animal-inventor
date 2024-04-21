import {useState} from 'react';
import './App.css';

function App() {
  const animals = ['lion', 'tiger', 'bear', 'monkey', 'panda', 'zebra', 'giraffe'];
  const [newAnimal, setNewAnimal] = useState('');

  // Define a function to generate a random animal name
  // Return the JSX element to be rendered

  const newAnimalClickHandler = () => {
    console.log('NeilTest - animals', animals);

    // Create a random number within the range of the array - 0-6
    const randomNumber = Math.floor(Math.random() * animals.length);
    console.log('NeilTest - randomNumber', randomNumber);

    // Take random number and pick that item from the array - this is our first animal
    const firstAnimal = animals[randomNumber];
    console.log('NeilTest - firstAnimal', firstAnimal);

    // Remove first animal from the available animals
    const removeFirstAnimal = animals.filter((item, index) => item !== firstAnimal);
    console.log('NeilTest - removeFirstAnimal', removeFirstAnimal);
    
    // Create a new random number within the range of the updated array - 0-5
    const NewRandomNumber = Math.floor(Math.random() * removeFirstAnimal.length);
    console.log('NeilTest - NewRandomNumber', NewRandomNumber);

    // Take the new random number and pick that item from the array - this is our second animal
    const secondAnimal = removeFirstAnimal[NewRandomNumber];
    console.log('NeilTest - secondAnimal', secondAnimal);

    // Remove the last two characters of the first animal’s name
    const firstHalfOfNewAnimal = firstAnimal.substring(0, firstAnimal.length - 2);
    console.log('NeilTest - firstHalfOfNewAnimal', firstHalfOfNewAnimal);

    // Remove the first two characters of the second animal’s name
    const secondHalfOfNewAnimal = secondAnimal.substring(2);
    console.log('NeilTest - secondHalfOfNewAnimal', secondHalfOfNewAnimal);

    // Concatonate the two strings to get the new animal name
    const newAnimal = firstHalfOfNewAnimal + secondHalfOfNewAnimal;
    console.log('NeilTest - secondHalfOfNewAnimal', newAnimal);

    setNewAnimal(newAnimal);
  }


  return (
    <div className="App">
        <p>{newAnimal}</p>
      <button onClick={newAnimalClickHandler}>new animal</button>
    </div>
  );
}

export default App;
