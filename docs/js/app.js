function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e18) { throw _e18; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e19) { didErr = true; err = _e19; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*!
  * Bootstrap v5.3.0 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}(this, function (t) {
  "use strict";

  function e(t) {
    var e = Object.create(null, _defineProperty({}, Symbol.toStringTag, {
      value: "Module"
    }));
    if (t) {
      var _loop = function _loop(_s) {
        if ("default" !== _s) {
          var _i = Object.getOwnPropertyDescriptor(t, _s);
          Object.defineProperty(e, _s, _i.get ? _i : {
            enumerable: !0,
            get: function get() {
              return t[_s];
            }
          });
        }
      };
      for (var _s in t) {
        _loop(_s);
      }
    }
    return e["default"] = t, Object.freeze(e);
  }
  var s = e(t),
    i = new Map(),
    n = {
      set: function set(t, e, s) {
        i.has(t) || i.set(t, new Map());
        var n = i.get(t);
        n.has(e) || 0 === n.size ? n.set(e, s) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(n.keys())[0], "."));
      },
      get: function get(t, e) {
        return i.has(t) && i.get(t).get(e) || null;
      },
      remove: function remove(t, e) {
        if (!i.has(t)) return;
        var s = i.get(t);
        s["delete"](e), 0 === s.size && i["delete"](t);
      }
    },
    o = "transitionend",
    r = function r(t) {
      return t && window.CSS && window.CSS.escape && (t = t.replace(/#([^\s"#']+)/g, function (t, e) {
        return "#".concat(CSS.escape(e));
      })), t;
    },
    a = function a(t) {
      t.dispatchEvent(new Event(o));
    },
    l = function l(t) {
      return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
    },
    c = function c(t) {
      return l(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? document.querySelector(r(t)) : null;
    },
    h = function h(t) {
      if (!l(t) || 0 === t.getClientRects().length) return !1;
      var e = "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        s = t.closest("details:not([open])");
      if (!s) return e;
      if (s !== t) {
        var _e2 = t.closest("summary");
        if (_e2 && _e2.parentNode !== s) return !1;
        if (null === _e2) return !1;
      }
      return e;
    },
    d = function d(t) {
      return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
    },
    u = function u(t) {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        var _e3 = t.getRootNode();
        return _e3 instanceof ShadowRoot ? _e3 : null;
      }
      return t instanceof ShadowRoot ? t : t.parentNode ? u(t.parentNode) : null;
    },
    _ = function _() {},
    g = function g(t) {
      t.offsetHeight;
    },
    f = function f() {
      return window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null;
    },
    m = [],
    p = function p() {
      return "rtl" === document.documentElement.dir;
    },
    b = function b(t) {
      var e;
      e = function e() {
        var e = f();
        if (e) {
          var _s2 = t.NAME,
            _i2 = e.fn[_s2];
          e.fn[_s2] = t.jQueryInterface, e.fn[_s2].Constructor = t, e.fn[_s2].noConflict = function () {
            return e.fn[_s2] = _i2, t.jQueryInterface;
          };
        }
      }, "loading" === document.readyState ? (m.length || document.addEventListener("DOMContentLoaded", function () {
        for (var _i3 = 0, _m = m; _i3 < _m.length; _i3++) {
          var _t2 = _m[_i3];
          _t2();
        }
      }), m.push(e)) : e();
    },
    v = function v(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
      return "function" == typeof t ? t.apply(void 0, _toConsumableArray(e)) : s;
    },
    y = function y(t, e) {
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      if (!s) return void v(t);
      var i = function (t) {
        if (!t) return 0;
        var _window$getComputedSt = window.getComputedStyle(t),
          e = _window$getComputedSt.transitionDuration,
          s = _window$getComputedSt.transitionDelay;
        var i = Number.parseFloat(e),
          n = Number.parseFloat(s);
        return i || n ? (e = e.split(",")[0], s = s.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(s))) : 0;
      }(e) + 5;
      var n = !1;
      var r = function r(_ref) {
        var s = _ref.target;
        s === e && (n = !0, e.removeEventListener(o, r), v(t));
      };
      e.addEventListener(o, r), setTimeout(function () {
        n || a(e);
      }, i);
    },
    w = function w(t, e, s, i) {
      var n = t.length;
      var o = t.indexOf(e);
      return -1 === o ? !s && i ? t[n - 1] : t[0] : (o += s ? 1 : -1, i && (o = (o + n) % n), t[Math.max(0, Math.min(o, n - 1))]);
    },
    A = /[^.]*(?=\..*)\.|.*/,
    E = /\..*/,
    C = /::\d+$/,
    T = {};
  var k = 1;
  var S = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    },
    L = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function O(t, e) {
    return e && "".concat(e, "::").concat(k++) || t.uidEvent || k++;
  }
  function I(t) {
    var e = O(t);
    return t.uidEvent = e, T[e] = T[e] || {}, T[e];
  }
  function D(t, e) {
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    return Object.values(t).find(function (t) {
      return t.callable === e && t.delegationSelector === s;
    });
  }
  function N(t, e, s) {
    var i = "string" == typeof e,
      n = i ? s : e || s;
    var o = j(t);
    return L.has(o) || (o = t), [i, n, o];
  }
  function P(t, e, s, i, n) {
    if ("string" != typeof e || !t) return;
    var _N = N(e, s, i),
      _N2 = _slicedToArray(_N, 3),
      o = _N2[0],
      r = _N2[1],
      a = _N2[2];
    if (e in S) {
      var _t3 = function _t3(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };
      r = _t3(r);
    }
    var l = I(t),
      c = l[a] || (l[a] = {}),
      h = D(c, r, o ? s : null);
    if (h) return void (h.oneOff = h.oneOff && n);
    var d = O(r, e.replace(A, "")),
      u = o ? function (t, e, s) {
        return function i(n) {
          var o = t.querySelectorAll(e);
          for (var _r2 = n.target; _r2 && _r2 !== this; _r2 = _r2.parentNode) {
            var _iterator = _createForOfIteratorHelper(o),
              _step;
            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _a = _step.value;
                if (_a === _r2) return $(n, {
                  delegateTarget: _r2
                }), i.oneOff && F.off(t, n.type, e, s), s.apply(_r2, [n]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        };
      }(t, s, r) : function (t, e) {
        return function s(i) {
          return $(i, {
            delegateTarget: t
          }), s.oneOff && F.off(t, i.type, e), e.apply(t, [i]);
        };
      }(t, r);
    u.delegationSelector = o ? s : null, u.callable = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }
  function x(t, e, s, i, n) {
    var o = D(e[s], i, n);
    o && (t.removeEventListener(s, o, Boolean(n)), delete e[s][o.uidEvent]);
  }
  function M(t, e, s, i) {
    var n = e[s] || {};
    for (var _i4 = 0, _Object$entries = Object.entries(n); _i4 < _Object$entries.length; _i4++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i4], 2),
        _o = _Object$entries$_i[0],
        _r3 = _Object$entries$_i[1];
      _o.includes(i) && x(t, e, s, _r3.callable, _r3.delegationSelector);
    }
  }
  function j(t) {
    return t = t.replace(E, ""), S[t] || t;
  }
  var F = {
    on: function on(t, e, s, i) {
      P(t, e, s, i, !1);
    },
    one: function one(t, e, s, i) {
      P(t, e, s, i, !0);
    },
    off: function off(t, e, s, i) {
      if ("string" != typeof e || !t) return;
      var _N3 = N(e, s, i),
        _N4 = _slicedToArray(_N3, 3),
        n = _N4[0],
        o = _N4[1],
        r = _N4[2],
        a = r !== e,
        l = I(t),
        c = l[r] || {},
        h = e.startsWith(".");
      if (void 0 === o) {
        if (h) for (var _i5 = 0, _Object$keys = Object.keys(l); _i5 < _Object$keys.length; _i5++) {
          var _s3 = _Object$keys[_i5];
          M(t, l, _s3, e.slice(1));
        }
        for (var _i6 = 0, _Object$entries2 = Object.entries(c); _i6 < _Object$entries2.length; _i6++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i6], 2),
            _s4 = _Object$entries2$_i[0],
            _i7 = _Object$entries2$_i[1];
          var _n2 = _s4.replace(C, "");
          a && !e.includes(_n2) || x(t, l, r, _i7.callable, _i7.delegationSelector);
        }
      } else {
        if (!Object.keys(c).length) return;
        x(t, l, r, o, n ? s : null);
      }
    },
    trigger: function trigger(t, e, s) {
      if ("string" != typeof e || !t) return null;
      var i = f();
      var n = null,
        o = !0,
        r = !0,
        a = !1;
      e !== j(e) && i && (n = i.Event(e, s), i(t).trigger(n), o = !n.isPropagationStopped(), r = !n.isImmediatePropagationStopped(), a = n.isDefaultPrevented());
      var l = $(new Event(e, {
        bubbles: o,
        cancelable: !0
      }), s);
      return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && n && n.preventDefault(), l;
    }
  };
  function $(t) {
    var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _loop2 = function _loop2() {
      var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i8], 2),
        s = _Object$entries3$_i[0],
        i = _Object$entries3$_i[1];
      try {
        t[s] = i;
      } catch (e) {
        Object.defineProperty(t, s, {
          configurable: !0,
          get: function get() {
            return i;
          }
        });
      }
    };
    for (var _i8 = 0, _Object$entries3 = Object.entries(e); _i8 < _Object$entries3.length; _i8++) {
      _loop2();
    }
    return t;
  }
  function z(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function H(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-".concat(t.toLowerCase());
    });
  }
  var B = {
    setDataAttribute: function setDataAttribute(t, e, s) {
      t.setAttribute("data-bs-".concat(H(e)), s);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-".concat(H(e)));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {},
        s = Object.keys(t.dataset).filter(function (t) {
          return t.startsWith("bs") && !t.startsWith("bsConfig");
        });
      var _iterator2 = _createForOfIteratorHelper(s),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _i9 = _step2.value;
          var _s5 = _i9.replace(/^bs/, "");
          _s5 = _s5.charAt(0).toLowerCase() + _s5.slice(1, _s5.length), e[_s5] = z(t.dataset[_i9]);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return z(t.getAttribute("data-bs-".concat(H(e))));
    }
  };
  var q = /*#__PURE__*/function () {
    function q() {
      _classCallCheck(this, q);
    }
    _createClass(q, [{
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t;
      }
    }, {
      key: "_mergeConfigObj",
      value: function _mergeConfigObj(t, e) {
        var s = l(e) ? B.getDataAttribute(e, "config") : {};
        return _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, this.constructor.Default), "object" == _typeof(s) ? s : {}), l(e) ? B.getDataAttributes(e) : {}), "object" == _typeof(t) ? t : {});
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.constructor.DefaultType;
        for (var _i10 = 0, _Object$entries4 = Object.entries(e); _i10 < _Object$entries4.length; _i10++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i10], 2),
            _i11 = _Object$entries4$_i[0],
            _n3 = _Object$entries4$_i[1];
          var _e4 = t[_i11],
            _o2 = l(_e4) ? "element" : null == (s = _e4) ? "".concat(s) : Object.prototype.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
          if (!new RegExp(_n3).test(_o2)) throw new TypeError("".concat(this.constructor.NAME.toUpperCase(), ": Option \"").concat(_i11, "\" provided type \"").concat(_o2, "\" but expected type \"").concat(_n3, "\"."));
        }
        var s;
      }
    }], [{
      key: "Default",
      get: function get() {
        return {};
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return {};
      }
    }, {
      key: "NAME",
      get: function get() {
        throw new Error('You have to implement the static method "NAME", for each component!');
      }
    }]);
    return q;
  }();
  var W = /*#__PURE__*/function (_q) {
    _inherits(W, _q);
    var _super = _createSuper(W);
    function W(t, e) {
      var _this;
      _classCallCheck(this, W);
      _this = _super.call(this), (t = c(t)) && (_this._element = t, _this._config = _this._getConfig(e), n.set(_this._element, _this.constructor.DATA_KEY, _assertThisInitialized(_this)));
      return _this;
    }
    _createClass(W, [{
      key: "dispose",
      value: function dispose() {
        n.remove(this._element, this.constructor.DATA_KEY), F.off(this._element, this.constructor.EVENT_KEY);
        var _iterator3 = _createForOfIteratorHelper(Object.getOwnPropertyNames(this)),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _t4 = _step3.value;
            this[_t4] = null;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        y(t, e, s);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return n.get(c(t), this.DATA_KEY);
      }
    }, {
      key: "getOrCreateInstance",
      value: function getOrCreateInstance(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return this.getInstance(t) || new this(t, "object" == _typeof(e) ? e : null);
      }
    }, {
      key: "VERSION",
      get: function get() {
        return "5.3.0";
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return "bs.".concat(this.NAME);
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return ".".concat(this.DATA_KEY);
      }
    }, {
      key: "eventName",
      value: function eventName(t) {
        return "".concat(t).concat(this.EVENT_KEY);
      }
    }]);
    return W;
  }(q);
  var R = function R(t) {
      var e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        var _s6 = t.getAttribute("href");
        if (!_s6 || !_s6.includes("#") && !_s6.startsWith(".")) return null;
        _s6.includes("#") && !_s6.startsWith("#") && (_s6 = "#".concat(_s6.split("#")[1])), e = _s6 && "#" !== _s6 ? _s6.trim() : null;
      }
      return r(e);
    },
    K = {
      find: function find(t) {
        var _ref2;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
        return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
      },
      findOne: function findOne(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
        return Element.prototype.querySelector.call(e, t);
      },
      children: function children(t, e) {
        var _ref3;
        return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(t.children)).filter(function (t) {
          return t.matches(e);
        });
      },
      parents: function parents(t, e) {
        var s = [];
        var i = t.parentNode.closest(e);
        for (; i;) s.push(i), i = i.parentNode.closest(e);
        return s;
      },
      prev: function prev(t, e) {
        var s = t.previousElementSibling;
        for (; s;) {
          if (s.matches(e)) return [s];
          s = s.previousElementSibling;
        }
        return [];
      },
      next: function next(t, e) {
        var s = t.nextElementSibling;
        for (; s;) {
          if (s.matches(e)) return [s];
          s = s.nextElementSibling;
        }
        return [];
      },
      focusableChildren: function focusableChildren(t) {
        var e = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(function (t) {
          return "".concat(t, ":not([tabindex^=\"-\"])");
        }).join(",");
        return this.find(e, t).filter(function (t) {
          return !d(t) && h(t);
        });
      },
      getSelectorFromElement: function getSelectorFromElement(t) {
        var e = R(t);
        return e && K.findOne(e) ? e : null;
      },
      getElementFromSelector: function getElementFromSelector(t) {
        var e = R(t);
        return e ? K.findOne(e) : null;
      },
      getMultipleElementsFromSelector: function getMultipleElementsFromSelector(t) {
        var e = R(t);
        return e ? K.find(e) : [];
      }
    },
    V = function V(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "hide";
      var s = "click.dismiss".concat(t.EVENT_KEY),
        i = t.NAME;
      F.on(document, s, "[data-bs-dismiss=\"".concat(i, "\"]"), function (s) {
        if (["A", "AREA"].includes(this.tagName) && s.preventDefault(), d(this)) return;
        var n = K.getElementFromSelector(this) || this.closest(".".concat(i));
        t.getOrCreateInstance(n)[e]();
      });
    };
  var Q = /*#__PURE__*/function (_W) {
    _inherits(Q, _W);
    var _super2 = _createSuper(Q);
    function Q() {
      _classCallCheck(this, Q);
      return _super2.apply(this, arguments);
    }
    _createClass(Q, [{
      key: "close",
      value: function close() {
        var _this2 = this;
        if (F.trigger(this._element, "close.bs.alert").defaultPrevented) return;
        this._element.classList.remove("show");
        var t = this._element.classList.contains("fade");
        this._queueCallback(function () {
          return _this2._destroyElement();
        }, this._element, t);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement() {
        this._element.remove(), F.trigger(this._element, "closed.bs.alert"), this.dispose();
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Q.getOrCreateInstance(this);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);
    return Q;
  }(W);
  V(Q, "close"), b(Q);
  var X = '[data-bs-toggle="button"]';
  var Y = /*#__PURE__*/function (_W2) {
    _inherits(Y, _W2);
    var _super3 = _createSuper(Y);
    function Y() {
      _classCallCheck(this, Y);
      return _super3.apply(this, arguments);
    }
    _createClass(Y, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "button";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Y.getOrCreateInstance(this);
          "toggle" === t && e[t]();
        });
      }
    }]);
    return Y;
  }(W);
  F.on(document, "click.bs.button.data-api", X, function (t) {
    t.preventDefault();
    var e = t.target.closest(X);
    Y.getOrCreateInstance(e).toggle();
  }), b(Y);
  var U = {
      endCallback: null,
      leftCallback: null,
      rightCallback: null
    },
    G = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)"
    };
  var J = /*#__PURE__*/function (_q2) {
    _inherits(J, _q2);
    var _super4 = _createSuper(J);
    function J(t, e) {
      var _this3;
      _classCallCheck(this, J);
      _this3 = _super4.call(this), _this3._element = t, t && J.isSupported() && (_this3._config = _this3._getConfig(e), _this3._deltaX = 0, _this3._supportPointerEvents = Boolean(window.PointerEvent), _this3._initEvents());
      return _this3;
    }
    _createClass(J, [{
      key: "dispose",
      value: function dispose() {
        F.off(this._element, ".bs.swipe");
      }
    }, {
      key: "_start",
      value: function _start(t) {
        this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : this._deltaX = t.touches[0].clientX;
      }
    }, {
      key: "_end",
      value: function _end(t) {
        this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), v(this._config.endCallback);
      }
    }, {
      key: "_move",
      value: function _move(t) {
        this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this._deltaX);
        if (t <= 40) return;
        var e = t / this._deltaX;
        this._deltaX = 0, e && v(e > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
    }, {
      key: "_initEvents",
      value: function _initEvents() {
        var _this4 = this;
        this._supportPointerEvents ? (F.on(this._element, "pointerdown.bs.swipe", function (t) {
          return _this4._start(t);
        }), F.on(this._element, "pointerup.bs.swipe", function (t) {
          return _this4._end(t);
        }), this._element.classList.add("pointer-event")) : (F.on(this._element, "touchstart.bs.swipe", function (t) {
          return _this4._start(t);
        }), F.on(this._element, "touchmove.bs.swipe", function (t) {
          return _this4._move(t);
        }), F.on(this._element, "touchend.bs.swipe", function (t) {
          return _this4._end(t);
        }));
      }
    }, {
      key: "_eventIsPointerPenTouch",
      value: function _eventIsPointerPenTouch(t) {
        return this._supportPointerEvents && ("pen" === t.pointerType || "touch" === t.pointerType);
      }
    }], [{
      key: "Default",
      get: function get() {
        return U;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return G;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "swipe";
      }
    }, {
      key: "isSupported",
      value: function isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
      }
    }]);
    return J;
  }(q);
  var Z = "next",
    tt = "prev",
    et = "left",
    st = "right",
    it = "slid.bs.carousel",
    nt = "carousel",
    ot = "active",
    rt = {
      ArrowLeft: st,
      ArrowRight: et
    },
    at = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0
    },
    lt = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean"
    };
  var ct = /*#__PURE__*/function (_W3) {
    _inherits(ct, _W3);
    var _super5 = _createSuper(ct);
    function ct(t, e) {
      var _this5;
      _classCallCheck(this, ct);
      _this5 = _super5.call(this, t, e), _this5._interval = null, _this5._activeElement = null, _this5._isSliding = !1, _this5.touchTimeout = null, _this5._swipeHelper = null, _this5._indicatorsElement = K.findOne(".carousel-indicators", _this5._element), _this5._addEventListeners(), _this5._config.ride === nt && _this5.cycle();
      return _this5;
    }
    _createClass(ct, [{
      key: "next",
      value: function next() {
        this._slide(Z);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && h(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._slide(tt);
      }
    }, {
      key: "pause",
      value: function pause() {
        this._isSliding && a(this._element), this._clearInterval();
      }
    }, {
      key: "cycle",
      value: function cycle() {
        var _this6 = this;
        this._clearInterval(), this._updateInterval(), this._interval = setInterval(function () {
          return _this6.nextWhenVisible();
        }, this._config.interval);
      }
    }, {
      key: "_maybeEnableCycle",
      value: function _maybeEnableCycle() {
        var _this7 = this;
        this._config.ride && (this._isSliding ? F.one(this._element, it, function () {
          return _this7.cycle();
        }) : this.cycle());
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this8 = this;
        var e = this._getItems();
        if (t > e.length - 1 || t < 0) return;
        if (this._isSliding) return void F.one(this._element, it, function () {
          return _this8.to(t);
        });
        var s = this._getItemIndex(this._getActive());
        if (s === t) return;
        var i = t > s ? Z : tt;
        this._slide(i, e[t]);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), _get(_getPrototypeOf(ct.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.defaultInterval = t.interval, t;
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this9 = this;
        this._config.keyboard && F.on(this._element, "keydown.bs.carousel", function (t) {
          return _this9._keydown(t);
        }), "hover" === this._config.pause && (F.on(this._element, "mouseenter.bs.carousel", function () {
          return _this9.pause();
        }), F.on(this._element, "mouseleave.bs.carousel", function () {
          return _this9._maybeEnableCycle();
        })), this._config.touch && J.isSupported() && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this10 = this;
        var _iterator4 = _createForOfIteratorHelper(K.find(".carousel-item img", this._element)),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _t5 = _step4.value;
            F.on(_t5, "dragstart.bs.carousel", function (t) {
              return t.preventDefault();
            });
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        var t = {
          leftCallback: function leftCallback() {
            return _this10._slide(_this10._directionToOrder(et));
          },
          rightCallback: function rightCallback() {
            return _this10._slide(_this10._directionToOrder(st));
          },
          endCallback: function endCallback() {
            "hover" === _this10._config.pause && (_this10.pause(), _this10.touchTimeout && clearTimeout(_this10.touchTimeout), _this10.touchTimeout = setTimeout(function () {
              return _this10._maybeEnableCycle();
            }, 500 + _this10._config.interval));
          }
        };
        this._swipeHelper = new J(this._element, t);
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (/input|textarea/i.test(t.target.tagName)) return;
        var e = rt[t.key];
        e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._getItems().indexOf(t);
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (!this._indicatorsElement) return;
        var e = K.findOne(".active", this._indicatorsElement);
        e.classList.remove(ot), e.removeAttribute("aria-current");
        var s = K.findOne("[data-bs-slide-to=\"".concat(t, "\"]"), this._indicatorsElement);
        s && (s.classList.add(ot), s.setAttribute("aria-current", "true"));
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || this._getActive();
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        this._config.interval = e || this._config.defaultInterval;
      }
    }, {
      key: "_slide",
      value: function _slide(t) {
        var _this11 = this;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        if (this._isSliding) return;
        var s = this._getActive(),
          i = t === Z,
          n = e || w(this._getItems(), s, i, this._config.wrap);
        if (n === s) return;
        var o = this._getItemIndex(n),
          r = function r(e) {
            return F.trigger(_this11._element, e, {
              relatedTarget: n,
              direction: _this11._orderToDirection(t),
              from: _this11._getItemIndex(s),
              to: o
            });
          };
        if (r("slide.bs.carousel").defaultPrevented) return;
        if (!s || !n) return;
        var a = Boolean(this._interval);
        this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = n;
        var l = i ? "carousel-item-start" : "carousel-item-end",
          c = i ? "carousel-item-next" : "carousel-item-prev";
        n.classList.add(c), g(n), s.classList.add(l), n.classList.add(l), this._queueCallback(function () {
          n.classList.remove(l, c), n.classList.add(ot), s.classList.remove(ot, c, l), _this11._isSliding = !1, r(it);
        }, s, this._isAnimated()), a && this.cycle();
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("slide");
      }
    }, {
      key: "_getActive",
      value: function _getActive() {
        return K.findOne(".active.carousel-item", this._element);
      }
    }, {
      key: "_getItems",
      value: function _getItems() {
        return K.find(".carousel-item", this._element);
      }
    }, {
      key: "_clearInterval",
      value: function _clearInterval() {
        this._interval && (clearInterval(this._interval), this._interval = null);
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return p() ? t === et ? tt : Z : t === et ? Z : tt;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return p() ? t === tt ? et : st : t === tt ? st : et;
      }
    }], [{
      key: "Default",
      get: function get() {
        return at;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return lt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = ct.getOrCreateInstance(this, t);
          if ("number" != typeof t) {
            if ("string" == typeof t) {
              if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
              e[t]();
            }
          } else e.to(t);
        });
      }
    }]);
    return ct;
  }(W);
  F.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function (t) {
    var e = K.getElementFromSelector(this);
    if (!e || !e.classList.contains(nt)) return;
    t.preventDefault();
    var s = ct.getOrCreateInstance(e),
      i = this.getAttribute("data-bs-slide-to");
    return i ? (s.to(i), void s._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (s.next(), void s._maybeEnableCycle()) : (s.prev(), void s._maybeEnableCycle());
  }), F.on(window, "load.bs.carousel.data-api", function () {
    var t = K.find('[data-bs-ride="carousel"]');
    var _iterator5 = _createForOfIteratorHelper(t),
      _step5;
    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _e5 = _step5.value;
        ct.getOrCreateInstance(_e5);
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }), b(ct);
  var ht = "show",
    dt = "collapse",
    ut = "collapsing",
    _t = '[data-bs-toggle="collapse"]',
    gt = {
      parent: null,
      toggle: !0
    },
    ft = {
      parent: "(null|element)",
      toggle: "boolean"
    };
  var mt = /*#__PURE__*/function (_W4) {
    _inherits(mt, _W4);
    var _super6 = _createSuper(mt);
    function mt(t, e) {
      var _this12;
      _classCallCheck(this, mt);
      _this12 = _super6.call(this, t, e), _this12._isTransitioning = !1, _this12._triggerArray = [];
      var s = K.find(_t);
      var _iterator6 = _createForOfIteratorHelper(s),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _t6 = _step6.value;
          var _e6 = K.getSelectorFromElement(_t6),
            _s7 = K.find(_e6).filter(function (t) {
              return t === _this12._element;
            });
          null !== _e6 && _s7.length && _this12._triggerArray.push(_t6);
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      _this12._initializeChildren(), _this12._config.parent || _this12._addAriaAndCollapsedClass(_this12._triggerArray, _this12._isShown()), _this12._config.toggle && _this12.toggle();
      return _this12;
    }
    _createClass(mt, [{
      key: "toggle",
      value: function toggle() {
        this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this13 = this;
        if (this._isTransitioning || this._isShown()) return;
        var t = [];
        if (this._config.parent && (t = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(function (t) {
          return t !== _this13._element;
        }).map(function (t) {
          return mt.getOrCreateInstance(t, {
            toggle: !1
          });
        })), t.length && t[0]._isTransitioning) return;
        if (F.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        var _iterator7 = _createForOfIteratorHelper(t),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _e7 = _step7.value;
            _e7.hide();
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
        var e = this._getDimension();
        this._element.classList.remove(dt), this._element.classList.add(ut), this._element.style[e] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
        var s = "scroll".concat(e[0].toUpperCase() + e.slice(1));
        this._queueCallback(function () {
          _this13._isTransitioning = !1, _this13._element.classList.remove(ut), _this13._element.classList.add(dt, ht), _this13._element.style[e] = "", F.trigger(_this13._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[e] = "".concat(this._element[s], "px");
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this14 = this;
        if (this._isTransitioning || !this._isShown()) return;
        if (F.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
        var t = this._getDimension();
        this._element.style[t] = "".concat(this._element.getBoundingClientRect()[t], "px"), g(this._element), this._element.classList.add(ut), this._element.classList.remove(dt, ht);
        var _iterator8 = _createForOfIteratorHelper(this._triggerArray),
          _step8;
        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var _t7 = _step8.value;
            var _e8 = K.getElementFromSelector(_t7);
            _e8 && !this._isShown(_e8) && this._addAriaAndCollapsedClass([_t7], !1);
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
        }
        this._isTransitioning = !0, this._element.style[t] = "", this._queueCallback(function () {
          _this14._isTransitioning = !1, _this14._element.classList.remove(ut), _this14._element.classList.add(dt), F.trigger(_this14._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._element;
        return t.classList.contains(ht);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.toggle = Boolean(t.toggle), t.parent = c(t.parent), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
      }
    }, {
      key: "_initializeChildren",
      value: function _initializeChildren() {
        if (!this._config.parent) return;
        var t = this._getFirstLevelChildren(_t);
        var _iterator9 = _createForOfIteratorHelper(t),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _e9 = _step9.value;
            var _t8 = K.getElementFromSelector(_e9);
            _t8 && this._addAriaAndCollapsedClass([_e9], this._isShown(_t8));
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
      }
    }, {
      key: "_getFirstLevelChildren",
      value: function _getFirstLevelChildren(t) {
        var e = K.find(":scope .collapse .collapse", this._config.parent);
        return K.find(t, this._config.parent).filter(function (t) {
          return !e.includes(t);
        });
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (t.length) {
          var _iterator10 = _createForOfIteratorHelper(t),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var _s8 = _step10.value;
              _s8.classList.toggle("collapsed", !e), _s8.setAttribute("aria-expanded", e);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return gt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ft;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        var e = {};
        return "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1), this.each(function () {
          var s = mt.getOrCreateInstance(this, e);
          if ("string" == typeof t) {
            if (void 0 === s[t]) throw new TypeError("No method named \"".concat(t, "\""));
            s[t]();
          }
        });
      }
    }]);
    return mt;
  }(W);
  F.on(document, "click.bs.collapse.data-api", _t, function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var _iterator11 = _createForOfIteratorHelper(K.getMultipleElementsFromSelector(this)),
      _step11;
    try {
      for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
        var _t9 = _step11.value;
        mt.getOrCreateInstance(_t9, {
          toggle: !1
        }).toggle();
      }
    } catch (err) {
      _iterator11.e(err);
    } finally {
      _iterator11.f();
    }
  }), b(mt);
  var pt = "dropdown",
    bt = "ArrowUp",
    vt = "ArrowDown",
    yt = "click.bs.dropdown.data-api",
    wt = "keydown.bs.dropdown.data-api",
    At = "show",
    Et = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    Ct = "".concat(Et, ".show"),
    Tt = ".dropdown-menu",
    kt = p() ? "top-end" : "top-start",
    St = p() ? "top-start" : "top-end",
    Lt = p() ? "bottom-end" : "bottom-start",
    Ot = p() ? "bottom-start" : "bottom-end",
    It = p() ? "left-start" : "right-start",
    Dt = p() ? "right-start" : "left-start",
    Nt = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle"
    },
    Pt = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)"
    };
  var xt = /*#__PURE__*/function (_W5) {
    _inherits(xt, _W5);
    var _super7 = _createSuper(xt);
    function xt(t, e) {
      var _this15;
      _classCallCheck(this, xt);
      _this15 = _super7.call(this, t, e), _this15._popper = null, _this15._parent = _this15._element.parentNode, _this15._menu = K.next(_this15._element, Tt)[0] || K.prev(_this15._element, Tt)[0] || K.findOne(Tt, _this15._parent), _this15._inNavbar = _this15._detectNavbar();
      return _this15;
    }
    _createClass(xt, [{
      key: "toggle",
      value: function toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        if (d(this._element) || this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };
        if (!F.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
          if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
            var _ref4;
            var _iterator12 = _createForOfIteratorHelper((_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children))),
              _step12;
            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _t10 = _step12.value;
                F.on(_t10, "mouseover", _);
              }
            } catch (err) {
              _iterator12.e(err);
            } finally {
              _iterator12.f();
            }
          }
          this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(At), this._element.classList.add(At), F.trigger(this._element, "shown.bs.dropdown", t);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (d(this._element) || !this._isShown()) return;
        var t = {
          relatedTarget: this._element
        };
        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(xt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "update",
      value: function update() {
        this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        if (!F.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
          if ("ontouchstart" in document.documentElement) {
            var _ref5;
            var _iterator13 = _createForOfIteratorHelper((_ref5 = []).concat.apply(_ref5, _toConsumableArray(document.body.children))),
              _step13;
            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _t11 = _step13.value;
                F.off(_t11, "mouseover", _);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          }
          this._popper && this._popper.destroy(), this._menu.classList.remove(At), this._element.classList.remove(At), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), F.trigger(this._element, "hidden.bs.dropdown", t);
        }
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("object" == _typeof((t = _get(_getPrototypeOf(xt.prototype), "_getConfig", this).call(this, t)).reference) && !l(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("".concat(pt.toUpperCase(), ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method."));
        return t;
      }
    }, {
      key: "_createPopper",
      value: function _createPopper() {
        if (void 0 === s) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        var t = this._element;
        "parent" === this._config.reference ? t = this._parent : l(this._config.reference) ? t = c(this._config.reference) : "object" == _typeof(this._config.reference) && (t = this._config.reference);
        var e = this._getPopperConfig();
        this._popper = s.createPopper(t, this._menu, e);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this._menu.classList.contains(At);
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._parent;
        if (t.classList.contains("dropend")) return It;
        if (t.classList.contains("dropstart")) return Dt;
        if (t.classList.contains("dropup-center")) return "top";
        if (t.classList.contains("dropdown-center")) return "bottom";
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? St : kt : e ? Ot : Lt;
      }
    }, {
      key: "_detectNavbar",
      value: function _detectNavbar() {
        return null !== this._element.closest(".navbar");
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this16 = this;
        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this16._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
          placement: this._getPlacement(),
          modifiers: [{
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }]
        };
        return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread(_objectSpread({}, t), v(this._config.popperConfig, [t]));
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(_ref6) {
        var t = _ref6.key,
          e = _ref6.target;
        var s = K.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(function (t) {
          return h(t);
        });
        s.length && w(s, e, t === vt, !s.includes(e)).focus();
      }
    }], [{
      key: "Default",
      get: function get() {
        return Nt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Pt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return pt;
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = xt.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (2 === t.button || "keyup" === t.type && "Tab" !== t.key) return;
        var e = K.find(Ct);
        var _iterator14 = _createForOfIteratorHelper(e),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _s9 = _step14.value;
            var _e10 = xt.getInstance(_s9);
            if (!_e10 || !1 === _e10._config.autoClose) continue;
            var _i12 = t.composedPath(),
              _n4 = _i12.includes(_e10._menu);
            if (_i12.includes(_e10._element) || "inside" === _e10._config.autoClose && !_n4 || "outside" === _e10._config.autoClose && _n4) continue;
            if (_e10._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            var _o3 = {
              relatedTarget: _e10._element
            };
            "click" === t.type && (_o3.clickEvent = t), _e10._completeHide(_o3);
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        var e = /input|textarea/i.test(t.target.tagName),
          s = "Escape" === t.key,
          i = [bt, vt].includes(t.key);
        if (!i && !s) return;
        if (e && !s) return;
        t.preventDefault();
        var n = this.matches(Et) ? this : K.prev(this, Et)[0] || K.next(this, Et)[0] || K.findOne(Et, t.delegateTarget.parentNode),
          o = xt.getOrCreateInstance(n);
        if (i) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
        o._isShown() && (t.stopPropagation(), o.hide(), n.focus());
      }
    }]);
    return xt;
  }(W);
  F.on(document, wt, Et, xt.dataApiKeydownHandler), F.on(document, wt, Tt, xt.dataApiKeydownHandler), F.on(document, yt, xt.clearMenus), F.on(document, "keyup.bs.dropdown.data-api", xt.clearMenus), F.on(document, yt, Et, function (t) {
    t.preventDefault(), xt.getOrCreateInstance(this).toggle();
  }), b(xt);
  var Mt = "show",
    jt = "mousedown.bs.backdrop",
    Ft = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body"
    },
    $t = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)"
    };
  var zt = /*#__PURE__*/function (_q3) {
    _inherits(zt, _q3);
    var _super8 = _createSuper(zt);
    function zt(t) {
      var _this17;
      _classCallCheck(this, zt);
      _this17 = _super8.call(this), _this17._config = _this17._getConfig(t), _this17._isAppended = !1, _this17._element = null;
      return _this17;
    }
    _createClass(zt, [{
      key: "show",
      value: function show(t) {
        if (!this._config.isVisible) return void v(t);
        this._append();
        var e = this._getElement();
        this._config.isAnimated && g(e), e.classList.add(Mt), this._emulateAnimation(function () {
          v(t);
        });
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this18 = this;
        this._config.isVisible ? (this._getElement().classList.remove(Mt), this._emulateAnimation(function () {
          _this18.dispose(), v(t);
        })) : v(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && (F.off(this._element, jt), this._element.remove(), this._isAppended = !1);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t12 = document.createElement("div");
          _t12.className = this._config.className, this._config.isAnimated && _t12.classList.add("fade"), this._element = _t12;
        }
        return this._element;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.rootElement = c(t.rootElement), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this19 = this;
        if (this._isAppended) return;
        var t = this._getElement();
        this._config.rootElement.append(t), F.on(t, jt, function () {
          v(_this19._config.clickCallback);
        }), this._isAppended = !0;
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        y(t, this._getElement(), this._config.isAnimated);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ft;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return $t;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "backdrop";
      }
    }]);
    return zt;
  }(q);
  var Ht = ".bs.focustrap",
    Bt = "backward",
    qt = {
      autofocus: !0,
      trapElement: null
    },
    Wt = {
      autofocus: "boolean",
      trapElement: "element"
    };
  var Rt = /*#__PURE__*/function (_q4) {
    _inherits(Rt, _q4);
    var _super9 = _createSuper(Rt);
    function Rt(t) {
      var _this20;
      _classCallCheck(this, Rt);
      _this20 = _super9.call(this), _this20._config = _this20._getConfig(t), _this20._isActive = !1, _this20._lastTabNavDirection = null;
      return _this20;
    }
    _createClass(Rt, [{
      key: "activate",
      value: function activate() {
        var _this21 = this;
        this._isActive || (this._config.autofocus && this._config.trapElement.focus(), F.off(document, Ht), F.on(document, "focusin.bs.focustrap", function (t) {
          return _this21._handleFocusin(t);
        }), F.on(document, "keydown.tab.bs.focustrap", function (t) {
          return _this21._handleKeydown(t);
        }), this._isActive = !0);
      }
    }, {
      key: "deactivate",
      value: function deactivate() {
        this._isActive && (this._isActive = !1, F.off(document, Ht));
      }
    }, {
      key: "_handleFocusin",
      value: function _handleFocusin(t) {
        var e = this._config.trapElement;
        if (t.target === document || t.target === e || e.contains(t.target)) return;
        var s = K.focusableChildren(e);
        0 === s.length ? e.focus() : this._lastTabNavDirection === Bt ? s[s.length - 1].focus() : s[0].focus();
      }
    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(t) {
        "Tab" === t.key && (this._lastTabNavDirection = t.shiftKey ? Bt : "forward");
      }
    }], [{
      key: "Default",
      get: function get() {
        return qt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Wt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "focustrap";
      }
    }]);
    return Rt;
  }(q);
  var Kt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    Vt = ".sticky-top",
    Qt = "padding-right",
    Xt = "margin-right";
  var Yt = /*#__PURE__*/function () {
    function Yt() {
      _classCallCheck(this, Yt);
      this._element = document.body;
    }
    _createClass(Yt, [{
      key: "getWidth",
      value: function getWidth() {
        var t = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - t);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.getWidth();
        this._disableOverFlow(), this._setElementAttributes(this._element, Qt, function (e) {
          return e + t;
        }), this._setElementAttributes(Kt, Qt, function (e) {
          return e + t;
        }), this._setElementAttributes(Vt, Xt, function (e) {
          return e - t;
        });
      }
    }, {
      key: "reset",
      value: function reset() {
        this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Qt), this._resetElementAttributes(Kt, Qt), this._resetElementAttributes(Vt, Xt);
      }
    }, {
      key: "isOverflowing",
      value: function isOverflowing() {
        return this.getWidth() > 0;
      }
    }, {
      key: "_disableOverFlow",
      value: function _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
      }
    }, {
      key: "_setElementAttributes",
      value: function _setElementAttributes(t, e, s) {
        var _this22 = this;
        var i = this.getWidth();
        this._applyManipulationCallback(t, function (t) {
          if (t !== _this22._element && window.innerWidth > t.clientWidth + i) return;
          _this22._saveInitialAttribute(t, e);
          var n = window.getComputedStyle(t).getPropertyValue(e);
          t.style.setProperty(e, "".concat(s(Number.parseFloat(n)), "px"));
        });
      }
    }, {
      key: "_saveInitialAttribute",
      value: function _saveInitialAttribute(t, e) {
        var s = t.style.getPropertyValue(e);
        s && B.setDataAttribute(t, e, s);
      }
    }, {
      key: "_resetElementAttributes",
      value: function _resetElementAttributes(t, e) {
        this._applyManipulationCallback(t, function (t) {
          var s = B.getDataAttribute(t, e);
          null !== s ? (B.removeDataAttribute(t, e), t.style.setProperty(e, s)) : t.style.removeProperty(e);
        });
      }
    }, {
      key: "_applyManipulationCallback",
      value: function _applyManipulationCallback(t, e) {
        if (l(t)) e(t);else {
          var _iterator15 = _createForOfIteratorHelper(K.find(t, this._element)),
            _step15;
          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var _s10 = _step15.value;
              e(_s10);
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }
        }
      }
    }]);
    return Yt;
  }();
  var Ut = ".bs.modal",
    Gt = "hidden.bs.modal",
    Jt = "show.bs.modal",
    Zt = "modal-open",
    te = "show",
    ee = "modal-static",
    se = {
      backdrop: !0,
      focus: !0,
      keyboard: !0
    },
    ie = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean"
    };
  var ne = /*#__PURE__*/function (_W6) {
    _inherits(ne, _W6);
    var _super10 = _createSuper(ne);
    function ne(t, e) {
      var _this23;
      _classCallCheck(this, ne);
      _this23 = _super10.call(this, t, e), _this23._dialog = K.findOne(".modal-dialog", _this23._element), _this23._backdrop = _this23._initializeBackDrop(), _this23._focustrap = _this23._initializeFocusTrap(), _this23._isShown = !1, _this23._isTransitioning = !1, _this23._scrollBar = new Yt(), _this23._addEventListeners();
      return _this23;
    }
    _createClass(ne, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this24 = this;
        this._isShown || this._isTransitioning || F.trigger(this._element, Jt, {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Zt), this._adjustDialog(), this._backdrop.show(function () {
          return _this24._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this25 = this;
        this._isShown && !this._isTransitioning && (F.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(te), this._queueCallback(function () {
          return _this25._hideModal();
        }, this._element, this._isAnimated())));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        F.off(window, Ut), F.off(this._dialog, Ut), this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(ne.prototype), "dispose", this).call(this);
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new zt({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Rt({
          trapElement: this._element
        });
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this26 = this;
        document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
        var e = K.findOne(".modal-body", this._dialog);
        e && (e.scrollTop = 0), g(this._element), this._element.classList.add(te), this._queueCallback(function () {
          _this26._config.focus && _this26._focustrap.activate(), _this26._isTransitioning = !1, F.trigger(_this26._element, "shown.bs.modal", {
            relatedTarget: t
          });
        }, this._dialog, this._isAnimated());
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this27 = this;
        F.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          "Escape" === t.key && (_this27._config.keyboard ? _this27.hide() : _this27._triggerBackdropTransition());
        }), F.on(window, "resize.bs.modal", function () {
          _this27._isShown && !_this27._isTransitioning && _this27._adjustDialog();
        }), F.on(this._element, "mousedown.dismiss.bs.modal", function (t) {
          F.one(_this27._element, "click.dismiss.bs.modal", function (e) {
            _this27._element === t.target && _this27._element === e.target && ("static" !== _this27._config.backdrop ? _this27._config.backdrop && _this27.hide() : _this27._triggerBackdropTransition());
          });
        });
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this28 = this;
        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove(Zt), _this28._resetAdjustments(), _this28._scrollBar.reset(), F.trigger(_this28._element, Gt);
        });
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._element.classList.contains("fade");
      }
    }, {
      key: "_triggerBackdropTransition",
      value: function _triggerBackdropTransition() {
        var _this29 = this;
        if (F.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
          e = this._element.style.overflowY;
        "hidden" === e || this._element.classList.contains(ee) || (t || (this._element.style.overflowY = "hidden"), this._element.classList.add(ee), this._queueCallback(function () {
          _this29._element.classList.remove(ee), _this29._queueCallback(function () {
            _this29._element.style.overflowY = e;
          }, _this29._dialog);
        }, this._dialog), this._element.focus());
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
          e = this._scrollBar.getWidth(),
          s = e > 0;
        if (s && !t) {
          var _t13 = p() ? "paddingLeft" : "paddingRight";
          this._element.style[_t13] = "".concat(e, "px");
        }
        if (!s && t) {
          var _t14 = p() ? "paddingRight" : "paddingLeft";
          this._element.style[_t14] = "".concat(e, "px");
        }
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "Default",
      get: function get() {
        return se;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ie;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var s = ne.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === s[t]) throw new TypeError("No method named \"".concat(t, "\""));
            s[t](e);
          }
        });
      }
    }]);
    return ne;
  }(W);
  F.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this30 = this;
    var e = K.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), F.one(e, Jt, function (t) {
      t.defaultPrevented || F.one(e, Gt, function () {
        h(_this30) && _this30.focus();
      });
    });
    var s = K.findOne(".modal.show");
    s && ne.getInstance(s).hide(), ne.getOrCreateInstance(e).toggle(this);
  }), V(ne), b(ne);
  var oe = "show",
    re = "showing",
    ae = "hiding",
    le = ".offcanvas.show",
    ce = "hidePrevented.bs.offcanvas",
    he = "hidden.bs.offcanvas",
    de = {
      backdrop: !0,
      keyboard: !0,
      scroll: !1
    },
    ue = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean"
    };
  var _e = /*#__PURE__*/function (_W7) {
    _inherits(_e, _W7);
    var _super11 = _createSuper(_e);
    function _e(t, e) {
      var _this31;
      _classCallCheck(this, _e);
      _this31 = _super11.call(this, t, e), _this31._isShown = !1, _this31._backdrop = _this31._initializeBackDrop(), _this31._focustrap = _this31._initializeFocusTrap(), _this31._addEventListeners();
      return _this31;
    }
    _createClass(_e, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this32 = this;
        this._isShown || F.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new Yt().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(re), this._queueCallback(function () {
          _this32._config.scroll && !_this32._config.backdrop || _this32._focustrap.activate(), _this32._element.classList.add(oe), _this32._element.classList.remove(re), F.trigger(_this32._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this33 = this;
        this._isShown && (F.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(ae), this._backdrop.hide(), this._queueCallback(function () {
          _this33._element.classList.remove(oe, ae), _this33._element.removeAttribute("aria-modal"), _this33._element.removeAttribute("role"), _this33._config.scroll || new Yt().reset(), F.trigger(_this33._element, he);
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), _get(_getPrototypeOf(_e.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this34 = this;
        var t = Boolean(this._config.backdrop);
        return new zt({
          className: "offcanvas-backdrop",
          isVisible: t,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: t ? function () {
            "static" !== _this34._config.backdrop ? _this34.hide() : F.trigger(_this34._element, ce);
          } : null
        });
      }
    }, {
      key: "_initializeFocusTrap",
      value: function _initializeFocusTrap() {
        return new Rt({
          trapElement: this._element
        });
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this35 = this;
        F.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          "Escape" === t.key && (_this35._config.keyboard ? _this35.hide() : F.trigger(_this35._element, ce));
        });
      }
    }], [{
      key: "Default",
      get: function get() {
        return de;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ue;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = _e.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);
    return _e;
  }(W);
  F.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this36 = this;
    var e = K.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this)) return;
    F.one(e, he, function () {
      h(_this36) && _this36.focus();
    });
    var s = K.findOne(le);
    s && s !== e && _e.getInstance(s).hide(), _e.getOrCreateInstance(e).toggle(this);
  }), F.on(window, "load.bs.offcanvas.data-api", function () {
    var _iterator16 = _createForOfIteratorHelper(K.find(le)),
      _step16;
    try {
      for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
        var _t15 = _step16.value;
        _e.getOrCreateInstance(_t15).show();
      }
    } catch (err) {
      _iterator16.e(err);
    } finally {
      _iterator16.f();
    }
  }), F.on(window, "resize.bs.offcanvas", function () {
    var _iterator17 = _createForOfIteratorHelper(K.find("[aria-modal][class*=show][class*=offcanvas-]")),
      _step17;
    try {
      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
        var _t16 = _step17.value;
        "fixed" !== getComputedStyle(_t16).position && _e.getOrCreateInstance(_t16).hide();
      }
    } catch (err) {
      _iterator17.e(err);
    } finally {
      _iterator17.f();
    }
  }), V(_e), b(_e);
  var ge = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    },
    fe = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    me = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
    pe = function pe(t, e) {
      var s = t.nodeName.toLowerCase();
      return e.includes(s) ? !fe.has(s) || Boolean(me.test(t.nodeValue)) : e.filter(function (t) {
        return t instanceof RegExp;
      }).some(function (t) {
        return t.test(s);
      });
    },
    be = {
      allowList: ge,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>"
    },
    ve = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string"
    },
    ye = {
      entry: "(string|element|function|null)",
      selector: "(string|element)"
    };
  var we = /*#__PURE__*/function (_q5) {
    _inherits(we, _q5);
    var _super12 = _createSuper(we);
    function we(t) {
      var _this37;
      _classCallCheck(this, we);
      _this37 = _super12.call(this), _this37._config = _this37._getConfig(t);
      return _this37;
    }
    _createClass(we, [{
      key: "getContent",
      value: function getContent() {
        var _this38 = this;
        return Object.values(this._config.content).map(function (t) {
          return _this38._resolvePossibleFunction(t);
        }).filter(Boolean);
      }
    }, {
      key: "hasContent",
      value: function hasContent() {
        return this.getContent().length > 0;
      }
    }, {
      key: "changeContent",
      value: function changeContent(t) {
        return this._checkContent(t), this._config.content = _objectSpread(_objectSpread({}, this._config.content), t), this;
      }
    }, {
      key: "toHtml",
      value: function toHtml() {
        var _e$classList;
        var t = document.createElement("div");
        t.innerHTML = this._maybeSanitize(this._config.template);
        for (var _i13 = 0, _Object$entries5 = Object.entries(this._config.content); _i13 < _Object$entries5.length; _i13++) {
          var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i13], 2),
            _e11 = _Object$entries5$_i[0],
            _s11 = _Object$entries5$_i[1];
          this._setContent(t, _s11, _e11);
        }
        var e = t.children[0],
          s = this._resolvePossibleFunction(this._config.extraClass);
        return s && (_e$classList = e.classList).add.apply(_e$classList, _toConsumableArray(s.split(" "))), e;
      }
    }, {
      key: "_typeCheckConfig",
      value: function _typeCheckConfig(t) {
        _get(_getPrototypeOf(we.prototype), "_typeCheckConfig", this).call(this, t), this._checkContent(t.content);
      }
    }, {
      key: "_checkContent",
      value: function _checkContent(t) {
        for (var _i14 = 0, _Object$entries6 = Object.entries(t); _i14 < _Object$entries6.length; _i14++) {
          var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i14], 2),
            _e12 = _Object$entries6$_i[0],
            _s12 = _Object$entries6$_i[1];
          _get(_getPrototypeOf(we.prototype), "_typeCheckConfig", this).call(this, {
            selector: _e12,
            entry: _s12
          }, ye);
        }
      }
    }, {
      key: "_setContent",
      value: function _setContent(t, e, s) {
        var i = K.findOne(s, t);
        i && ((e = this._resolvePossibleFunction(e)) ? l(e) ? this._putElementInTemplate(c(e), i) : this._config.html ? i.innerHTML = this._maybeSanitize(e) : i.textContent = e : i.remove());
      }
    }, {
      key: "_maybeSanitize",
      value: function _maybeSanitize(t) {
        return this._config.sanitize ? function (t, e, s, _ref7) {
          if (!t.length) return t;
          if (s && "function" == typeof s) return s(t);
          var i = new window.DOMParser().parseFromString(t, "text/html"),
            n = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(i.body.querySelectorAll("*")));
          var _iterator18 = _createForOfIteratorHelper(n),
            _step18;
          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var _ref8;
              var _t17 = _step18.value;
              var _s13 = _t17.nodeName.toLowerCase();
              if (!Object.keys(e).includes(_s13)) {
                _t17.remove();
                continue;
              }
              var _i15 = (_ref8 = []).concat.apply(_ref8, _toConsumableArray(_t17.attributes)),
                _n5 = [].concat(e["*"] || [], e[_s13] || []);
              var _iterator19 = _createForOfIteratorHelper(_i15),
                _step19;
              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var _e13 = _step19.value;
                  pe(_e13, _n5) || _t17.removeAttribute(_e13.nodeName);
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
          return i.body.innerHTML;
        }(t, this._config.allowList, this._config.sanitizeFn) : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return v(t, [this]);
      }
    }, {
      key: "_putElementInTemplate",
      value: function _putElementInTemplate(t, e) {
        if (this._config.html) return e.innerHTML = "", void e.append(t);
        e.textContent = t.textContent;
      }
    }], [{
      key: "Default",
      get: function get() {
        return be;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return ve;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "TemplateFactory";
      }
    }]);
    return we;
  }(q);
  var Ae = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Ee = "fade",
    Ce = "show",
    Te = ".modal",
    ke = "hide.bs.modal",
    Se = "hover",
    Le = "focus",
    Oe = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: p() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: p() ? "right" : "left"
    },
    Ie = {
      allowList: ge,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 6],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus"
    },
    De = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string"
    };
  var Ne = /*#__PURE__*/function (_W8) {
    _inherits(Ne, _W8);
    var _super13 = _createSuper(Ne);
    function Ne(t, e) {
      var _this39;
      _classCallCheck(this, Ne);
      if (void 0 === s) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this39 = _super13.call(this, t, e), _this39._isEnabled = !0, _this39._timeout = 0, _this39._isHovered = null, _this39._activeTrigger = {}, _this39._popper = null, _this39._templateFactory = null, _this39._newContent = null, _this39.tip = null, _this39._setListeners(), _this39._config.selector || _this39._fixTitle();
      return _this39;
    }
    _createClass(Ne, [{
      key: "enable",
      value: function enable() {
        this._isEnabled = !0;
      }
    }, {
      key: "disable",
      value: function disable() {
        this._isEnabled = !1;
      }
    }, {
      key: "toggleEnabled",
      value: function toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), F.off(this._element.closest(Te), ke, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), _get(_getPrototypeOf(Ne.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _this40 = this;
        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;
        var t = F.trigger(this._element, this.constructor.eventName("show")),
          e = (u(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
        if (t.defaultPrevented || !e) return;
        this._disposePopper();
        var s = this._getTipElement();
        this._element.setAttribute("aria-describedby", s.getAttribute("id"));
        var i = this._config.container;
        if (this._element.ownerDocument.documentElement.contains(this.tip) || (i.append(s), F.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(s), s.classList.add(Ce), "ontouchstart" in document.documentElement) {
          var _ref9;
          var _iterator20 = _createForOfIteratorHelper((_ref9 = []).concat.apply(_ref9, _toConsumableArray(document.body.children))),
            _step20;
          try {
            for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
              var _t18 = _step20.value;
              F.on(_t18, "mouseover", _);
            }
          } catch (err) {
            _iterator20.e(err);
          } finally {
            _iterator20.f();
          }
        }
        this._queueCallback(function () {
          F.trigger(_this40._element, _this40.constructor.eventName("shown")), !1 === _this40._isHovered && _this40._leave(), _this40._isHovered = !1;
        }, this.tip, this._isAnimated());
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this41 = this;
        if (this._isShown() && !F.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
          if (this._getTipElement().classList.remove(Ce), "ontouchstart" in document.documentElement) {
            var _ref10;
            var _iterator21 = _createForOfIteratorHelper((_ref10 = []).concat.apply(_ref10, _toConsumableArray(document.body.children))),
              _step21;
            try {
              for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                var _t19 = _step21.value;
                F.off(_t19, "mouseover", _);
              }
            } catch (err) {
              _iterator21.e(err);
            } finally {
              _iterator21.f();
            }
          }
          this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = null, this._queueCallback(function () {
            _this41._isWithActiveTrigger() || (_this41._isHovered || _this41._disposePopper(), _this41._element.removeAttribute("aria-describedby"), F.trigger(_this41._element, _this41.constructor.eventName("hidden")));
          }, this.tip, this._isAnimated());
        }
      }
    }, {
      key: "update",
      value: function update() {
        this._popper && this._popper.update();
      }
    }, {
      key: "_isWithContent",
      value: function _isWithContent() {
        return Boolean(this._getTitle());
      }
    }, {
      key: "_getTipElement",
      value: function _getTipElement() {
        return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
      }
    }, {
      key: "_createTipElement",
      value: function _createTipElement(t) {
        var e = this._getTemplateFactory(t).toHtml();
        if (!e) return null;
        e.classList.remove(Ee, Ce), e.classList.add("bs-".concat(this.constructor.NAME, "-auto"));
        var s = function (t) {
          do {
            t += Math.floor(1e6 * Math.random());
          } while (document.getElementById(t));
          return t;
        }(this.constructor.NAME).toString();
        return e.setAttribute("id", s), this._isAnimated() && e.classList.add(Ee), e;
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
      }
    }, {
      key: "_getTemplateFactory",
      value: function _getTemplateFactory(t) {
        return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new we(_objectSpread(_objectSpread({}, this._config), {}, {
          content: t,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        })), this._templateFactory;
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".tooltip-inner": this._getTitle()
        };
      }
    }, {
      key: "_getTitle",
      value: function _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t) {
        return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
      }
    }, {
      key: "_isAnimated",
      value: function _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains(Ee);
      }
    }, {
      key: "_isShown",
      value: function _isShown() {
        return this.tip && this.tip.classList.contains(Ce);
      }
    }, {
      key: "_createPopper",
      value: function _createPopper(t) {
        var e = v(this._config.placement, [this, t, this._element]),
          i = Oe[e.toUpperCase()];
        return s.createPopper(this._element, t, this._getPopperConfig(i));
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this42 = this;
        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this42._element);
        } : t;
      }
    }, {
      key: "_resolvePossibleFunction",
      value: function _resolvePossibleFunction(t) {
        return v(t, [this._element]);
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this43 = this;
        var e = {
          placement: t,
          modifiers: [{
            name: "flip",
            options: {
              fallbackPlacements: this._config.fallbackPlacements
            }
          }, {
            name: "offset",
            options: {
              offset: this._getOffset()
            }
          }, {
            name: "preventOverflow",
            options: {
              boundary: this._config.boundary
            }
          }, {
            name: "arrow",
            options: {
              element: ".".concat(this.constructor.NAME, "-arrow")
            }
          }, {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: function fn(t) {
              _this43._getTipElement().setAttribute("data-popper-placement", t.state.placement);
            }
          }]
        };
        return _objectSpread(_objectSpread({}, e), v(this._config.popperConfig, [e]));
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this44 = this;
        var t = this._config.trigger.split(" ");
        var _iterator22 = _createForOfIteratorHelper(t),
          _step22;
        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
            var _e14 = _step22.value;
            if ("click" === _e14) F.on(this._element, this.constructor.eventName("click"), this._config.selector, function (t) {
              _this44._initializeOnDelegatedTarget(t).toggle();
            });else if ("manual" !== _e14) {
              var _t20 = _e14 === Se ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                _s14 = _e14 === Se ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
              F.on(this._element, _t20, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);
                e._activeTrigger["focusin" === t.type ? Le : Se] = !0, e._enter();
              }), F.on(this._element, _s14, this._config.selector, function (t) {
                var e = _this44._initializeOnDelegatedTarget(t);
                e._activeTrigger["focusout" === t.type ? Le : Se] = e._element.contains(t.relatedTarget), e._leave();
              });
            }
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
        this._hideModalHandler = function () {
          _this44._element && _this44.hide();
        }, F.on(this._element.closest(Te), ke, this._hideModalHandler);
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title");
        t && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
      }
    }, {
      key: "_enter",
      value: function _enter() {
        var _this45 = this;
        this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(function () {
          _this45._isHovered && _this45.show();
        }, this._config.delay.show));
      }
    }, {
      key: "_leave",
      value: function _leave() {
        var _this46 = this;
        this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(function () {
          _this46._isHovered || _this46.hide();
        }, this._config.delay.hide));
      }
    }, {
      key: "_setTimeout",
      value: function _setTimeout(t, e) {
        clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = B.getDataAttributes(this._element);
        for (var _i16 = 0, _Object$keys2 = Object.keys(e); _i16 < _Object$keys2.length; _i16++) {
          var _t21 = _Object$keys2[_i16];
          Ae.has(_t21) && delete e[_t21];
        }
        return t = _objectSpread(_objectSpread({}, e), "object" == _typeof(t) && t ? t : {}), t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.container = !1 === t.container ? document.body : c(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};
        for (var _i17 = 0, _Object$entries7 = Object.entries(this._config); _i17 < _Object$entries7.length; _i17++) {
          var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i17], 2),
            _e15 = _Object$entries7$_i[0],
            _s15 = _Object$entries7$_i[1];
          this.constructor.Default[_e15] !== _s15 && (t[_e15] = _s15);
        }
        return t.selector = !1, t.trigger = "manual", t;
      }
    }, {
      key: "_disposePopper",
      value: function _disposePopper() {
        this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Ie;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return De;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ne.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return Ne;
  }(W);
  b(Ne);
  var Pe = _objectSpread(_objectSpread({}, Ne.Default), {}, {
      content: "",
      offset: [0, 8],
      placement: "right",
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click"
    }),
    xe = _objectSpread(_objectSpread({}, Ne.DefaultType), {}, {
      content: "(null|string|element|function)"
    });
  var Me = /*#__PURE__*/function (_Ne) {
    _inherits(Me, _Ne);
    var _super14 = _createSuper(Me);
    function Me() {
      _classCallCheck(this, Me);
      return _super14.apply(this, arguments);
    }
    _createClass(Me, [{
      key: "_isWithContent",
      value: function _isWithContent() {
        return this._getTitle() || this._getContent();
      }
    }, {
      key: "_getContentForTemplate",
      value: function _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent()
        };
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
    }], [{
      key: "Default",
      get: function get() {
        return Pe;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return xe;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Me.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return Me;
  }(Ne);
  b(Me);
  var je = "click.bs.scrollspy",
    Fe = "active",
    $e = "[href]",
    ze = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [.1, .5, 1]
    },
    He = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array"
    };
  var Be = /*#__PURE__*/function (_W9) {
    _inherits(Be, _W9);
    var _super15 = _createSuper(Be);
    function Be(t, e) {
      var _this47;
      _classCallCheck(this, Be);
      _this47 = _super15.call(this, t, e), _this47._targetLinks = new Map(), _this47._observableSections = new Map(), _this47._rootElement = "visible" === getComputedStyle(_this47._element).overflowY ? null : _this47._element, _this47._activeTarget = null, _this47._observer = null, _this47._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      }, _this47.refresh();
      return _this47;
    }
    _createClass(Be, [{
      key: "refresh",
      value: function refresh() {
        this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
        var _iterator23 = _createForOfIteratorHelper(this._observableSections.values()),
          _step23;
        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var _t22 = _step23.value;
            this._observer.observe(_t22);
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._observer.disconnect(), _get(_getPrototypeOf(Be.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_configAfterMerge",
      value: function _configAfterMerge(t) {
        return t.target = c(t.target) || document.body, t.rootMargin = t.offset ? "".concat(t.offset, "px 0px -30%") : t.rootMargin, "string" == typeof t.threshold && (t.threshold = t.threshold.split(",").map(function (t) {
          return Number.parseFloat(t);
        })), t;
      }
    }, {
      key: "_maybeEnableSmoothScroll",
      value: function _maybeEnableSmoothScroll() {
        var _this48 = this;
        this._config.smoothScroll && (F.off(this._config.target, je), F.on(this._config.target, je, $e, function (t) {
          var e = _this48._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            var _s16 = _this48._rootElement || window,
              _i18 = e.offsetTop - _this48._element.offsetTop;
            if (_s16.scrollTo) return void _s16.scrollTo({
              top: _i18,
              behavior: "smooth"
            });
            _s16.scrollTop = _i18;
          }
        }));
      }
    }, {
      key: "_getNewObserver",
      value: function _getNewObserver() {
        var _this49 = this;
        var t = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin
        };
        return new IntersectionObserver(function (t) {
          return _this49._observerCallback(t);
        }, t);
      }
    }, {
      key: "_observerCallback",
      value: function _observerCallback(t) {
        var _this50 = this;
        var e = function e(t) {
            return _this50._targetLinks.get("#".concat(t.target.id));
          },
          s = function s(t) {
            _this50._previousScrollData.visibleEntryTop = t.target.offsetTop, _this50._process(e(t));
          },
          i = (this._rootElement || document.documentElement).scrollTop,
          n = i >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = i;
        var _iterator24 = _createForOfIteratorHelper(t),
          _step24;
        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _o4 = _step24.value;
            if (!_o4.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(e(_o4));
              continue;
            }
            var _t23 = _o4.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (n && _t23) {
              if (s(_o4), !i) return;
            } else n || _t23 || s(_o4);
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      }
    }, {
      key: "_initializeTargetsAndObservables",
      value: function _initializeTargetsAndObservables() {
        this._targetLinks = new Map(), this._observableSections = new Map();
        var t = K.find($e, this._config.target);
        var _iterator25 = _createForOfIteratorHelper(t),
          _step25;
        try {
          for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
            var _e16 = _step25.value;
            if (!_e16.hash || d(_e16)) continue;
            var _t24 = K.findOne(decodeURI(_e16.hash), this._element);
            h(_t24) && (this._targetLinks.set(decodeURI(_e16.hash), _e16), this._observableSections.set(_e16.hash, _t24));
          }
        } catch (err) {
          _iterator25.e(err);
        } finally {
          _iterator25.f();
        }
      }
    }, {
      key: "_process",
      value: function _process(t) {
        this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(Fe), this._activateParents(t), F.trigger(this._element, "activate.bs.scrollspy", {
          relatedTarget: t
        }));
      }
    }, {
      key: "_activateParents",
      value: function _activateParents(t) {
        if (t.classList.contains("dropdown-item")) K.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(Fe);else {
          var _iterator26 = _createForOfIteratorHelper(K.parents(t, ".nav, .list-group")),
            _step26;
          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var _e17 = _step26.value;
              var _iterator27 = _createForOfIteratorHelper(K.prev(_e17, ".nav-link, .nav-item > .nav-link, .list-group-item")),
                _step27;
              try {
                for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                  var _t25 = _step27.value;
                  _t25.classList.add(Fe);
                }
              } catch (err) {
                _iterator27.e(err);
              } finally {
                _iterator27.f();
              }
            }
          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }
        }
      }
    }, {
      key: "_clearActiveClass",
      value: function _clearActiveClass(t) {
        t.classList.remove(Fe);
        var e = K.find("[href].active", t);
        var _iterator28 = _createForOfIteratorHelper(e),
          _step28;
        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var _t26 = _step28.value;
            _t26.classList.remove(Fe);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      }
    }], [{
      key: "Default",
      get: function get() {
        return ze;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return He;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Be.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return Be;
  }(W);
  F.on(window, "load.bs.scrollspy.data-api", function () {
    var _iterator29 = _createForOfIteratorHelper(K.find('[data-bs-spy="scroll"]')),
      _step29;
    try {
      for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
        var _t27 = _step29.value;
        Be.getOrCreateInstance(_t27);
      }
    } catch (err) {
      _iterator29.e(err);
    } finally {
      _iterator29.f();
    }
  }), b(Be);
  var qe = "ArrowLeft",
    We = "ArrowRight",
    Re = "ArrowUp",
    Ke = "ArrowDown",
    Ve = "active",
    Qe = "fade",
    Xe = "show",
    Ye = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    Ue = ".nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role=\"tab\"]:not(.dropdown-toggle), ".concat(Ye);
  var Ge = /*#__PURE__*/function (_W10) {
    _inherits(Ge, _W10);
    var _super16 = _createSuper(Ge);
    function Ge(t) {
      var _this51;
      _classCallCheck(this, Ge);
      _this51 = _super16.call(this, t), _this51._parent = _this51._element.closest('.list-group, .nav, [role="tablist"]'), _this51._parent && (_this51._setInitialAttributes(_this51._parent, _this51._getChildren()), F.on(_this51._element, "keydown.bs.tab", function (t) {
        return _this51._keydown(t);
      }));
      return _this51;
    }
    _createClass(Ge, [{
      key: "show",
      value: function show() {
        var t = this._element;
        if (this._elemIsActive(t)) return;
        var e = this._getActiveElem(),
          s = e ? F.trigger(e, "hide.bs.tab", {
            relatedTarget: t
          }) : null;
        F.trigger(t, "show.bs.tab", {
          relatedTarget: e
        }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
      }
    }, {
      key: "_activate",
      value: function _activate(t, e) {
        var _this52 = this;
        t && (t.classList.add(Ve), this._activate(K.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), _this52._toggleDropDown(t, !0), F.trigger(t, "shown.bs.tab", {
            relatedTarget: e
          })) : t.classList.add(Xe);
        }, t, t.classList.contains(Qe)));
      }
    }, {
      key: "_deactivate",
      value: function _deactivate(t, e) {
        var _this53 = this;
        t && (t.classList.remove(Ve), t.blur(), this._deactivate(K.getElementFromSelector(t)), this._queueCallback(function () {
          "tab" === t.getAttribute("role") ? (t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), _this53._toggleDropDown(t, !1), F.trigger(t, "hidden.bs.tab", {
            relatedTarget: e
          })) : t.classList.remove(Xe);
        }, t, t.classList.contains(Qe)));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        if (![qe, We, Re, Ke].includes(t.key)) return;
        t.stopPropagation(), t.preventDefault();
        var e = [We, Ke].includes(t.key),
          s = w(this._getChildren().filter(function (t) {
            return !d(t);
          }), t.target, e, !0);
        s && (s.focus({
          preventScroll: !0
        }), Ge.getOrCreateInstance(s).show());
      }
    }, {
      key: "_getChildren",
      value: function _getChildren() {
        return K.find(Ue, this._parent);
      }
    }, {
      key: "_getActiveElem",
      value: function _getActiveElem() {
        var _this54 = this;
        return this._getChildren().find(function (t) {
          return _this54._elemIsActive(t);
        }) || null;
      }
    }, {
      key: "_setInitialAttributes",
      value: function _setInitialAttributes(t, e) {
        this._setAttributeIfNotExists(t, "role", "tablist");
        var _iterator30 = _createForOfIteratorHelper(e),
          _step30;
        try {
          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            var _t28 = _step30.value;
            this._setInitialAttributesOnChild(_t28);
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }
      }
    }, {
      key: "_setInitialAttributesOnChild",
      value: function _setInitialAttributesOnChild(t) {
        t = this._getInnerElement(t);
        var e = this._elemIsActive(t),
          s = this._getOuterElement(t);
        t.setAttribute("aria-selected", e), s !== t && this._setAttributeIfNotExists(s, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
      }
    }, {
      key: "_setInitialAttributesOnTargetPanel",
      value: function _setInitialAttributesOnTargetPanel(t) {
        var e = K.getElementFromSelector(t);
        e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", "".concat(t.id)));
      }
    }, {
      key: "_toggleDropDown",
      value: function _toggleDropDown(t, e) {
        var s = this._getOuterElement(t);
        if (!s.classList.contains("dropdown")) return;
        var i = function i(t, _i19) {
          var n = K.findOne(t, s);
          n && n.classList.toggle(_i19, e);
        };
        i(".dropdown-toggle", Ve), i(".dropdown-menu", Xe), s.setAttribute("aria-expanded", e);
      }
    }, {
      key: "_setAttributeIfNotExists",
      value: function _setAttributeIfNotExists(t, e, s) {
        t.hasAttribute(e) || t.setAttribute(e, s);
      }
    }, {
      key: "_elemIsActive",
      value: function _elemIsActive(t) {
        return t.classList.contains(Ve);
      }
    }, {
      key: "_getInnerElement",
      value: function _getInnerElement(t) {
        return t.matches(Ue) ? t : K.findOne(Ue, t);
      }
    }, {
      key: "_getOuterElement",
      value: function _getOuterElement(t) {
        return t.closest(".nav-item, .list-group-item") || t;
      }
    }], [{
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Ge.getOrCreateInstance(this);
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }]);
    return Ge;
  }(W);
  F.on(document, "click.bs.tab", Ye, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), d(this) || Ge.getOrCreateInstance(this).show();
  }), F.on(window, "load.bs.tab", function () {
    var _iterator31 = _createForOfIteratorHelper(K.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')),
      _step31;
    try {
      for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
        var _t29 = _step31.value;
        Ge.getOrCreateInstance(_t29);
      }
    } catch (err) {
      _iterator31.e(err);
    } finally {
      _iterator31.f();
    }
  }), b(Ge);
  var Je = "hide",
    Ze = "show",
    ts = "showing",
    es = {
      animation: "boolean",
      autohide: "boolean",
      delay: "number"
    },
    ss = {
      animation: !0,
      autohide: !0,
      delay: 5e3
    };
  var is = /*#__PURE__*/function (_W11) {
    _inherits(is, _W11);
    var _super17 = _createSuper(is);
    function is(t, e) {
      var _this55;
      _classCallCheck(this, is);
      _this55 = _super17.call(this, t, e), _this55._timeout = null, _this55._hasMouseInteraction = !1, _this55._hasKeyboardInteraction = !1, _this55._setListeners();
      return _this55;
    }
    _createClass(is, [{
      key: "show",
      value: function show() {
        var _this56 = this;
        F.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(Je), g(this._element), this._element.classList.add(Ze, ts), this._queueCallback(function () {
          _this56._element.classList.remove(ts), F.trigger(_this56._element, "shown.bs.toast"), _this56._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this57 = this;
        this.isShown() && (F.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(ts), this._queueCallback(function () {
          _this57._element.classList.add(Je), _this57._element.classList.remove(ts, Ze), F.trigger(_this57._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this.isShown() && this._element.classList.remove(Ze), _get(_getPrototypeOf(is.prototype), "dispose", this).call(this);
      }
    }, {
      key: "isShown",
      value: function isShown() {
        return this._element.classList.contains(Ze);
      }
    }, {
      key: "_maybeScheduleHide",
      value: function _maybeScheduleHide() {
        var _this58 = this;
        this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
          _this58.hide();
        }, this._config.delay)));
      }
    }, {
      key: "_onInteraction",
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }
        if (e) return void this._clearTimeout();
        var s = t.relatedTarget;
        this._element === s || this._element.contains(s) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this59 = this;
        F.on(this._element, "mouseover.bs.toast", function (t) {
          return _this59._onInteraction(t, !0);
        }), F.on(this._element, "mouseout.bs.toast", function (t) {
          return _this59._onInteraction(t, !1);
        }), F.on(this._element, "focusin.bs.toast", function (t) {
          return _this59._onInteraction(t, !0);
        }), F.on(this._element, "focusout.bs.toast", function (t) {
          return _this59._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "Default",
      get: function get() {
        return ss;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return es;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = is.getOrCreateInstance(this, t);
          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }]);
    return is;
  }(W);
  return V(is), b(is), {
    Alert: Q,
    Button: Y,
    Carousel: ct,
    Collapse: mt,
    Dropdown: xt,
    Modal: ne,
    Offcanvas: _e,
    Popover: Me,
    ScrollSpy: Be,
    Tab: Ge,
    Toast: is,
    Tooltip: Ne
  };
});
!function (e, o) {
  if ("function" == typeof define && define.amd) define(["exports"], o);else if ("undefined" != typeof exports) o(exports);else {
    var t = {};
    o(t), e.bodyScrollLock = t;
  }
}(this, function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: !0
  });
  var t = !1;
  if ("undefined" != typeof window) {
    var e = {
      get passive() {
        t = !0;
      }
    };
    window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
  }
  var n = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && 1 < window.navigator.maxTouchPoints),
    i = [],
    d = !1,
    l = -1,
    c = void 0,
    s = void 0,
    u = void 0,
    a = function a(o) {
      return i.some(function (e) {
        return !(!e.options.allowTouchMove || !e.options.allowTouchMove(o));
      });
    },
    v = function v(e) {
      var o = e || window.event;
      return !!a(o.target) || 1 < o.touches.length || (o.preventDefault && o.preventDefault(), !1);
    },
    r = function r() {
      void 0 !== u && (document.body.style.paddingRight = u, u = void 0), void 0 !== c && (document.body.style.overflow = c, c = void 0);
    },
    f = function f() {
      if (void 0 !== s) {
        var e = -parseInt(document.body.style.top, 10),
          o = -parseInt(document.body.style.left, 10);
        document.body.style.position = s.position, document.body.style.top = s.top, document.body.style.left = s.left, window.scrollTo(o, e), s = void 0;
      }
    };
  exports.disableBodyScroll = function (r, e) {
    if (r) {
      if (!i.some(function (e) {
        return e.targetElement === r;
      })) {
        var o = {
          targetElement: r,
          options: e || {}
        };
        i = [].concat(function (e) {
          if (Array.isArray(e)) {
            for (var o = 0, t = Array(e.length); o < e.length; o++) t[o] = e[o];
            return t;
          }
          return Array.from(e);
        }(i), [o]), n ? window.requestAnimationFrame(function () {
          if (void 0 === s) {
            s = {
              position: document.body.style.position,
              top: document.body.style.top,
              left: document.body.style.left
            };
            var e = window,
              o = e.scrollY,
              t = e.scrollX,
              n = e.innerHeight;
            document.body.style.position = "fixed", document.body.style.top = -o, document.body.style.left = -t, setTimeout(function () {
              return window.requestAnimationFrame(function () {
                var e = n - window.innerHeight;
                e && n <= o && (document.body.style.top = -(o + e));
              });
            }, 300);
          }
        }) : function (e) {
          if (void 0 === u) {
            var o = !!e && !0 === e.reserveScrollBarGap,
              t = window.innerWidth - document.documentElement.clientWidth;
            if (o && 0 < t) {
              var n = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"), 10);
              u = document.body.style.paddingRight, document.body.style.paddingRight = n + t + "px";
            }
          }
          void 0 === c && (c = document.body.style.overflow, document.body.style.overflow = "hidden");
        }(e), n && (r.ontouchstart = function (e) {
          1 === e.targetTouches.length && (l = e.targetTouches[0].clientY);
        }, r.ontouchmove = function (e) {
          var o, t, n, i;
          1 === e.targetTouches.length && (t = r, i = (o = e).targetTouches[0].clientY - l, !a(o.target) && (t && 0 === t.scrollTop && 0 < i ? v(o) : (n = t) && n.scrollHeight - n.scrollTop <= n.clientHeight && i < 0 ? v(o) : o.stopPropagation()));
        }, d || (document.addEventListener("touchmove", v, t ? {
          passive: !1
        } : void 0), d = !0));
      }
    } else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
  }, exports.clearAllBodyScrollLocks = function () {
    n && (i.forEach(function (e) {
      e.targetElement.ontouchstart = null, e.targetElement.ontouchmove = null;
    }), d && (document.removeEventListener("touchmove", v, t ? {
      passive: !1
    } : void 0), d = !1), l = -1), n ? f() : r(), i = [];
  }, exports.enableBodyScroll = function (o) {
    o ? (i = i.filter(function (e) {
      return e.targetElement !== o;
    }), n && (o.ontouchstart = null, o.ontouchmove = null, d && 0 === i.length && (document.removeEventListener("touchmove", v, t ? {
      passive: !1
    } : void 0), d = !1)), n ? f() : r()) : console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");
  };
});

