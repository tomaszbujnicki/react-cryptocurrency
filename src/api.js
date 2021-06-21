import axios from 'axios';

const API_ROOT = 'https://api.coingecko.com/api/v3/coins/';

const PATHS = {
  coinList:
    'markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false&page=',
  coinDetails: '',
  coinTickers: 'bitcoin/tickers',
};

const GET = {
  coinList: (page = 1) => axios.get(API_ROOT + PATHS.coinList + page),
  coinDetails: (id) => axios.get(API_ROOT + PATHS.coinDetails + id),
};

export default GET;
