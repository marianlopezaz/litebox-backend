"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addMovie = addMovie;
exports.getMovies = getMovies;

var _movie = _interopRequireDefault(require("../../models/movie"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function addMovie(_x, _x2) {
  return _addMovie.apply(this, arguments);
}

function _addMovie() {
  _addMovie = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(userId, movie) {
    var newMovie;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _movie["default"].create({
              name: movie.name,
              user: userId
            });

          case 3:
            newMovie = _context.sent;
            return _context.abrupt("return", newMovie);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _addMovie.apply(this, arguments);
}

function getMovies() {
  return _getMovies.apply(this, arguments);
}

function _getMovies() {
  _getMovies = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var movies;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _movie["default"].find();

          case 2:
            movies = _context2.sent;
            return _context2.abrupt("return", movies);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getMovies.apply(this, arguments);
}