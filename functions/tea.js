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
    return await rockset.queryLambdas.executeQueryLambdaByTag('drinks', 'Tea', 'latest').then(data => {
      var _data$results;

      return {
        statusCode: 200,
        body: JSON.stringify((_data$results = data.results) !== null && _data$results !== void 0 ? _data$results : [])
      };
    }).catch();
  } else {
    var _event$body;

    return await rockset.documents.addDocuments('drinks', 'Tea', {
      data: [JSON.parse((_event$body = event.body) !== null && _event$body !== void 0 ? _event$body : '')]
    }).then(data => {
      var _data$data;

      return {
        statusCode: 200,
        body: JSON.stringify((_data$data = data === null || data === void 0 ? void 0 : data.data) !== null && _data$data !== void 0 ? _data$data : [])
      };
    }).catch();
  }
};

exports.handler = handler;