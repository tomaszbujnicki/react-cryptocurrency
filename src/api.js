import axios from 'axios';
import settings from './data/settings';

const API_ROOT = 'https://api.coingecko.com/api/v3/coins/';

const GET = {
  coinList: (page = 1) =>
    axios.get(
      API_ROOT +
        `markets?vs_currency=${settings.currency}&order=market_cap_desc&per_page=100&sparkline=true&page=${page}`
    ),
  coinDetails: (id) => axios.get(API_ROOT + id),
  coinChart: (id) =>
    axios.get(
      `${API_ROOT}${id}/market_chart?vs_currency=${settings.currency}&days=7&interval=hourly`
    ),
  coinTickers: (id) => axios.get(API_ROOT + id + '/tickers'),
};

export default GET;
