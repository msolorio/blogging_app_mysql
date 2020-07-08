const { request } = require("express");

module.exports = function(requestBody, updateParams) {
  return updateParams.reduce((updateObject, param) => {
    if (requestBody[param]) updateObject[param] = requestBody[param];

    return updateObject;
  }, {});
};
