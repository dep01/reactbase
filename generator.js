const fs = require('fs');

var childOne = '';
var childTwo = '';
var childThree = '';
var childFour = '';
async function writeFile(dir, name, strFile, message) {
  fs.access(dir, function (error) {
    if (error) {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, 0744);
      fs.access(`${dir}/${name}.js`, function (error) {
        if (error) {
          fs.writeFile(`${dir}/${name}.js`, strFile, function (error) {
            if (error) {
              console.log(error.message);
            } else {
              console.log(message);
            }
          });
        } else {
          console.log(
            'file name is exists, change the file name to another one',
          );
        }
      });
    } else {
      fs.access(`${dir}/${name}.js`, function (error) {
        if (error) {
          fs.writeFile(`${dir}/${name}.js`, strFile, function (error) {
            if (error) {
              console.log(error.message);
            } else {
              console.log(message);
            }
          });
        } else {
          console.log(
            'file name is exists, change the file name to another one',
          );
        }
      });
    }
  });
  return true;
}
async function model(fileJson, name,withProvider) {
  var data = null;
  var named = name +'Model';
  try {
    data = require(`./src/data/${fileJson}`);
  } catch (error) {
    if (fileJson == '') {
      return false;
    } else {
      console.log(
        'error: please put your JSON on src/data or make sure your file is exists',
      );
    }
    return false;
  }
  console.log('generating model...');
  var object = {};
  var listKey = [];
  if (!Array.isArray(data)) {
    object = data;
  } else {
    object = data[0];
  }
  Object.keys(object).map((key, index) => {
    const x = {
      name: key,
      type: object[key] == null ? 'null' : typeof object[key],
      data: object[key],
    };
    if (object[key] != null) {
      if (Array.isArray(object[key]) || typeof object[key] == 'object') {
        genmodelChildOne(object[key], key);
      }
    }
    listKey.push(x);
  });
  var forObject = '';
  console.log('generating object data...');
  listKey.map((val) => {
    var str = '';
    if (val.data == null) {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    } else if (Array.isArray(val.data)) {
      str = `\n\t\tobjectData.${val.name} = listOf${val.name}(data.${val.name} ?? []);`;
    } else if (typeof val.data == 'object') {
      str = `\n\t\tobjectData.${val.name} = objectOf${val.name}(data.${val.name} ?? null);`;
    } else {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    }
    forObject += str;
  });
  console.log('generating list data...');
  var strFile = `// HOW TO IMPORT ?
// const Convert = require('location/${named}.js'); 
// OR
// import Convert from 'location/${named}.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOf${named}(data)
// FOR ARRAY
// const data = Convert.listOf${named}(data)
const modelOfData${named} = {${listKey.map((val) => {
    const dataType =
      val.type == 'string'
        ? "''"
        : val.type == 'null'
        ? null
        : val.type == 'boolean'
        ? false
        : val.type == 'number'
        ? 0
        : Array.isArray(val.data)
        ? `[modelOfData${val.name}]`
        : `modelOfData${val.name}`;
    return `\n\t${val.name}: ${dataType}`;
  })}
};
function listOf${named}(data = []) {
  var listData = [modelOfData${named}];
  listData = [];
  try {
    data.map((val) => {
      var object = {${listKey.map((val) => {
        var str = '';
        if (val.data == null) {
          str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
        } else if (Array.isArray(val.data)) {
          str = `\n\t\t\t\t${val.name}: listOf${val.name}(val.${val.name} ?? [])`;
        } else if (typeof val.data == 'object') {
          str = `\n\t\t\t\t${val.name}: objectOf${val.name}(val.${val.name} ?? null)`;
        } else {
          str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
        }
        return str;
      })}
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}
function objectOf${named}(data = null) {
  var objectData = modelOfData${named};
  if (data == null) {
    return null;
  }
  try {${forObject}
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}
module.exports = {
  listOf${named}: listOf${named},
  objectOf${named}: objectOf${named},
};
${childOne}
${childTwo}
${childThree}
${childFour}
  `;
  console.log('generating file model...');
  await writeFile(
    './src/model',
    named,
    strFile,
    `file model saved to directory src/model/${named}.js`,
  );
  if(withProvider){
    await providers(name);
  }
}