// VH Hack for mobile web browsers -- making 100vh the same everywhere
//===========================================
/* 
To use, set a css property using the new var in a calc. Ex:
.class {
	height: calc(var(--vh, 1vh) * 100);
}
*/
//=====================================================================
var vh = window.innerHeight * 0.01;
function setVH() {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  $("body").get(0).style.setProperty("--vh", vh + 'px');
}
$(window).resize(function () {
  setVH();
});
$(document).ready(function () {
  setVH();
});

// nav
//===========================================
// function resizeNav() {
// 	if ($(document).scrollTop() > 100){
// 		$("body").addClass("scrolled");
// 	} else {
// 		$("body").removeClass("scrolled");
// 	}
// }
// resizeNav();
// $(document).on("scroll", function(){
// 	resizeNav();
// });
var menuBtn = $('#menu-btn'),
  navWrap = $('.mobileNav'),
  anchor = $('.mobileNav .primary a[href*="#"]');
function navConditional(thisObj) {
  if ($('body').hasClass('nav-open')) {
    $(thisObj).removeClass('open');
    $('body').removeClass('nav-open');
    $('#header').removeClass('nav-open');
    bodyScrollLock.enableBodyScroll(navWrap);
  } else {
    $(thisObj).addClass('open');
    $('body').addClass('nav-open');
    $('#header').addClass('nav-open');
    bodyScrollLock.disableBodyScroll(navWrap);
  }
}
function mobileNavLinks() {
  if (window.outerWidth < 768) {
    anchor.click(function () {
      menuBtn.removeClass('open');
      $('body').removeClass('nav-open');
      $('#header').removeClass('nav-open');
      bodyScrollLock.enableBodyScroll(navWrap);
    });
  }
}
menuBtn.click(function () {
  navConditional(this);
});
$(window).resize(function () {
  mobileNavLinks();
});
$(document).ready(function () {
  mobileNavLinks();
});

