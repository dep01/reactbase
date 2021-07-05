var childOne = '';
var childTwo = '';
var childThree = '';
var childFour = '';
function genmodel(fileJson, name) {
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
  listKey.map((val) => {
    var str = '';
    if (val.data == null) {
      str = `\tobjectData.${val.name} = data.${val.name}??null;\n`;
    } else if (Array.isArray(val.data)) {
      str = `\tobjectData.${val.name} = listOf${val.name}(data.${val.name}??[]);\n`;
    } else if (typeof val.data == 'object') {
      str = `\tobjectData.${val.name} = objectOf${val.name}(data.${val.name}??[]);\n`;
    } else {
      str = `\tobjectData.${val.name} = data.${val.name}??null;\n`;
    }
    forObject += str;
  });
  console.log(`
// HOW TO IMPORT ?
// const Convert = require('location/${name}.js'); 
// OR
// import Convert from 'location/${name}.js'
// HOW TO USE?
// FOR OBJECT
// const data = Convert.objectOf${name}(data)
// FOR ARRAY
// const data = Convert.listOf${name}(data)
  const modelOfData${name} = 
  {${listKey.map((val) => {
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
    return `\n\t${val.name}:${dataType}`;
  })}
  }
  function listOf${name}(data = []){
    var listData = [modelOfData${name}];
    listData =[];
    try {
        data.map((val) => {
          var object = {${listKey.map((val) => {
            var str = '';
            if (val.data == null) {
              str = `\n\t\t${val.name}:val.${val.name}??null`;
            } else if (Array.isArray(val.data)) {
              str = `\n\t\t${val.name}:listOf${val.name}(val.${val.name}??[])`;
            } else if (typeof val.data == 'object') {
              str = `\n\t\t${val.name}:objectOf${val.name}(val.${val.name}??null)`;
            } else {
              str = `\n\t\t${val.name}:val.${val.name}??null`;
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
  function objectOf${name}(data = null){
    var objectData = modelOfData${name};
    if (data == null) {
    return null;
  };
    try {
       ${forObject}
      } catch (error) {
        console.log(error);
      }
      return objectData;
  }
  module.exports ={
      listOf${name}:listOf${name},
      objectOf${name}:objectOf${name},
  }
${childOne}
${childTwo}
${childThree}
${childFour}
Copy this model and make file ${name}.js under folder src/model
  `);
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
  listKey.map((val) => {
    var str = '';
    if (val.data == null) {
      str = `\tobjectData.${val.name} = data.${val.name}??null;\n`;
    } else if (Array.isArray(val.data)) {
      str = `\tobjectData.${val.name} = listOf${val.name}(data.${val.name}??[]);\n`;
    } else if (typeof val.data == 'object') {
      str = `\tobjectData.${val.name} = objectOf${val.name}(data.${val.name}??null);\n`;
    } else {
      str = `\tobjectData.${val.name} = data.${val.name}??null;\n`;
    }
    forObject += str;
  });
  childOne += `
    const modelOfData${name} = 
    {${listKey.map((val) => {
      const dataType =
        val.type == 'string'
          ? "''"
          : val.type == 'boolean'
          ? false
          : val.type == 'null'
          ? null
          : val.type == 'number'
          ? 0
          : Array.isArray(val.data)
          ? `[modelOfData${val.name}]`
          : `modelOfData${val.name}`;
      return `\n\t${val.name}:${dataType}`;
    })}
    }`;

  if (Array.isArray(data)) {
    childOne += `\n\tfunction listOf${name}(data = []){
            var listData = [modelOfData${name}];
            listData =[];
            try {
                data.map((val) => {
                  var object = {${listKey.map((val) => {
                    var str = '';
                    if (val.data == null) {
                      str = `\n\t\t${val.name}:val.${val.name}??null`;
                    } else if (Array.isArray(val.data)) {
                      str = `\n\t\t${val.name}:listOf${val.name}(val.${val.name}??[])`;
                    } else if (typeof val.data == 'object') {
                      str = `\n\t\t${val.name}:objectOf${val.name}(val.${val.name}??null)`;
                    } else {
                      str = `\n\t\t${val.name}:val.${val.name}??null`;
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
    childOne += `\n\tfunction objectOf${name}(data = null){
            var objectData = modelOfData${name};
            if (data == null) {
    return null;
  };
            try {
               ${forObject}
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
  console.log(data);
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
  listKey.map((val) => {
    var str = '';
    if (val.data == null) {
      str = `\tobjectData.${val.name} = data.${val.name}??null;\n`;
    } else if (Array.isArray(val.data)) {
      str = `\tobjectData.${val.name} = listOf${val.name}(data.${val.name}??[]);\n`;
    } else if (typeof val.data == 'object') {
      str = `\tobjectData.${val.name} = objectOf${val.name}(data.${val.name}??[]);\n`;
    } else {
      str = `\tobjectData.${val.name} = data.${val.name}??null;\n`;
    }
    forObject += str;
  });
  childTwo += `
    const modelOfData${name} = 
    {${listKey.map((val) => {
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
      return `\n\t${val.name}:${dataType}`;
    })}
    }`;

  if (Array.isArray(data)) {
    childTwo += `\n\tfunction listOf${name}(data = []){
            var listData = [modelOfData${name}];
            listData =[];
            try {
                data.map((val) => {
                  var object = {${listKey.map((val) => {
                    var str = '';
                    if (val.data == null) {
                      str = `\n\t\t${val.name}:val.${val.name}??null`;
                    } else if (Array.isArray(val.data)) {
                      str = `\n\t\t${val.name}:listOf${val.name}(val.${val.name}??[])`;
                    } else if (typeof val.data == 'object') {
                      str = `\n\t\t${val.name}:objectOf${val.name}(val.${val.name}??null)`;
                    } else {
                      str = `\n\t\t${val.name}:val.${val.name}??null`;
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
    childTwo += `\n\tfunction objectOf${name}(data = null){
            var objectData = modelOfData${name};
            if (data == null) {
    return null;
  };
            try {
               ${forObject}
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
  console.log(data);
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
  listKey.map((val) => {
    var str = '';
    if (val.data == null) {
      str = `\tobjectData.${val.name} = data.${val.name}??null;\n`;
    } else if (Array.isArray(val.data)) {
      str = `\tobjectData.${val.name} = listOf${val.name}(data.${val.name}??[]);\n`;
    } else if (typeof val.data == 'object') {
      str = `\tobjectData.${val.name} = objectOf${val.name}(data.${val.name}??[]);\n`;
    } else {
      str = `\tobjectData.${val.name} = data.${val.name}??null;\n`;
    }
    forObject += str;
  });
  childThree += `
    const modelOfData${name} = 
    {${listKey.map((val) => {
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
      return `\n\t${val.name}:${dataType}`;
    })}
    }`;

  if (Array.isArray(data)) {
    childThree += `\n\tfunction listOf${name}(data = []){
            var listData = [modelOfData${name}];
            listData =[];
            try {
                data.map((val) => {
                  var object = {${listKey.map((val) => {
                    var str = '';
                    if (val.data == null) {
                      str = `\n\t\t${val.name}:val.${val.name}??null`;
                    } else if (Array.isArray(val.data)) {
                      str = `\n\t\t${val.name}:listOf${val.name}(val.${val.name}??[])`;
                    } else if (typeof val.data == 'object') {
                      str = `\n\t\t${val.name}:objectOf${val.name}(val.${val.name}??null)`;
                    } else {
                      str = `\n\t\t${val.name}:val.${val.name}??null`;
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
    childThree += `\n\tfunction objectOf${name}(data = null){
            var objectData = modelOfData${name};
            if (data == null) {
    return null;
  };
            try {
               ${forObject}
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
  console.log(data);
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
  listKey.map((val) => {
    var str = `\tobjectData.${val.name} = data.${val.name}??null;\n`;

    forObject += str;
  });
  childFour += `
    const modelOfData${name} = 
    {${listKey.map((val) => {
      const dataType =
        val.type == 'string'
          ? "''"
          : val.type == 'null'
          ? null
          : val.type == 'boolean'
          ? false
          : val.type == 'number'
          ? 0
          : Array.isArray(val.type)
          ? `[]`
          : `{}`;
      return `\n\t${val.name}:${dataType}`;
    })}
    }`;

  if (Array.isArray(data)) {
    childFour += `\n\tfunction listOf${name}(data = []){
            var listData = [modelOfData${name}];
            listData =[];
            try {
                data.map((val) => {
                  var object = {${listKey.map((val) => {
                    var str = `\n\t\t${val.name}:val.${val.name}??null`;

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
    childFour += `\n\tfunction objectOf${name}(data = null){
            var objectData = modelOfData${name};
            if (data == null) {
    return null;
  };
            try {
               ${forObject}
              } catch (error) {
                console.log(error);
              }
              return objectData;
          }`;
  }
}
module.exports = {genmodel};