function genmodelChildOne(data, name) {
  var object = {};
  var listKey = [];
  if (!Array.isArray(data)) {
    object = data;
  } else {
    object = data[0];
  }
  Object.keys(object).map((key, index) => {
    const x = {
      name: key,
      type: object[key] == null ? 'null' : typeof object[key],
      data: object[key],
    };
    if (object[key] != null) {
      if (Array.isArray(object[key]) || typeof object[key] == 'object') {
        genmodelChildTwo(object[key], key);
      }
    }
    listKey.push(x);
  });
  var forObject = '';
  console.log('generating child model...');
  listKey.map((val) => {
    var str = '';
    if (val.data == null) {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    } else if (Array.isArray(val.data)) {
      str = `\n\t\tobjectData.${val.name} = listOf${val.name}(data.${val.name} ?? []);`;
    } else if (typeof val.data == 'object') {
      str = `\n\t\tobjectData.${val.name} = objectOf${val.name}(data.${val.name} ?? null);`;
    } else {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    }
    forObject += str;
  });

  childOne += `
const modelOfData${name} = {${listKey.map((val) => {
    const dataType =
      val.type == 'string'
        ? "''"
        : val.type == 'null'
        ? null
        : val.type == 'boolean'
        ? false
        : val.type == 'number'
        ? 0
        : Array.isArray(val.data)
        ? `[modelOfData${val.name}]`
        : `modelOfData${val.name}`;
    return `\n\t${val.name}: ${dataType}`;
  })}
};`;

  if (Array.isArray(data)) {
    childOne += `
function listOf${name}(data = []) {
  var listData = [modelOfData${name}];
  listData = [];
  try {
    data.map((val) => {
      var object = {${listKey.map((val) => {
        var str = '';
        if (val.data == null) {
          str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
        } else if (Array.isArray(val.data)) {
          str = `\n\t\t\t\t${val.name}: listOf${val.name}(val.${val.name} ?? [])`;
        } else if (typeof val.data == 'object') {
          str = `\n\t\t\t\t${val.name}: objectOf${val.name}(val.${val.name} ?? null)`;
        } else {
          str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
        }
        return str;
      })}
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}`;
  } else {
    childOne += `
function objectOf${name}(data = null) {
  var objectData = modelOfData${name};
  if (data == null) {
    return null;
  }
  try {${forObject}
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}`;
  }
}

