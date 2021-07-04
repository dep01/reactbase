// HOW TO IMPORT ?
// const Convert = require('location/ProductModel.js');
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOfProductModel(data)
// FOR ARRAY
// const data = Convert.listOfProductModel(data)
const modelOfDataProductModel = {
  id: '',
  code: '',
  name: '',
  price: [modelOfDataprice],
};
function listOfProductModel(data = []) {
  var listData = [modelOfDataProductModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
        id: val.id ?? null,
        code: val.code ?? null,
        name: val.name ?? null,
        price: listOfprice(val.price ?? []),
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error);
  }
  return listData;
}
function objectOfProductModel(data = null) {
  var objectData = modelOfDataProductModel;
  if (data == null) {
    return null;
  }
  try {
    objectData.id = data.id ?? null;
    objectData.code = data.code ?? null;
    objectData.name = data.name ?? null;
    objectData.price = listOfprice(data.price ?? []);
  } catch (error) {
    console.log(error);
  }
  return objectData;
}
module.exports = {
  listOfProductModel: listOfProductModel,
  objectOfProductModel: objectOfProductModel,
};

const modelOfDataprice = {
  location: '',
  price: null,
};
function listOfprice(data = []) {
  var listData = [modelOfDataprice];
  listData = [];
  try {
    data.map((val) => {
      var object = {
        location: val.location ?? null,
        price: val.price ?? null,
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error);
  }
  return listData;
}
