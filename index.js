function callback(item){
  return item
};

function myEach(collection,callback){
  if (!Array.isArray(collection) || !collection.length) {
    let newArray = Object.values(collection);
    newArray.forEach(item => callback(item));
    return collection;
  } else {
    return collection.map(item => callback(item))
  }
};

function myMap (collection,callback){
  if (!Array.isArray(collection) || !collection.length) {
    let newArray = Object.values(collection);
    let iteratedArray = newArray.map(item => callback(item));
    return iteratedArray;
  } else {
    return collection.map(item => callback(item))
  }
};

function reducer(acc, val){
  return (acc + (val * 3));
}

function myReduce (collection,reducer,acc){
  if (!Array.isArray(collection) && acc == null){ 
    let newArray = Object.values(collection);
    let iteratedArray = newArray.reduce(reducer);
    return iteratedArray;
  } else if (!Array.isArray(collection) && acc !== null){
    let newArray = Object.values(collection);
    let iteratedArray = newArray.reduce(reducer,acc);
    return iteratedArray;
  } else if (acc == null) {
      return collection.reduce(reducer)
  } else {
      return collection.reduce(reducer,acc)
  }
};

function findTheTruth(collection,search){
  return collection.find(search)
};

function myFind(collection,predicate){
  if (!Array.isArray(collection) || !collection.length) {
    let newArray = Object.values(collection);
    return findTheTruth(newArray,predicate);
  } else {
    return findTheTruth(collection,predicate)
  }
};

function findEverything(collection,search){
  return collection.filter(search)
}

function myFilter(collection,predicate){
  if (!Array.isArray(collection) || !collection.length) {
    let newArray = Object.values(collection);
    return findEverything(newArray,predicate);
  } else {
    return findEverything(collection,predicate)
  }
};

function mySize(collection){
  if (!Array.isArray(collection) || !collection.length) {
    let newArray = Object.values(collection);
    return newArray.length;
  } else {
    return collection.length;
  }
};

function myFirst(array,n = 1){
  const slicedArray = array.slice(0, n);
  if (n == 1){
    return slicedArray[0];
  } else {
  return slicedArray;
  }
};

function myLast(array,n = 1){
  const slicedArray = array.slice(-n);
  if (n == 1){
    return slicedArray[0];
  } else {
  return slicedArray;
  }
};

function myKeys(object){
  return Object.keys(object)
};

function myValues(object){
  return Object.values(object)
};
