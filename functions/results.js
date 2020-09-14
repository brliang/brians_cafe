"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = void 0;

var _rockset = _interopRequireDefault(require("rockset"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const handler = async event => {
  const rockset = (0, _rockset.default)('GHLfQ2fiLz5NGgh6Wb6aIKT0vlb0PvIdBQkc5LaVeKZarR4J8Ulx5B2wxwXW2KOj', 'https://api.rs2.usw2.rockset.com');

  if (event.httpMethod === 'GET') {
    return await rockset.queryLambdas.executeQueryLambdaByTag('drinks', 'CoffeeAndTea', 'latest').then(data => {
      var _data$results;

      return {
        statusCode: 200,
        body: JSON.stringify((_data$results = data.results) !== null && _data$results !== void 0 ? _data$results : [])
      };
    }).catch();
  }
};

exports.handler = handler;