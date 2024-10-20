
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {
    function handleClick() {
      alert('button clicked');
    }

    const handleClick2 = () =>{
      alert('button 2 clicked')
    }

    const addToFive = (num) => {
      alert(num + 5);
    }

  return (
    <>
      <h3> React Core concepts</h3>

      <Users></Users>
      <Friends></Friends>

      <Team></Team>



      <Counter></Counter>



      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click</button>
      <button 
      onClick={()=>{alert('button 3 clicked')}}
      >click me3</button>

        {/* hard type */}
      <button onClick={() => addToFive(4)}>Four</button>




    </>
  )
}

export default App