function genmodelChildTwo(data, name) {
  var object = {};
  var listKey = [];
  if (!Array.isArray(data)) {
    object = data;
  } else {
    object = data[0];
  }
  Object.keys(object).map((key, index) => {
    const x = {
      name: key,
      type: object[key] == null ? 'null' : typeof object[key],
      data: object[key],
    };
    if (object[key] != null) {
      if (Array.isArray(object[key]) || typeof object[key] == 'object') {
        genmodelChildThree(object[key], key);
      }
    }
    listKey.push(x);
  });
  var forObject = '';
  console.log('generating child model...');
  listKey.map((val) => {
    var str = '';
    if (val.data == null) {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    } else if (Array.isArray(val.data)) {
      str = `\n\t\tobjectData.${val.name} = listOf${val.name}(data.${val.name} ?? []);`;
    } else if (typeof val.data == 'object') {
      str = `\n\t\tobjectData.${val.name} = objectOf${val.name}(data.${val.name} ?? null);`;
    } else {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    }
    forObject += str;
  });

  childTwo += `
const modelOfData${name} = {${listKey.map((val) => {
    const dataType =
      val.type == 'string'
        ? "''"
        : val.type == 'null'
        ? null
        : val.type == 'boolean'
        ? false
        : val.type == 'number'
        ? 0
        : Array.isArray(val.data)
        ? `[modelOfData${val.name}]`
        : `modelOfData${val.name}`;
    return `\n\t${val.name}: ${dataType}`;
  })}
}`;

  if (Array.isArray(data)) {
    childTwo += `
function listOf${name}(data = []) {
  var listData = [modelOfData${name}];
  listData = [];
  try {
    data.map((val) => {
      var object = {${listKey.map((val) => {
        var str = '';
        if (val.data == null) {
          str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
        } else if (Array.isArray(val.data)) {
          str = `\n\t\t\t\t${val.name}: listOf${val.name}(val.${val.name} ?? [])`;
        } else if (typeof val.data == 'object') {
          str = `\n\t\t\t\t${val.name}: objectOf${val.name}(val.${val.name} ?? null)`;
        } else {
          str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
        }
        return str;
      })}
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
};`;
  } else {
    childTwo += `
function objectOf${name}(data = null) {
  var objectData = modelOfData${name};
  if (data == null) {
    return null;
  };
  try {${forObject}
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}`;
  }
}
function genmodelChildThree(data, name) {
  var object = {};
  var listKey = [];
  if (!Array.isArray(data)) {
    object = data;
  } else {
    object = data[0];
  }
  Object.keys(object).map((key, index) => {
    const x = {
      name: key,
      type: object[key] == null ? 'null' : typeof object[key],
      data: object[key],
    };
    if (object[key] != null) {
      if (Array.isArray(object[key]) || typeof object[key] == 'object') {
        genmodelChildFour(object[key], key);
      }
    }
    listKey.push(x);
  });
  var forObject = '';
  console.log('generating child model...');
  listKey.map((val) => {
    var str = '';
    if (val.data == null) {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    } else if (Array.isArray(val.data)) {
      str = `\n\t\tobjectData.${val.name} = listOf${val.name}(data.${val.name} ?? []);`;
    } else if (typeof val.data == 'object') {
      str = `\n\t\tobjectData.${val.name} = objectOf${val.name}(data.${val.name} ?? null);`;
    } else {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    }
    forObject += str;
  });

  childThree += `
const modelOfData${name} = {${listKey.map((val) => {
    const dataType =
      val.type == 'string'
        ? "''"
        : val.type == 'null'
        ? null
        : val.type == 'boolean'
        ? false
        : val.type == 'number'
        ? 0
        : Array.isArray(val.data)
        ? `[modelOfData${val.name}]`
        : `modelOfData${val.name}`;
    return `\n\t${val.name}: ${dataType}`;
  })}
};`;

  if (Array.isArray(data)) {
    childThree += `
function listOf${name}(data = []) {
  var listData = [modelOfData${name}];
  listData = [];
  try {
    data.map((val) => {
      var object = {${listKey.map((val) => {
        var str = '';
        if (val.data == null) {
          str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
        } else if (Array.isArray(val.data)) {
          str = `\n\t\t\t\t${val.name}: listOf${val.name}(val.${val.name} ?? [])`;
        } else if (typeof val.data == 'object') {
          str = `\n\t\t\t\t${val.name}: objectOf${val.name}(val.${val.name} ?? null)`;
        } else {
          str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
        }
        return str;
      })}
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}`;
  } else {
    childThree += `
function objectOf${name}(data = null) {
  var objectData = modelOfData${name};
  if (data == null) {
    return null;
  };
  try {${forObject}
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}`;
  }
}
function genmodelChildFour(data, name) {
  var object = {};
  var listKey = [];
  if (!Array.isArray(data)) {
    object = data;
  } else {
    object = data[0];
  }
  Object.keys(object).map((key, index) => {
    const x = {
      name: key,
      type: object[key] == null ? 'null' : typeof object[key],
      data: object[key],
    };
    listKey.push(x);
  });
  var forObject = '';
  console.log('generating child model...');
  listKey.map((val) => {
    const str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;

    forObject += str;
  });

  childFour += `
const modelOfData${name} = {${listKey.map((val) => {
    const dataType =
      val.type == 'string'
        ? "''"
        : val.type == 'null'
        ? null
        : val.type == 'boolean'
        ? false
        : val.type == 'number'
        ? 0
        : Array.isArray(val.data)
        ? `[]`
        : `{}`;
    return `\n\t${val.name}: ${dataType}`;
  })}
};`;

  if (Array.isArray(data)) {
    childFour += `
function listOf${name}(data = []) {
  var listData = [modelOfData${name}];
  listData = [];
  try {
    data.map((val) => {
      var object = {${listKey.map((val) => {
        const str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;

        return str;
      })}
      };
      listData.push(object);
    });
  } catch (error) {
    console.log(error.message);
  }
  return listData;
}`;
  } else {
    childFour += `
function objectOf${name}(data = null) {
  var objectData = modelOfData${name};
  if (data == null) {
    return null;
  };
  try {${forObject}
  } catch (error) {
    console.log(error.message);
  }
  return objectData;
}`;
  }
}
async function view(name) {
  const dir = `./src/view/${name}`;
  console.log('generating view...');
  const strView = `import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {view} from '@risingstack/react-easy-state';
import {sys_colors, sys_styles, sys_text_styles} from '../../utils/constants';
import * as store from './store';
export default view(({navigation}) => {
  useEffect(() => {
    store.initialized();
    return () => {
      store.cleanUp();
    };
  }, [navigation, store]);
  return (
    <View style={sys_styles.scaffold}>
      <View style={sys_styles.container_center_screen}>
        <Text style={styles.titleText}>This is ${name} page</Text>
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  titleText: {
    ...sys_text_styles.header_medium_black,
  }
});
  `;
  await writeFile(dir, 'index', strView, 'view successfully generated..');
  console.log('generating store...');
  const strStore = `import {store} from '@risingstack/react-easy-state';
export const state = store({
  loading: false,
});
export async function initialized() {
  state.loading = true;
}
export function cleanUp() {
  state.loading = false;
}
`;
  writeFile(dir, `store`, strStore, 'store successfully generated..');
}
async function providers(name){
  console.log('generating provider...');
  const named = name + 'Provider';
  const str = `import Convert from '../model/${name}Model.js';
import {sys_get,sys_post,sys_put,sys_del} from '../utils/api_client';

const uri = '${name}/'
export async function getAll(){
  try {
    const response = await sys_get({endpoint: uri});
    return Convert.listOf${name}Model(response.callback);
  } catch (error) {
    
  }
}
export async function getById(id){
  try {
    const response = await sys_get({endpoint: uri+id});
    return Convert.objectOf${name}Model(response.callback);
  } catch (error) {
    
  }
}
export async function addData(data){
  try {
    const response = await sys_post({endpoint: uri,body:data});
    return response.callback;
  } catch (error) {
    
  }
}
export async function updateData(data){
  try {
    const response = await sys_put({endpoint: uri,body:data});
    return response.callback;
  } catch (error) {
    
  }
}
export async function deleteData(id){
  try {
    const response = await sys_del({endpoint: uri+id});
    return response.callback;
  } catch (error) {
    
  }
}

  `;
  await writeFile(
    './src/providers',
    named,
    str,
    `file provider saved to directory src/providers/${named}.js`,
  );
}
module.exports = {model, view};
