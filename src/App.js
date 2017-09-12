import React, { Component } from 'react';
import SearchInput /*, {createFilter}*/ from 'react-search-input'
import './App.css';
// fetch('https://api.cryptonator.com/api/full/btc-usd').then((res) => res.json()).then((json) => console.log(json));

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <div className="App">
        <div className="navbar navbar-default">
          <h2>Crypt</h2>
          <Search />
        </div>
        <div className="table">
          <Table />
        </div>
      </div>
    );
  }
}

class Table extends Component {
  constructor() {
    super();
    this.state = {
      masterData: []
    }
  }
  getData() {
    fetch('https://api.coinmarketcap.com/v1/ticker/').then((res) => res.json()).then((json) => {
      this.setState({masterData: json})
    });
  }
  sortPrice(){ 
    this.setState({
          masterData: this.state.masterData.sort(function(a, b) {
          return b.price_usd - a.price_usd;
        })
    })
    console.log('set state')
  }
  sortMarketCap(){
    this.setState({
      masterData: this.state.masterData.sort(function(a,b) {
        return b.market_cap_usd - a.market_cap_usd;
      })
    })
  }
  sortName(){
    this.setState({
      masterData: this.state.masterData.sort(function(a, b) {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      })
    })
  }
  componentWillMount() {
    this.getData()
  }
  render() {
    return (
      
      <table className='table-hover'>
        <thead className='buttonBar'>
          <tr>
            <td><button className='btn btn-default' type="button" onClick={() => { this.sortName()}}>Name</button></td>
            <td><button className='btn btn-default' type="button" onClick={() => { this.sortPrice()}}>Price</button></td>
            <td><button className='btn btn-default' type="button" onClick={() => { this.sortMarketCap()}}>Market Cap</button></td>
          </tr>
        </thead>
          {
            this.state.masterData.map((listValue, i) => {
              return <tbody key={i} className='parent'>
                        <tr>
                          <td className='child'>{listValue.name + ' (' + listValue.symbol + ')' }</td>
                          <td className='child'>{listValue.price_usd}</td>
                          <td className='child'>{listValue.market_cap_usd}</td>
                        </tr>
                      </tbody>
            })
          }
      </table>
    );
  }
}

// class Search extends Component {
//   doSearch() {
//     fetch('https://api.cryptonator.com/api/ticker/').then((res) => res.json()).then((json) => {
      
//     });  
//   }
//   render() {
//     return <input className='search' type="text" ref="searchInput" placeholder="Search Name" value={this.props.query} onChange={this.doSearch}/>
//   }
// }

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    fetch('https://api.cryptonator.com/api/full/' + this.state.value + '-usd').then((res) => res.json()).then((json) => console.log(json));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='search'>
        <label>
          Search:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default App;
