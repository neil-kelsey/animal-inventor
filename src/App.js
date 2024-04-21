import logo from './logo.svg';
import './App.css';

function App() {
  const animals = ['lion', 'tiger', 'bear', 'monkey', 'panda', 'zebra', 'giraffe'];

  // Define a function to generate a random animal name
  // Return the JSX element to be rendered

  const newAnimalClickHandler = () => {
    // Create a random number within the range of the array - 0-6
    const randomNumber = Math.floor(Math.random() * animals.length);
    console.log('NeilTest - randomNumber', randomNumber);

    // Take random value from array
    const firstAnimal = animals[randomNumber];
    console.log('NeilTest - firstAnimal', firstAnimal);
    

    // take another random item from array

    // ensure animal1 doesn't match animal2

    // if it does - pick another animal

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
