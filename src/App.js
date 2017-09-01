import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input'
import './App.css';

var testData = {
  "ticker": {
    "base":"BTC",
    "target":"USD",
    "price":"4839.48433903",
    "volume":"24278.53858312",
    "change":"10.92142259",
    "markets": [{
      "market":"ACX",
      "price":"4840.00000000",
      "volume":0.4539
    }, {
      "market":"Bitstamp",
      "price":"4844.87000000",
      "volume":13202.40132924
    }, {
      "market":"Bittrex",
      "price":"4812.98800000",
      "volume":3650.33597832
    }, {
      "market":"C-Cex",
      "price":"5025.11100000",
      "volume":18.85251417
    }, {
      "market":"Cex.io",
      "price":"4910.19780000",
      "volume":767.06133153
    }, {
      "market":"Exmo",
      "price":"4815.00000000",
      "volume":236.84897942
    }, {
      "market":"Hitbtc",
      "price":"4815.82000000",
      "volume":1552.61
    }, { 
      "market":"Kraken",
      "price":"4843.79000000",
      "volume":4337.69617209
    }, {
      "market":"Livecoin",
      "price":"4819.00000000",
      "volume":477.77752886
    }, {
      "market":"Nix-e",
      "price":"3950.00000000",
      "volume":0.0837443
    }, {
      "market":"YoBit",
      "price":"4886.00000000",
      "volume":34.41710519
    }
  ]},
  "timestamp":1504288201,
  "success":true,
  "error":""
} 

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Crypt</h2>
          <SearchInput className="search-input" onChange={this.searchUpdated} />
        </div>
        <div className="table">
          <Table />
        </div>
      </div>
    );
  }
}

class Table extends Component {

  render() {
    return (
      <ul>
        {testData.ticker.markets.map( (listValue, i) => {
            return <li key={i}>{listValue.market + ' ' + listValue.price}</li>
        })}
      </ul>
    );
  }
}

class exchangeUnit extends Component {

  render() {
    return (
        <li>
          {this.lirops.prop}
        </li>
    )
  }
}
export default App;
