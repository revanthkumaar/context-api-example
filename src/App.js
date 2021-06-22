import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {
    cars : {
      car001: { name: 'Honda', price: 100 },
      car002: { name: 'BMW', price: 150 },
      car003: { name: 'Mercedes', price: 200 }
    }
  }

  incrementCarPrice(selectedID) {
    // a simple method that manipulates the state
    const cars = Object.assign({}, this.state.cars);
    cars[selectedID].price = cars[selectedID].price + 1;
    this.setState({
        cars
    });
}

decrementCarPrice(selectedID) {
    // a simple method that manipulates the state
    const cars = Object.assign({}, this.state.cars);
    cars[selectedID].price = cars[selectedID].price - 1;
    this.setState({
        cars
    });
}

  render(){

    return(
      <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to my web store</h1>
                </header>
               
                <ProductList
                    cars={this.state.cars}
                    incrementCarPrice={this.incrementCarPrice}
                    decrementCarPrice={this.decrementCarPrice}
                />
            </div>
    )
  }
}
export default App;
