// HOW TO IMPORT ?
// const Convert = require('location/usersModel.js'); 
// OR
// import Convert from 'location/usersModel.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOfusersModel(data)
// FOR ARRAY
// const data = Convert.listOfusersModel(data)
const modelOfDatausersModel = {
	id: 0,
	name: '',
	username: '',
	email: '',
	address: modelOfDataaddress,
	phone: '',
	website: '',
	company: modelOfDatacompany
};
function listOfusersModel(data = []) {
  let listData = [modelOfDatausersModel];
  listData = [];
  try {
    for (let val of data) {
      let object = {
				id: val.id ?? null,
				name: val.name ?? null,
				username: val.username ?? null,
				email: val.email ?? null,
				address: objectOfaddress(val.address ?? null),
				phone: val.phone ?? null,
				website: val.website ?? null,
				company: objectOfcompany(val.company ?? null)
      };
      listData.push(object);
    };
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOfusersModel(data = null) {
  let objectData = modelOfDatausersModel;
  if (data == null) {
    return null;
  }
  try {
		objectData.id = data.id ?? null;
		objectData.name = data.name ?? null;
		objectData.username = data.username ?? null;
		objectData.email = data.email ?? null;
		objectData.address = objectOfaddress(data.address ?? null);
		objectData.phone = data.phone ?? null;
		objectData.website = data.website ?? null;
		objectData.company = objectOfcompany(data.company ?? null);
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOfusersModel: listOfusersModel,
  objectOfusersModel: objectOfusersModel,
};

const modelOfDataaddress = {
	street: '',
	suite: '',
	city: '',
	zipcode: '',
	geo: modelOfDatageo
};
function objectOfaddress(data = null) {
  let objectData = modelOfDataaddress;
  if (data == null) {
    return null;
  }
  try {
		objectData.street = data.street ?? null;
		objectData.suite = data.suite ?? null;
		objectData.city = data.city ?? null;
		objectData.zipcode = data.zipcode ?? null;
		objectData.geo = objectOfgeo(data.geo ?? null);
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
const modelOfDatacompany = {
	name: '',
	catchPhrase: '',
	bs: ''
};
function objectOfcompany(data = null) {
  let objectData = modelOfDatacompany;
  if (data == null) {
    return null;
  }
  try {
		objectData.name = data.name ?? null;
		objectData.catchPhrase = data.catchPhrase ?? null;
		objectData.bs = data.bs ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}

const modelOfDatageo = {
	lat: '',
	lng: ''
}
function objectOfgeo(data = null) {
  let objectData = modelOfDatageo;
  if (data == null) {
    return null;
  };
  try {
		objectData.lat = data.lat ?? null;
		objectData.lng = data.lng ?? null;
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}


  