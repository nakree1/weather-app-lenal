function* countGenerator(num = 1) {
  let counter = num;
  while (true) {
    yield counter++;
  }
}

function getIdGenerator() {
  const gen = countGenerator();
  return function() {
    const id = gen.next().value;
    console.log('Generated new id: ' + id);
    return id;
  };
}

const getId = getIdGenerator();

export default getId;
