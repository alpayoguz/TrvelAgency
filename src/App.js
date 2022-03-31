import './css/App.css';
import data from "./components/data"
import Card from  "./components/Card"

function App() {
  const dataJSX = data.map(elem=>
       <Card {...elem} />
    )
  return (
   <>
     <header className='header'>
       <img className='header-logo' src="/assets/images/Fill213.png" alt='logo'/>
       <h4 className='header-text'>Travel Journal</h4>
     </header>
     <div className="cards">
      {dataJSX}
     </div>
   </>
  );
}

export default App;
