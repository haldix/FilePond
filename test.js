obja = {
  name: 'Hal',
  sex: 'male',
  age: 59,
};

objb = {
  race: 'white',
};

obja = { ...obja, ...objb };
console.log(obja);
