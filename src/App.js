function App() {

  function TOff (){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.0.51/gpio/1');
    xhr.send();
  }


  function TOn (){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://192.168.0.51/gpio/0');
    xhr.send();
  }

  return (
    <div>
      <button onClick={TOn}>Turn On</button>
      <button onClick={TOff}>Turn Off</button>
      <p>New features coming up soon</p>
      <button>Add a tag</button>
    </div>
  );
}

export default App;