// header video
//===========================================
var vidID = '2yiePgk0uWU',
  ytParent = document.querySelector('.section--banner .background'),
  ytThumb = document.querySelector('.section--banner .thumbnail');
var ytTag = document.createElement('script');
ytTag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementById('mainjs');
firstScriptTag.parentNode.insertBefore(ytTag, firstScriptTag);
var player;

// Set the player options

var playerOptions = {
  // Autoplay + mute has to be activated (value = 1) if you want to autoplay it everywhere 
  // Chrome/Safari/Mobile
  autoplay: 1,
  mute: 1,
  autohide: 1,
  modestbranding: 1,
  rel: 0,
  showinfo: 1,
  controls: 0,
  disablekb: 1,
  enablejsapi: 1,
  iv_load_policy: 3,
  // For looping video you have to have loop to 1
  // And playlist value equal to your currently playing video
  loop: 1,
  playlist: vidID
};
function onPlayerReady(event) {
  event.target.playVideo();
  // Get the duration of the currently playing video
  var videoDuration = event.target.getDuration();
  // When the video is playing, compare the total duration
  // To the current passed time if it's below 2 and above 0,
  // Return to the first frame (0) of the video
  // This is needed to avoid the buffering at the end of the video
  // Which displays a black screen + the YouTube loader
  setInterval(function () {
    var videoCurrentTime = event.target.getCurrentTime();
    var timeDifference = videoDuration - videoCurrentTime;
    if (2 > timeDifference > 0) {
      event.target.seekTo(0);
    }
  }, 1000);
}
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    ytThumb.remove();
  }
  // if (ytParent.getElementsByTagName('iframe')[0]) {
  // 	ytThumb.remove();
  // } else {
  // 	console.log('vid error');
  // }
}

