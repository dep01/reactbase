const fs = require('fs');

let childOne = '';
let childTwo = '';
let childThree = '';
let childFour = '';

function checkDataType({type = '', name = '', isSingle = false, data}) {
  // type is string set default ''
  if (type == 'string') {
    return "''";
  }

  // type is null set default null
  if (type == 'null') {
    return null;
  }

  // type is boolean set default false
  if (type == 'boolean') {
    return false;
  }

  // type is number set default 0
  if (type == 'number') {
    return 0;
  }

  // type is array model set default [arrayModel]
  if (Array.isArray(data) && !isSingle) {
    return `[modelOfData${name}]`;
  }

  // type is array set default []
  if (Array.isArray(data) && isSingle) {
    return '[]';
  }

  return `modelOfData${name}`;
}

function checkDataTypeLastChild({type = '', name = '', data}) {
  // type is string set default ''
  if (type == 'string') {
    return "''";
  }

  // type is null set default null
  if (type == 'null') {
    return null;
  }

  // type is boolean set default false
  if (type == 'boolean') {
    return false;
  }

  // type is number set default 0
  if (type == 'number') {
    return 0;
  }

  // type is array set default []
  if (Array.isArray(data)) {
    return '[]';
  }

  return `{}`;
}

async function writeFile(dir, name, strFile, message) {
  fs.access(dir, function (error) {
    if (error) {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, '0744');
      }
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
async function model(fileJson, name, withProvider) {
  let data = null;
  let named = name + 'Model';
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
  let object = {};
  let listKey = [];
  if (!Array.isArray(data)) {
    object = data;
  } else {
    object = data[0];
  }

  for (let key of Object.keys(object)) {
    const x = {
      name: key,
      type: object[key] == null ? 'null' : typeof object[key],
      data: object[key],
      isSingle: false,
    };
    if (object[key] != null) {
      if (Array.isArray(object[key]) || typeof object[key] === 'object') {
        if (Array.isArray(object[key])) {
          if (
            !Array.isArray(object[key][0]) &&
            typeof object[key][0] !== 'object'
          ) {
            x.isSingle = true;
          } else {
            genmodelChildOne(object[key], key);
          }
        } else {
          genmodelChildOne(object[key], key);
        }
      }
    }
    listKey.push(x);
  }
  let forObject = '';
  console.log('generating object data...');
  listKey.map(val => {
    let str = '';
    if (val.data == null) {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    } else if (Array.isArray(val.data) && !val.isSingle) {
      str = `\n\t\tobjectData.${val.name} = listOf${val.name}(data.${val.name} ?? []);`;
    } else if (Array.isArray(val.data) && val.isSingle) {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? [];`;
    } else if (typeof val.data === 'object') {
      str = `\n\t\tobjectData.${val.name} = objectOf${val.name}(data.${val.name} ?? null);`;
    } else {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    }
    forObject += str;
    return true;
  });
  console.log('generating list data...');
  let strFile = `// HOW TO IMPORT ?
// const Convert = require('location/${named}.js'); 
// OR
// import Convert from 'location/${named}.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOf${named}(data)
// FOR ARRAY
// const data = Convert.listOf${named}(data)
const modelOfData${named} = {${listKey.map(val => {
    const dataType = checkDataType({
      type: val.type,
      data: val.data,
      isSingle: val.isSingle,
      name: val.name,
    });
    return `\n\t${val.name}: ${dataType}`;
  })}
};
function listOf${named}(data = []) {
  let listData = [modelOfData${named}];
  if (data == null || data ==[]){
    return []
  }
  for (let val of data) {
    let object = {${listKey.map(val => {
      let str = '';
      if (val.data == null) {
        str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
      } else if (Array.isArray(val.data) && !val.isSingle) {
        str = `\n\t\t\t\t${val.name}: listOf${val.name}(val.${val.name} ?? [])`;
      } else if (Array.isArray(val.data) && val.isSingle) {
        str = `\n\t\t\t\t${val.name}: val.${val.name} ?? []`;
      } else if (typeof val.data === 'object') {
        str = `\n\t\t\t\t${val.name}: objectOf${val.name}(val.${val.name} ?? null)`;
      } else {
        str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
      }
      return str;
    })}
    };
    listData.push(object);
  };
  return listData;
}
function objectOf${named}(data = null) {
  let objectData = modelOfData${named};
  if (data == null) {
    return null;
  }
  ${forObject}
  
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
    './src/models',
    named,
    strFile,
    `file model saved to directory src/models/${named}.js`,
  );
  if (withProvider) {
    await providers(name);
  }
}

function genmodelChildOne(data, name) {
  let object = {};
  let listKey = [];
  if (!Array.isArray(data)) {
    object = data;
  } else {
    object = data[0];
  }
  for (let key of Object.keys(object)) {
    const x = {
      name: key,
      type: object[key] == null ? 'null' : typeof object[key],
      data: object[key],
      isSingle: false,
    };
    if (object[key] != null) {
      if (Array.isArray(object[key]) || typeof object[key] === 'object') {
        if (Array.isArray(object[key])) {
          if (
            !Array.isArray(object[key][0]) &&
            typeof object[key][0] !== 'object'
          ) {
            x.isSingle = true;
          } else {
            genmodelChildTwo(object[key], key);
          }
        } else {
          genmodelChildTwo(object[key], key);
        }
      }
    }
    listKey.push(x);
  }
  let forObject = '';
  console.log('generating child model...');
  for (let val of listKey) {
    let str = '';
    if (val.data == null) {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    } else if (Array.isArray(val.data) && !val.isSingle) {
      str = `\n\t\tobjectData.${val.name} = listOf${val.name}(data.${val.name} ?? []);`;
    } else if (Array.isArray(val.data) && val.isSingle) {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? [];`;
    } else if (typeof val.data === 'object') {
      str = `\n\t\tobjectData.${val.name} = objectOf${val.name}(data.${val.name} ?? null);`;
    } else {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    }
    forObject += str;
  }

  childOne += `
const modelOfData${name} = {${listKey.map(val => {
    const dataType = checkDataType({
      type: val.type,
      data: val.data,
      isSingle: val.isSingle,
      name: val.name,
    });
    return `\n\t${val.name}: ${dataType}`;
  })}
};`;

  if (Array.isArray(data)) {
    childOne += `
function listOf${name}(data = []) {
  let listData = [modelOfData${name}];
  if (data == null || data ==[]){
    return []
  }
  for(let val of data) {
    let object = {${listKey.map(val => {
      let str = '';
      if (val.data == null) {
        str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
      } else if (Array.isArray(val.data) && !val.isSingle) {
        str = `\n\t\t\t\t${val.name}: listOf${val.name}(val.${val.name} ?? [])`;
      } else if (Array.isArray(val.data) && val.isSingle) {
        str = `\n\t\t\t\t${val.name}: val.${val.name} ?? []`;
      } else if (typeof val.data === 'object') {
        str = `\n\t\t\t\t${val.name}: objectOf${val.name}(val.${val.name} ?? null)`;
      } else {
        str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
      }
      return str;
    })}
    };
    listData.push(object);
  };
  return listData;
}`;
  } else {
    childOne += `
function objectOf${name}(data = null) {
  let objectData = modelOfData${name};
  if (data == null) {
    return null;
  }
  ${forObject}
  
  return objectData;
}`;
  }
}

function genmodelChildTwo(data, name) {
  let object = {};
  let listKey = [];
  if (!Array.isArray(data)) {
    object = data;
  } else {
    object = data[0];
  }
  for (let key of Object.keys(object)) {
    const x = {
      name: key,
      type: object[key] == null ? 'null' : typeof object[key],
      data: object[key],
      isSingle: false,
    };
    if (object[key] != null) {
      if (Array.isArray(object[key]) || typeof object[key] === 'object') {
        if (Array.isArray(object[key])) {
          if (
            !Array.isArray(object[key][0]) &&
            typeof object[key][0] !== 'object'
          ) {
            x.isSingle = true;
          } else {
            genmodelChildThree(object[key], key);
          }
        } else {
          genmodelChildThree(object[key], key);
        }
      }
    }
    listKey.push(x);
  }
  let forObject = '';
  console.log('generating child model...');
  for (let val of listKey) {
    let str = '';
    if (val.data == null) {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    } else if (Array.isArray(val.data) && !val.isSingle) {
      str = `\n\t\tobjectData.${val.name} = listOf${val.name}(data.${val.name} ?? []);`;
    } else if (Array.isArray(val.data) && val.isSingle) {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? [];`;
    } else if (typeof val.data === 'object') {
      str = `\n\t\tobjectData.${val.name} = objectOf${val.name}(data.${val.name} ?? null);`;
    } else {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    }
    forObject += str;
  }

  childTwo += `
const modelOfData${name} = {${listKey.map(val => {
    const dataType = checkDataType({
      type: val.type,
      data: val.data,
      isSingle: val.isSingle,
      name: val.name,
    });
    return `\n\t${val.name}: ${dataType}`;
  })}
}`;

  if (Array.isArray(data)) {
    childTwo += `
function listOf${name}(data = []) {
  let listData = [modelOfData${name}];
  if (data == null || data ==[]){
    return []
  }
  for(let val of data){
    let object = {${listKey.map(val => {
      let str = '';
      if (val.data == null) {
        str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
      } else if (Array.isArray(val.data) && !val.isSingle) {
        str = `\n\t\t\t\t${val.name}: listOf${val.name}(val.${val.name} ?? [])`;
      } else if (Array.isArray(val.data) && val.isSingle) {
        str = `\n\t\t\t\t${val.name}: val.${val.name} ?? []`;
      } else if (typeof val.data === 'object') {
        str = `\n\t\t\t\t${val.name}: objectOf${val.name}(val.${val.name} ?? null)`;
      } else {
        str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
      }
      return str;
    })}
    };
    listData.push(object);
  };
  return listData;
};`;
  } else {
    childTwo += `
function objectOf${name}(data = null) {
  let objectData = modelOfData${name};
  if (data == null) {
    return null;
  };
  ${forObject}
  
  return objectData;
}`;
  }
}
function genmodelChildThree(data, name) {
  let object = {};
  let listKey = [];
  if (!Array.isArray(data)) {
    object = data;
  } else {
    object = data[0];
  }
  for (let key of Object.keys(object)) {
    const x = {
      name: key,
      type: object[key] == null ? 'null' : typeof object[key],
      data: object[key],
      isSingle: false,
    };
    if (object[key] != null) {
      if (Array.isArray(object[key]) || typeof object[key] === 'object') {
        if (Array.isArray(object[key])) {
          if (
            !Array.isArray(object[key][0]) &&
            typeof object[key][0] !== 'object'
          ) {
            x.isSingle = true;
          } else {
            genmodelChildFour(object[key], key);
          }
        } else {
          genmodelChildFour(object[key], key);
        }
      }
    }
    listKey.push(x);
  }
  let forObject = '';
  console.log('generating child model...');
  for (let val of listKey) {
    let str = '';
    if (val.data == null) {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    } else if (Array.isArray(val.data) && !val.isSingle) {
      str = `\n\t\tobjectData.${val.name} = listOf${val.name}(data.${val.name} ?? []);`;
    } else if (Array.isArray(val.data) && val.isSingle) {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? [];`;
    } else if (typeof val.data === 'object') {
      str = `\n\t\tobjectData.${val.name} = objectOf${val.name}(data.${val.name} ?? null);`;
    } else {
      str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;
    }
    forObject += str;
  }

  childThree += `
const modelOfData${name} = {${listKey.map(val => {
    const dataType = checkDataType({
      type: val.type,
      data: val.data,
      isSingle: val.isSingle,
      name: val.name,
    });
    return `\n\t${val.name}: ${dataType}`;
  })}
};`;

  if (Array.isArray(data)) {
    childThree += `
function listOf${name}(data = []) {
  let listData = [modelOfData${name}];
  if (data == null || data ==[]){
    return []
  }
  for(let val of data) {
    let object = {${listKey.map(val => {
      let str = '';
      if (val.data == null) {
        str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
      } else if (Array.isArray(val.data) && !val.isSingle) {
        str = `\n\t\t\t\t${val.name}: listOf${val.name}(val.${val.name} ?? [])`;
      } else if (Array.isArray(val.data) && val.isSingle) {
        str = `\n\t\t\t\t${val.name}: val.${val.name} ?? []`;
      } else if (typeof val.data === 'object') {
        str = `\n\t\t\t\t${val.name}: objectOf${val.name}(val.${val.name} ?? null)`;
      } else {
        str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
      }
      return str;
    })}
    };
    listData.push(object);
  });
  return listData;
}`;
  } else {
    childThree += `
function objectOf${name}(data = null) {
  let objectData = modelOfData${name};
  if (data == null) {
    return null;
  };
  ${forObject}
  
  return objectData;
}`;
  }
}
function genmodelChildFour(data, name) {
  let object = {};
  let listKey = [];
  if (!Array.isArray(data)) {
    object = data;
  } else {
    object = data[0];
  }
  for (let key of Object.keys(object)) {
    const x = {
      name: key,
      type: object[key] == null ? 'null' : typeof object[key],
      data: object[key],
    };
    listKey.push(x);
  }
  let forObject = '';
  console.log('generating child model...');
  for (let val of listKey) {
    const str = `\n\t\tobjectData.${val.name} = data.${val.name} ?? null;`;

    forObject += str;
  }

  childFour += `
const modelOfData${name} = {${listKey.map(val => {
    const dataType = checkDataTypeLastChild({
      type: val.type,
      data: val.data,
      name: val.name,
    });
    return `\n\t${val.name}: ${dataType}`;
  })}
};`;

  if (Array.isArray(data)) {
    childFour += `
function listOf${name}(data = []) {
  let listData = [modelOfData${name}];
  if (data == null || data ==[]){
    return []
  }
  for (let val of data){
    let object = {${listKey.map(val => {
      const str = `\n\t\t\t\t${val.name}: val.${val.name} ?? null`;
      return str;
    })}
    };
    listData.push(object);
  };
  return listData;
}`;
  } else {
    childFour += `
function objectOf${name}(data = null) {
  let objectData = modelOfData${name};
  if (data == null) {
    return null;
  };
  ${forObject}
  
  return objectData;
}`;
  }
}
async function view(name) {
  const dir = `./src/pages/${name}`;
  console.log('generating view...');
  const strView = `import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  baseStyleConstant,
  textStyleConstant,
} from 'rbase-constants/styles_constant';
import {action, useStore, baseState} from './store';

export default ({navigation}) => {
  const state = useStore(state => baseState(state));

  useEffect(() => {
    action.initialize();
    return () => {
      action.cleanUp();
    };
  }, [navigation, action]);
  return (
    <View style={baseStyleConstant.scaffold}>
      <View style={baseStyleConstant.containerCenterScreen}>
        <Text style={styles.titleText}>This is ${name} page</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  titleText: {
    ...textStyleConstant.headerMediumPrimary,
  },
});  
  `;
  await writeFile(dir, 'index', strView, 'view successfully generated..');
  console.log('generating store...');
  const strStore = `import {create} from 'zustand';

// init state
export function baseState(props) {
  return {
    loading: props?.loading ?? false,
  };
}

// create state
export const useStore = create(set => baseState());

// for setter state
export const setter = {
  loading: (value = false) => useStore.setState({loading: value}),
};

// action list
export const action = {
  initialize: () => {},
  cleanUp: () => {
    useStore.setState(baseState());
  },
};  
`;
  writeFile(dir, 'store', strStore, 'store successfully generated..');
}
async function providers(name) {
  console.log('generating provider...');
  const named = name + 'Provider';
  const str = `import {get,post,put,del} from 'rbase-utils/api_client';

const uri = '/${name}'
export async function getAll(){
  const response = await get({endpoint: uri});
  return response;
}
export async function getById(id){
  const response = await get({endpoint: uri+id});
  return response;
}
export async function addData(data){
  const response = await post({endpoint: uri,body:data});
  return response;
}
export async function updateData(data){
  const response = await put({endpoint: uri,body:data});
  return response;
}
export async function deleteData(id){
  const response = await del({endpoint: uri+id});
  return response;
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
