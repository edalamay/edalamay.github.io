/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/warcraftlogs-api.js":
/*!******************************************!*\
  !*** ./resources/js/warcraftlogs-api.js ***!
  \******************************************/
/***/ (() => {

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// WCL API
//===========================================

//--------
// v1
//--------
function WCL_API() {
  var url = '/js/reportData_1.json';
  var percentArray = [];
  function pullData(data) {
    var currentPage = data.current_page,
      lastPage = data.last_page,
      fightData = data.data;
    function addDataToArray(fight, x) {
      var pulls = fight.fights,
        startTime = fight.startTime,
        innerArray = [];
      pulls.map(function (pull) {
        if (pull.name == "Scalecommander Sarkareth") {
          var pullTime = startTime + pull.startTime,
            fTime = new Date(pullTime).toLocaleString();
          var bossHp = pull.bossPercentage,
            bossHpRounded = bossHp.toFixed(1);
          innerArray.push(bossHpRounded);
        }
      });
      console.log("report ".concat(x, ": ").concat(innerArray));
      percentArray = innerArray.concat(percentArray);
    }
    // iterate through first report page
    fightData.map(function (fight) {
      addDataToArray(fight);
    });
    // iterate through all the other report pages
    var _loop = function _loop(x) {
      var url = "/js/reportData_".concat(x, ".json");
      fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        var innerFightData = data.data.reportData.reports.data;
        innerFightData.map(function (fight) {
          addDataToArray(fight, x);
        });
      });
      console.log("Report ".concat(x, ": ").concat(percentArray.length));
    };
    for (var x = 2; x <= lastPage; x++) {
      _loop(x);
    }
  }
  fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    pullData(data.data.reportData.reports);
    // Get array length for x-axis labels
    var arrayLength = Array.from({
      length: percentArray.length
    }, function (_, i) {
      return i + 1;
    });
    // Create line chart w/ api data
    var ctx = document.getElementById('wcl_chart');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: arrayLength,
        datasets: [{
          label: 'HP',
          data: percentArray,
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          tooltip: {
            callback: {
              afterTitle: function afterTitle(context) {
                return '%';
              }
            },
            labelPointStyle: function labelPointStyle(context) {
              return {
                pointStyle: 'triangle',
                rotation: 0
              };
            }
          }
        }
      }
    });
  });
}
// WCL_API();

//--------
// v2
//--------

// Data for chart title & subtitle - manually update this during prog?
var activeBoss = 'Scalecommander Sarkareth',
  activeRaid = 'Aberrus, the Shadowed Crucible';
