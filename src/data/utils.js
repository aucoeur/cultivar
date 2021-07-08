import * as data from './veggieData.json';

const veggieTypes = Object.keys(data);

// Since our data is keyed JSON (eg. veggie name is key),
// to make it simpler we add name to the obj
const getVeggies = () => Object.entries(data).map((obj) => {
  const [key, item] = obj;
  item.name = key;
  return item;
});

const veggieObjs = getVeggies();

export {
  veggieTypes,
  veggieObjs
};
