// THIS MODEL IS EXAMPLE FROM MODEL GENERATOR
const modelOfDataexampleModel = {
  id: 0,
  first_name: '',
  last_name: '',
};
function listOfexampleModel(data = []) {
  var listData = [modelOfDataexampleModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
        id: val.id ?? null,
        first_name: val.first_name ?? null,
        last_name: val.last_name ?? null,
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
  }
  return objectData;
}
module.exports = {
  listOfexampleModel: listOfexampleModel,
  objectOfexampleModel: objectOfexampleModel,
};
