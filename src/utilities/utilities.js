import coinList from '../data/coinList';

export function createCoinLinkname(coinName) {
  const reg0 = /τ/g;
  const reg = /[ ._]/g;
  const reg2 = /[^a-zA-Z0-9-]/g;

  coinName = coinName.replace(reg0, 't-');
  coinName = coinName.replace(reg, '-');
  coinName = coinName.replace(reg2, '');
  coinName = coinName.toLowerCase();

  const link = '/coins/' + coinName;

  return link;
}

export function getCoinLinkname(coinId) {
  const index = coinList.findIndex((x) => x.id === coinId);
  return index !== -1 ? coinList[index].name : null;
}

export function getCoinId(coinLinkName) {
  const index = coinList.findIndex((x) => x.name === coinLinkName);
  return index !== -1 ? coinList[index].id : null;
}

export function removeTags(str) {
  if (str === null || str === '') return false;
  else str = str.toString();

  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace(/(<([^>]+)>)/gi, '');
}
