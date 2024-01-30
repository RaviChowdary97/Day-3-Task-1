function areObjectsEqual(objA, objB) {
  const sortedJSONA = JSON.stringify(objA, Object.keys(objA).sort());
  const sortedJSONB = JSON.stringify(objB, Object.keys(objB).sort());

  return sortedJSONA === sortedJSONB;
}

const obj1 = {
  name: "person1",
  age: 5,
};

const obj2 = {
  age: 5,
  name: "person1",
};

console.log(areObjectsEqual(obj1, obj2));
