import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';


export default function App() {

  const mainComponents = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return <>
    <Header></Header>

    <div className="grid grid-cols-5">
      {mainComponents.map((item, index) => (
        // Render Main component for each item in the array
        <Main key={index} />
      ))}
    </div>

  </>


}