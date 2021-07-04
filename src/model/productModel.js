const modelOfdataProduct = {
  id: '',
  code: '',
  name: '',
  price: [modelOfDataPrice],
};
const modelOfDataPrice = {
  location: '',
  price: 0,
};
function listOfPriceModel(data = []) {
  var listData = [modelOfDataPrice];
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
function listOfProductModel(data = []) {
  var listData = [modelOfdataProduct];
  listData = [];
  try {
    data.map((val) => {
      var object = {
        id: val.id ?? null,
        code: val.code ?? null,
        name: val.name ?? null,
        price: listOfPriceModel(val.price ?? []),
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error);
  }
  return listData;
}
function objectOfProductModel(data = null) {
  var objectData = modelOfdataProduct;
  try {
    objectData.id = data.id ?? null;
    objectData.name = data.name ?? null;
    objectData.code = data.code ?? null;
    objectData.price = listOfPriceModel(data.price ?? []);
  } catch (error) {
    console.log(error);
  }
  return objectData;
}
module.exports = {
  listOfProductModel: listOfProductModel,
  objectOfProductModel: objectOfProductModel,
};