function onYouTubeIframeAPIReady() {
  player = new YT.Player('ytPlayer', {
    height: '1280',
    width: '720',
    videoId: vidID,
    playerVars: playerOptions,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// nav scroll effect
//===========================================
var nav = document.querySelector('#header'),
  sectionOneOffset = document.querySelector('.section--prog').offsetTop,
  navMargin = parseInt(getComputedStyle(nav)['margin-top'], 10),
  navHeight = nav.offsetHeight + navMargin,
  bgOpacity = 0,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop,
  opacityValue = scrollTop / (sectionOneOffset - navHeight);
var scrollAdjustments = function scrollAdjustments() {
  // make changes
  if (opacityValue > 1) {
    opacityValue = 1;
  }
  bgOpacity = opacityValue;
  nav.style.backgroundColor = "rgba(52 131 236 / ".concat(bgOpacity, ")");
  if (bgOpacity == 1) {
    $("body").get(0).style.setProperty("--navBgColor", "rgba(52 131 236 / ".concat(bgOpacity, ")"));
  } else {
    $("body").get(0).style.setProperty("--navBgColor", '');
  }
};
var resizeNav = function resizeNav() {
  if (scrollTop >= sectionOneOffset - navHeight) {
    if (!nav.classList.contains('scrolled')) {
      nav.classList.add('scrolled');
    }
  } else {
    nav.classList.remove('scrolled');
  }
};
scrollAdjustments();
resizeNav();
window.addEventListener("scroll", function () {
  // query current position
  navHeight = nav.offsetHeight + navMargin, scrollTop = window.pageYOffset || document.documentElement.scrollTop, opacityValue = scrollTop / (sectionOneOffset - navHeight);
  // make changes
  scrollAdjustments();
  // nav resize
  resizeNav();
});

// Twitch API
//===========================================
var clinetId = "pb9yjlxrxsoonymo0d2vuc1j5k1s73";
var clinetSecret = "dm97lwseef06pld7z7lx3oou1jvpe1";
function getTwitchAuthorization() {
  var url = "https://id.twitch.tv/oauth2/token?client_id=".concat(clinetId, "&client_secret=").concat(clinetSecret, "&grant_type=client_credentials");
  return fetch(url, {
    method: "POST"
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    return data;
  });
}
function getStreams() {
  return _getStreams.apply(this, arguments);
} // inspect api json response with this quick snippet
// function renderStreams(data) {
// 	console.log(data);
// }
function _getStreams() {
  _getStreams = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var users, endpoint, authorizationObject, access_token, expires_in, token_type, authorization, headers;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          // const users = ['soap','adeenthequeen','veraneka','eyelashTV','warcraft','naguura','sco','naowh','gingitv','hazelnuttygames','cdewx','fragnance']; //testing array
          users = ['samthepackleader', 'bowett', 'edalamay', 'asherrthered']; // live array
          endpoint = "https://api.twitch.tv/helix/streams?user_login=" + users.join('&user_login=');
          _context.next = 4;
          return getTwitchAuthorization();
        case 4:
          authorizationObject = _context.sent;
          access_token = authorizationObject.access_token, expires_in = authorizationObject.expires_in, token_type = authorizationObject.token_type; //token_type first letter must be uppercase    
          token_type = token_type.substring(0, 1).toUpperCase() + token_type.substring(1, token_type.length);
          authorization = "".concat(token_type, " ").concat(access_token);
          headers = {
            authorization: authorization,
            "Client-Id": clinetId
          };
          fetch(endpoint, {
            headers: headers
          }).then(function (res) {
            return res.json();
          }).then(function (data) {
            return renderStreams(data);
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _getStreams.apply(this, arguments);
}
function renderStreams(data) {
  var streams = data.data;
  var streamsContainer = document.querySelector(".streamers");
  if (streams.length > 0) {
    streams.forEach(function (stream, i) {
      var thumbnail = stream.thumbnail_url,
        title = stream.title,
        viewer_count = stream.viewer_count,
        user_name = stream.user_name,
        user_login = stream.user_login,
        game_name = stream.game_name;
      if (game_name == 'World of Warcraft') {
        var hdThumbnail = thumbnail.replace("{width}", "533").replace("{height}", "300");
        var streamerBlock = document.createElement('div');
        streamerBlock.className = "streamer";
        streamerBlock.dataset.user = user_login;
        // Create streamer block
        streamerBlock.innerHTML = "\n\t\t\t\t\t\t<img class=\"streamer--preview\" src=\"".concat(hdThumbnail, "\" />\n\t\t\t\t\t\t<h3 class=\"streamer--name\">").concat(user_name, "</h3>\n\t\t\t\t\t\t<p class=\"streamer--views\">\n\t\t\t\t\t\t\t").concat(viewer_count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), "\n\t\t\t\t\t\t</p>\n\t\t\t\t\t");
        // add event listener to swap stream on click
        streamerBlock.addEventListener('click', function (elem) {
          twitchWrapper.innerHTML = '';
          twitchPlayer = new Twitch.Player("twitch", {
            channel: user_login,
            // TODO: Change this to the streams username you want to embed
            width: 640,
            height: 360,
            theme: 'dark',
            layout: 'video-with-chat',
            parent: ['localhost', 'commit-guild.com']
          });
          elems = document.querySelectorAll('.streamer');
          [].forEach.call(elems, function (el) {
            el.classList.remove("active");
          });
          streamerBlock.classList.add('active');
        });
        streamsContainer.appendChild(streamerBlock);
      }
    });
    // create stream
    var token = 'twbpwntxuc55tz32fabgjxovvnaupq',
      activeStreamers = document.querySelectorAll('.streamer'),
      firstStreamer = activeStreamers[0].dataset.user,
      twitchWrapper = document.getElementById('twitch'),
      twitchOptions = {
        channel: firstStreamer,
        // TODO: Change this to the streams username you want to embed
        width: 640,
        height: 360,
        theme: 'dark',
        layout: 'video-with-chat',
        parent: ['localhost', 'commit-guild.com']
      };
    var twitchPlayer = new Twitch.Player("twitch", twitchOptions);
    // set active button
    activeStreamers[0].classList.add('active');
  }
}
getStreams();

// CE Kills Component
//===========================================
var url = '/js/bossKills.json';
function createKillBlocks(data) {
  var output = data.map(function (kill) {
    if (kill.killed == true) {
      return "\n\t\t\t\t\t<a id=\"".concat(kill.slug, "\" href=\"").concat(kill.externalUrl, "\" target=\"_blank\" rel=\"noopener\" class=\"block\">\n\t\t\t\t\t\t<div class=\"bg\">\n\t\t\t\t\t\t\t<img src=\"").concat(kill.img, "\" alt=\"").concat(kill.boss, "\">\n\t\t\t\t\t\t\t<div class=\"overlay\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<h3>").concat(kill.boss, "</h3>\n\t\t\t\t\t\t<time class=\"date\">").concat(kill.date, "</time>\n\t\t\t\t\t\t<div class=\"rank\">").concat(kill.rank, "</div>\n\t\t\t\t\t</a>\n\t\t\t\t");
    }
  }).join('');

  // Get the app element
  var container = document.getElementById('bossKills');
  // Create markup
  container.innerHTML = output;
}
function createProgBlocks(data) {
  var output = data.map(function (boss) {
    return "\n\t\t\t\t<div class=\"boss\" data-boss=\"".concat(boss.slug, "\">\n\t\t\t\t\t<img src=\"/img/").concat(boss.raid, "/").concat(boss.slug, ".png\" alt=\"").concat(boss.name, "\" width=\"145\">\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<div class=\"killDate\">\n\t\t\t\t\t\t\t<div class=\"killDate--tooltip\"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t").concat(function () {
      if (boss.video) {
        return "\n\t\t\t\t\t\t\t\t\t<a class=\"video\" href=\"https://www.youtube.com/watch?v=".concat(boss.video, "\" target=\"_blank\" rel=\"noopener\" data-tooltip=\"Watch Kill Video\" data-position=\"top\"><img src=\"/img/youtube.svg\" alt=\"YouTube\"></a>\n\t\t\t\t\t\t\t\t");
      } else {
        return '';
      }
    }(), "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t");
  }).join('');

  // Get the app element
  var container = document.querySelector('.raidProg');
  // Create markup
  container.innerHTML = output;
  updateProgData();
}
fetch(url).then(function (response) {
  return response.json();
}).then(function (data) {
  createKillBlocks(data.ceKills);
  createProgBlocks(data.progKills);
});

// Globals
//===========================================
var region = 'us',
  realm = 'stormrage',
  guild = 'commit',
  difficulty = 'mythic';
var raids = ['aberrus-the-shadowed-crucible', 'vault-of-the-incarnates', 'sepulcher-of-the-first-ones', 'sanctum-of-domination', 'castle-nathria', 'nyalotha-the-waking-city'];
var bosses = ['scalecommander-sarkareth', 'raszageth-the-stormeater', 'the-jailer', 'sylvanas-windrunner', 'sire-denathrius', 'nzoth-the-corruptor'];
var progRaid = 'aberrus-the-shadowed-crucible';
var progBosses = ['kazzara-the-hellforged', 'the-amalgamation-chamber', 'the-forgotten-experiments', 'assault-of-the-zaqali', 'rashok-the-elder', 'the-vigilant-steward-zskarn', 'magmorax', 'echo-of-neltharion', 'scalecommander-sarkareth'];
function makeTitle(slug) {
  var words = slug.split('-');
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(' ');
}

// Add kill data to current prog bosses
//===========================================
function updateProgData() {
  progBosses.forEach(function (boss, index) {
    var bossEndpoint = "https://raider.io/api/v1/guilds/boss-kill?region=".concat(region, "&realm=").concat(realm, "&guild=").concat(guild, "&raid=").concat(progRaid, "&boss=").concat(boss, "&difficulty=").concat(difficulty);
    var container = document.querySelector(".raidProg .boss[data-boss=".concat(boss, "]")),
      infoBlock = container.querySelector('.killDate--tooltip');
    var bossName = makeTitle(boss);
    fetch(bossEndpoint).then(function (response) {
      return response.json();
    }).then(function (data) {
      if (data.kill) {
        var killDate = new Date(data.kill.defeatedAt).toLocaleDateString('en-us', {
          year: "numeric",
          month: "short",
          day: "numeric"
        });
        container.classList.add('defeated');
        // infoBlock.setAttribute('data-tooltip',`${bossName} Killed on ${killDate}`);
        // infoBlock.setAttribute('data-position','top');
        infoBlock.innerHTML = "".concat(bossName, " <br>Killed on ").concat(killDate);
      }
    });
  });
}
// Construct current prog bosses block w/ kill data 
/* 
	moved away from this for a few reasons
	- The forEach loop was outputting the content in a random order.
	- attempted to use a promise to run a sort and output method after generating the content in the forEach loop,
	  but this relied on a timeOut function that felt too arbitrary. Since this content is fairly static, I figured
	  it made more sense to build it statically, and just update it with dynamic meta data
*/
//===========================================

// let bossProgArray = [];
// let createProgBosses = new Promise((resolve, reject) => {
// 	let i = 0;
// 	progBosses.forEach((boss,index) => {
// 		const bossEndpoint = `https://raider.io/api/v1/guilds/boss-kill?region=${region}&realm=${realm}&guild=${guild}&raid=${progRaid}&boss=${boss}&difficulty=${difficulty}`;
// 		const imgUrl = `/img/${progRaid}/${boss}.png`;
// 		const wrapper = document.querySelector('.raidProg');
// 		const newDiv = document.createElement('div');
// 		const newImg = document.createElement('img');
// 		newImg.src = imgUrl;
// 		newImg.width = 145;
// 	console.log(bossEndpoint);
// 		newDiv.classList.add('boss')
// 		newDiv.id = "boss_0"+index;
// 		newDiv.appendChild(newImg);

// 		fetch(bossEndpoint)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				if (data.kill) {
// 					newDiv.classList.add('defeated');
// 				}
// 				// write to array
// 				bossProgArray.push({key: index,obj : newDiv});
// 			});
// 		i++;
// 	});
// 	if (i === progBosses.length) {
// 		// resolve('done');
// 		setTimeout(() => resolve("done"), 1000);
// 	}
// });
// createProgBosses.then((result) => {
// 	const wrapper = document.querySelector('.raidProg');
// 	// sort array
// 	bossProgArray.sort(function(a, b) {
// 		var keyA = a.key,
// 			keyB = b.key;
// 		// Compare the 2 dates
// 		if (keyA < keyB) return -1;
// 		if (keyA > keyB) return 1;
// 		return 0;
// 	});
// 	// output array to DOM
// 	bossProgArray.forEach((boss) => {
// 		wrapper.appendChild(boss.obj);
// 	});
// });

// Endpoints
// const guildProfile = `https://raider.io/api/v1/guilds/profile?region=${region}&realm=${realm}&name=${guild}&fields=raid_progression%2Craid_rankings`,
// const bossRanking = `https://raider.io/api/v1/raiding/boss-rankings?raid=${raid}&boss=${boss}&difficulty=${difficulty}&region=${region}&realm=${realm}`;

// Grabs meta data for CE kill blocks
//===========================================
raids.forEach(function (raid, index) {
  var boss = bosses[index];
  var bossRanking = "https://raider.io/api/v1/raiding/boss-rankings?raid=".concat(raid, "&boss=").concat(boss, "&difficulty=").concat(difficulty, "&region=").concat(region, "&realm=").concat(realm);
  fetch(bossRanking).then(function (response) {
    return response.json();
  }).then(function (data) {
    var _data = data.bossRankings;
    _data.forEach(function (entry) {
      if (entry.guild.name === 'Commit') {
        var rankElm = document.querySelector("#".concat(boss, " .rank")),
          dateElm = document.querySelector("#".concat(boss, " .date")),
          killDate = new Date(entry.encountersDefeated[0].firstDefeated).toLocaleDateString('en-us', {
            month: "long",
            day: "numeric",
            year: "numeric"
          });
        rankElm.innerHTML = 'US ' + entry.regionRank;
        dateElm.innerHTML = killDate;
        // console.log(boss+' Kill Date: '+killDate);
      }
    });
  });
  // console.log(raid, boss);
});
