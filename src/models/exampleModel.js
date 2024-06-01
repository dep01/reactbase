// HOW TO IMPORT ?
// const Convert = require('location/exampleModel.js');
// OR
// import Convert from 'location/exampleModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOfexampleModel(data)
// FOR ARRAY
// const data = Convert.listOfexampleModel(data)
const modelOfDataexampleModel = {
  id: 0,
  first_name: '',
  last_name: '',
  parent: [modelOfDataparent],
  dddaaa: [],
  address: modelOfDataaddress,
  child: null,
};
function listOfexampleModel(data = []) {
  let listData = [modelOfDataexampleModel];
  listData = [];
  try {
    for (let obj of data) {
      let object = {
        id: obj.id ?? null,
        first_name: obj.first_name ?? null,
        last_name: obj.last_name ?? null,
        parent: listOfparent(obj.parent ?? []),
        dddaaa: obj.dddaaa ?? [],
        address: objectOfaddress(obj.address ?? null),
        child: obj.child ?? null,
      };
      listData.push(object);
    }
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOfexampleModel(data = null) {
  var objectData = modelOfDataexampleModel;
  if (data == null) {
    return null;
  }
  try {
    objectData.id = data.id ?? null;
    objectData.first_name = data.first_name ?? null;
    objectData.last_name = data.last_name ?? null;
    objectData.parent = listOfparent(data.parent ?? []);
    objectData.dddaaa = data.dddaaa ?? [];
    objectData.address = objectOfaddress(data.address ?? null);
    objectData.child = data.child ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOfexampleModel: listOfexampleModel,
  objectOfexampleModel: objectOfexampleModel,
};

const modelOfDataparent = {
  name: '',
  status: '',
};
function listOfparent(data = []) {
  var listData = [modelOfDataparent];
  listData = [];
  try {
    data.map(val => {
      var object = {
        name: val.name ?? null,
        status: val.status ?? null,
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
const modelOfDataaddress = {
  road: '',
  number: 0,
};
function objectOfaddress(data = null) {
  var objectData = modelOfDataaddress;
  if (data == null) {
    return null;
  }
  try {
    objectData.road = data.road ?? null;
    objectData.number = data.number ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
