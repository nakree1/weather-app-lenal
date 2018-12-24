function* countGenerator(num = 1) {
  let counter = num;
  while (true) {
    yield counter++;
  }
}

function getIdGenerator() {
  const gen = countGenerator(+localStorage.getItem('counter'));
  return function() {
    const id = gen.next().value;
    localStorage.setItem('counter', id + 1);
    console.log('Generated new id: ' + id);
    return id;
  };
}

const getId = getIdGenerator();

export default getId;