function unixRounding(value) {
  value = value.toString(); // convert to string
  value = value.slice(0, -3); // drop last 3 digits (1/1000s)
  value = parseInt(value); // back to integer
  return value;
}
function timeCompare(time1, time2) {
  var unixHours = 12 * 60 * 60; // 12 hours in seconds
  if (time1 - time2 < unixHours) {
    return true; // reports are duplicates
  } else {
    return false; // reports are unique
  }
}
function fetchMetaData() {
  return _fetchMetaData.apply(this, arguments);
}
function _fetchMetaData() {
  _fetchMetaData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var allData, morePagesAvailable, currentPage, raidDay, addDataToArray, _loop2;
    return _regeneratorRuntime().wrap(function _callee$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          addDataToArray = function _addDataToArray(fight) {
            var pulls = fight.fights,
              startTime = fight.startTime,
              innerArray = [],
              // array of pulls from a single log
              innerRaidDay = []; // array denoting the last pull of a night from a single log
            pulls.map(function (pull, i) {
              if (pull.name == activeBoss) {
                var bossHp = pull.bossPercentage,
                  bossHpRounded = bossHp.toFixed(1); // get boss hp, round to single decimal
                innerArray.push(bossHpRounded); // add boss % to single report array
                if (i + 1 === pulls.length) {
                  // If this is the last pull of a report, set value to 100 to denote the end of the raid day
                  innerRaidDay.push(100);
                } else {
                  // if not the last pull, set value to 0, so we don't get anything on the graph
                  innerRaidDay.push(0);
                }
              }
            });
            // Push array data into parent array - this puts everything in chronological order
            allData = innerArray.concat(allData);
            raidDay = innerRaidDay.concat(raidDay);
          };
          allData = []; // setting up array for boss % per pull
          morePagesAvailable = true;
          currentPage = 1;
          raidDay = []; // setting up array to group pulls by raid day 
          // Grab data from WCL, only 250 pulls per page, so we have to loop through multiple pages
          _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
            var response, data, innerFightData;
            return _regeneratorRuntime().wrap(function _loop2$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch("/js/reportData_".concat(currentPage, ".json"));
                case 2:
                  response = _context.sent;
                  _context.next = 5;
                  return response.json();
                case 5:
                  data = _context.sent;
                  innerFightData = data.data.reportData.reports.data;
                  morePagesAvailable = data.data.reportData.reports.has_more_pages;
                  innerFightData.map(function (fight, i) {
                    // addDataToArray(fight)
                    if (innerFightData[i - 1]) {
                      var currentReport = innerFightData[i].startTime,
                        crRound = unixRounding(currentReport),
                        prevReport = innerFightData[i - 1].startTime,
                        prRound = unixRounding(prevReport),
                        areReportsDuplicates = timeCompare(prRound, crRound);
                      if (areReportsDuplicates == false) {
                        addDataToArray(fight);
                      }
                    } else {
                      addDataToArray(fight);
                    }
                  });
                  currentPage++;
                case 10:
                case "end":
                  return _context.stop();
              }
            }, _loop2);
          });
        case 6:
          if (!morePagesAvailable) {
            _context2.next = 10;
            break;
          }
          return _context2.delegateYield(_loop2(), "t0", 8);
        case 8:
          _context2.next = 6;
          break;
        case 10:
          return _context2.abrupt("return", [allData, raidDay]);
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee);
  }));
  return _fetchMetaData.apply(this, arguments);
}
var buildChart = fetchMetaData().then(function (result) {
  // Set headings for the chart
  var chartHeading = document.querySelector('.wcl--heading_primary'),
    chartSubheading = document.querySelector('.wcl--heading_secondary');
  chartHeading.innerHTML = activeBoss;
  chartSubheading.innerHTML = "Encounter Progress By Pull Count - Mythic ".concat(activeRaid);

  // grab arrays from our fetch function
  var percentArray = result[0],
    raidDayArray = result[1],
    mapLowestHP = _toConsumableArray(percentArray),
    // clone the percentArray
    pointSizes = [],
    // set up an array to use later
    pointRotation = []; // set up an array to use later

  // This loop is to create the chart to track best pulls
  for (var x = 0; x <= mapLowestHP.length; x++) {
    // If current % is smaller than next value, set the next value to match, essentially making a flat line
    if (mapLowestHP[x] < mapLowestHP[x + 1]) {
      mapLowestHP[x + 1] = mapLowestHP[x];
    }
    // If current % is smaller than previous, make a large point 
    if (mapLowestHP[x] < mapLowestHP[x - 1]) {
      pointSizes.push(3.5);
      pointRotation.push(45);
    } else {
      // if not, make small point
      pointSizes.push(0.1);
      pointRotation.push(0);
    }
  }
  // create a new array for our x-axis label, just counts from 1 to the length of the parent array
  var arrayLength = Array.from({
    length: percentArray.length
  }, function (_, i) {
    return i + 1;
  });
  console.log(arrayLength.length);

  // Create line chart w/ api data
  var ctx = document.getElementById('wcl_chart');
  new Chart(ctx, {
    data: {
      labels: arrayLength,
      datasets: [{
        // First chart is a line, charting *every* pull %
        type: 'line',
        data: percentArray,
        borderDash: [10, 5],
        borderWidth: 1,
        borderColor: 'rgba(52, 131, 236, 0.60)',
        pointRadius: 0,
        label: 'This Pull'
      }, {
        // second chart is a line charting all *best* pulls, tracking actual progression
        type: 'line',
        data: mapLowestHP,
        borderWidth: 2,
        borderColor: '#3483ec',
        pointStyle: 'rect',
        pointRadius: pointSizes,
        // dynamic point size based on previous logic
        pointRotation: pointRotation,
        // dynamic point rotation based on previous logic
        pointBackgroundColor: 'rgb(52, 131, 236)',
        pointHoverRadius: 7,
        pointHoverBorderColor: 'white',
        label: 'Best Pull'
      }, {
        // third chart is a bar, tracking raid days. Displays a line on the last pull of a raid night, breaking progression into columns per raid day
        type: 'bar',
        data: raidDayArray,
        barThickness: 0.25,
        backgroundColor: 'rgba(52, 131, 236, 1)'
      }]
    },
    options: {
      responsive: true,
      aspectRatio: 1 | 3,
      maintainAspectRatio: false,
      interaction: {
        // allows mouseover anywhere to trigger the closest tooltip
        intersect: false,
        mode: 'index'
      },
      scales: {
        x: {
          ticks: {
            // stepSize: 5,
            // maxTicksLimit: 50,
            color: 'rgba(255 255 255 / 0.6)'
          },
          grid: {
            color: 'rgba(255 255 255 / 0)'
            // color: (context) => {
            // 	if (context.tick) {
            // 		if (context.tick.value === 0) {
            // 			return 'rgba(255 255 255 / 0.2)'
            // 		} else {
            // 			return 'rgba(255 255 255 / 0)'
            // 		}
            // 	}
            // }
          }
        },

        y: {
          ticks: {
            stepSize: 20,
            color: 'rgba(255 255 255 / 0.6)',
            callback: function callback(value) {
              return "".concat(value, "%"); //add % to y-axis labels
            }
          },

          grid: {
            color: 'rgba(255 255 255 / 0.2)'
          }
        }
      },
      plugins: {
        tooltip: {
          // modify the tooltips
          callbacks: {
            title: function title(context) {
              return "Pull #".concat(context[0].label);
            },
            label: function label(context) {
              // set tooltip value for only our first two charts
              var i = context.dataIndex,
                value = context.dataset.data[i];
              if (value < 100 && value > 0) {
                return "".concat(context.dataset.label, ": ").concat(value, "%");
              } else {
                return '';
              }
            }
          }
        },
        legend: {
          display: false
        }
      }
    }
  });
});

/***/ }),

/***/ "./resources/scss/app.scss":
/*!*********************************!*\
  !*** ./resources/scss/app.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/docs/js/warcraftlogs-api": 0,
/******/ 			"docs/css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcommit"] = self["webpackChunkcommit"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["docs/css/app"], () => (__webpack_require__("./resources/js/warcraftlogs-api.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["docs/css/app"], () => (__webpack_require__("./resources/scss/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;