// HOW TO IMPORT ?
// const Convert = require('location/testModel.js'); 
// OR
// import Convert from 'location/testModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOftestModel(data)
// FOR ARRAY
// const data = Convert.listOftestModel(data)
const modelOfDatatestModel = {
	id: 0,
	name: ''
};
function listOftestModel(data = []) {
  var listData = [modelOfDatatestModel];
  listData = [];
  try {
    data.map((val) => {
      var object = {
				id: val.id ?? null,
				name: val.name ?? null
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOftestModel(data = null) {
  var objectData = modelOfDatatestModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.id = data.id ?? null;
		objectData.name = data.name ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOftestModel: listOftestModel,
  objectOftestModel: objectOftestModel,
};




  