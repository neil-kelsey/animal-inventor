import {useState} from 'react';
import './App.css';

function App() {
  const animals = ['lion', 'tiger', 'bear', 'monkey', 'panda', 'zebra', 'giraffe'];

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

    // remove first two characters from animal1

    // remove last two characters from animal2

    // concatonate the two strings

    // display the new string


  }


  return (
    <div className="App">
      <p>animal name here</p>
      <button onClick={newAnimalClickHandler}>new animal</button>
    </div>
  );
}

export default App;
