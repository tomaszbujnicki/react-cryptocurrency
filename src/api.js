import axios from 'axios';

const API_ROOT = 'https://api.coingecko.com/api/v3/coins/';

const GET = {
  coinList: (page = 1) =>
    axios.get(
      API_ROOT +
        'markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=true&page=' +
        page
    ),
  coinDetails: (id) => axios.get(API_ROOT + id),
  coinChart: (id) =>
    axios.get(
      API_ROOT + id + '/market_chart?vs_currency=usd&days=7&interval=hourly'
    ),
  coinTickers: (id) => axios.get(API_ROOT + id + '/tickers'),
};

export default GET;
