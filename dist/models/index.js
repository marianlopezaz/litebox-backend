"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.connectDb = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _user = _interopRequireDefault(require("./user"));

var _movie = _interopRequireDefault(require("./movie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var models = {
  User: _user["default"],
  Movie: _movie["default"]
};

var connectDb = function connectDb() {
  return _mongoose["default"].connect(process.env.DATABASE_URL);
};

exports.connectDb = connectDb;
var _default = models;
exports["default"] = _default;