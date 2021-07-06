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
              console.log(error);
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
              console.log(error);
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
async function genmodel(fileJson, name) {
  var data = null;
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
// const Convert = require('location/${name}.js'); 
// OR
// import Convert from 'location/${name}.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOf${name}(data)
// FOR ARRAY
// const data = Convert.listOf${name}(data)
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
};
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
    console.log(error);
  }
  return listData;
}
function objectOf${name}(data = null) {
  var objectData = modelOfData${name};
  if (data == null) {
    return null;
  }
  try {${forObject}
  } catch (error) {
    console.log(error);
  }
  return objectData;
}
module.exports = {
  listOf${name}: listOf${name},
  objectOf${name}: objectOf${name},
};
${childOne}
${childTwo}
${childThree}
${childFour}
  `;
  console.log('generating file model...');
  await writeFile(
    './src/model',
    name,
    strFile,
    `file model saved to directory src/model/${name}.js`,
  );
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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
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
    console.log(error);
  }
  return objectData;
}`;
  }
}
async function genview(name) {
  const dir = `./src/view/${name}`;
  console.log('generating view...');
  const strView = `import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {view} from '@risingstack/react-easy-state';
import {sys_colors, sys_styles,sys_font} from '../../utils/constants';
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
      <View style={styles.container}>
        <Text style={styles.titleText}>This is ${name} page</Text>
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: sys_colors.primary,
  },
  titleText: {
    fontSize: 15,
    color: sys_colors.text.white,
    fontFamily: sys_font.primary[600]
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
module.exports = {genmodel, genview};
