import React, { Component } from 'react';
import SearchInput /*, {createFilter}*/ from 'react-search-input'
import './App.css';
// fetch('https://api.cryptonator.com/api/full/btc-usd').then((res) => res.json()).then((json) => console.log(json));

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
      masterData: [
        {
            "id": "bitcoin", 
            "name": "Bitcoin", 
            "symbol": "BTC", 
            "rank": "1", 
            "price_usd": "4084.34", 
            "price_btc": "1.0", 
            "24h_volume_usd": "2470180000.0", 
            "market_cap_usd": "67607977912.0", 
            "available_supply": "16552975.0", 
            "total_supply": "16552975.0", 
            "percent_change_1h": "-1.61", 
            "percent_change_24h": "-11.05", 
            "percent_change_7d": "-15.96", 
            "last_updated": "1504905878"
        }, 
        {
            "id": "ethereum", 
            "name": "Ethereum", 
            "symbol": "ETH", 
            "rank": "2", 
            "price_usd": "287.098", 
            "price_btc": "0.0686602", 
            "24h_volume_usd": "1021580000.0", 
            "market_cap_usd": "27132673485.0", 
            "available_supply": "94506661.0", 
            "total_supply": "94506661.0", 
            "percent_change_1h": "-1.17", 
            "percent_change_24h": "-12.77", 
            "percent_change_7d": "-25.83", 
            "last_updated": "1504905906"
        }, 
        {
            "id": "bitcoin-cash", 
            "name": "Bitcoin Cash", 
            "symbol": "BCH", 
            "rank": "3", 
            "price_usd": "562.609", 
            "price_btc": "0.134549", 
            "24h_volume_usd": "768161000.0", 
            "market_cap_usd": "9321545021.0", 
            "available_supply": "16568425.0", 
            "total_supply": "16568425.0", 
            "percent_change_1h": "-1.54", 
            "percent_change_24h": "-13.68", 
            "percent_change_7d": "-9.78", 
            "last_updated": "1504905915"
        }, 
        {
            "id": "ripple", 
            "name": "Ripple", 
            "symbol": "XRP", 
            "rank": "4", 
            "price_usd": "0.206707", 
            "price_btc": "0.00004943", 
            "24h_volume_usd": "143168000.0", 
            "market_cap_usd": "7925940524.0", 
            "available_supply": "38343841883.0", 
            "total_supply": "99994523265.0", 
            "percent_change_1h": "-0.57", 
            "percent_change_24h": "-7.56", 
            "percent_change_7d": "-16.96", 
            "last_updated": "1504905842"
        }, 
        {
            "id": "litecoin", 
            "name": "Litecoin", 
            "symbol": "LTC", 
            "rank": "5", 
            "price_usd": "64.3852", 
            "price_btc": "0.0153979", 
            "24h_volume_usd": "828116000.0", 
            "market_cap_usd": "3402389689.0", 
            "available_supply": "52844282.0", 
            "total_supply": "52844282.0", 
            "percent_change_1h": "-1.99", 
            "percent_change_24h": "-18.13", 
            "percent_change_7d": "-24.33", 
            "last_updated": "1504905845"
        }, 
        {
            "id": "dash", 
            "name": "Dash", 
            "symbol": "DASH", 
            "rank": "6", 
            "price_usd": "319.622", 
            "price_btc": "0.0764383", 
            "24h_volume_usd": "58853900.0", 
            "market_cap_usd": "2411794292.0", 
            "available_supply": "7545771.0", 
            "total_supply": "7545771.0", 
            "percent_change_1h": "-0.76", 
            "percent_change_24h": "-6.37", 
            "percent_change_7d": "-17.76", 
            "last_updated": "1504905848"
        }, 
        {
            "id": "nem", 
            "name": "NEM", 
            "symbol": "XEM", 
            "rank": "7", 
            "price_usd": "0.262239", 
            "price_btc": "0.00006272", 
            "24h_volume_usd": "6350280.0", 
            "market_cap_usd": "2360151000.0", 
            "available_supply": "8999999999.0", 
            "total_supply": "8999999999.0", 
            "percent_change_1h": "1.55", 
            "percent_change_24h": "-11.18", 
            "percent_change_7d": "-20.01", 
            "last_updated": "1504905859"
        }, 
        {
            "id": "monero", 
            "name": "Monero", 
            "symbol": "XMR", 
            "rank": "8", 
            "price_usd": "114.277", 
            "price_btc": "0.0273297", 
            "24h_volume_usd": "162401000.0", 
            "market_cap_usd": "1720435652.0", 
            "available_supply": "15054960.0", 
            "total_supply": "15054960.0", 
            "percent_change_1h": "-0.22", 
            "percent_change_24h": "-4.77", 
            "percent_change_7d": "-19.58", 
            "last_updated": "1504905851"
        }, 
        {
            "id": "iota", 
            "name": "IOTA", 
            "symbol": "MIOTA", 
            "rank": "9", 
            "price_usd": "0.514989", 
            "price_btc": "0.00012316", 
            "24h_volume_usd": "44618800.0", 
            "market_cap_usd": "1431427521.0", 
            "available_supply": "2779530283.0", 
            "total_supply": "2779530283.0", 
            "percent_change_1h": "1.57", 
            "percent_change_24h": "-19.87", 
            "percent_change_7d": "-35.51", 
            "last_updated": "1504905897"
        }, 
        {
            "id": "ethereum-classic", 
            "name": "Ethereum Classic", 
            "symbol": "ETC", 
            "rank": "10", 
            "price_usd": "14.8228", 
            "price_btc": "0.00354489", 
            "24h_volume_usd": "257109000.0", 
            "market_cap_usd": "1413003169.0", 
            "available_supply": "95326333.0", 
            "total_supply": "95326333.0", 
            "percent_change_1h": "-1.09", 
            "percent_change_24h": "-17.32", 
            "percent_change_7d": "-30.21", 
            "last_updated": "1504905876"
        }]
    }
  }
  componentDidUpdate() {
    this.sortPrice()
  }
  getData() {
    fetch('https://api.coinmarketcap.com/v1/ticker/').then((res) => res.json()).then((json) => {
      this.setState({masterData: json})
    });
  }
  sortPrice(){ 
    this.getData()
    this.setState({
          masterData: this.state.masterData.sort(function(a, b) {
          return b.price_usd - a.price_usd;
        })
    })
  }
  sortName(){
    this.getData() 
    this.setState({
      masterData: this.state.masterData.sort(function(a, b) {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      })
    })
  }
  render() {

    return (
      <div>
        <div className='buttonBar'>
          <button type="button" onClick={() => { this.sortPrice()}}>Price</button>
          <button type="button" onClick={() => { this.sortName()}}>Name</button>
        </div>
        <ul>
          {
            this.state.masterData.map((listValue, i) => {
              return <li key={i}>{listValue.name + ' ' + listValue.price_usd}</li>
            })
          }
        </ul>
      </div>
    );
  }
}

class Search extends Component {
  doSearch() {
    fetch('https://api.coinmarketcap.com/v1/ticker/').then((res) => res.json()).then((json) => {
      console.log(json)
      testData = json;
    });  
  }
  render() {
    return <input type="text" ref="searchInput" placeholder="Search Name" value={this.props.query} onChange={this.doSearch}/>
  }
}

export default App;
