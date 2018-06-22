(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'h1',
      { className: (0, _classnames2.default)('f1 f-serif fw4 mt0 mb3 tc', props.className) },
      props.children
    ),
    props.withoutTilde ? null : _react2.default.createElement(
      'p',
      { className: 'ma0 tc' },
      _react2.default.createElement('img', { src: _tilde2.default, alt: '', className: 'mw3' })
    )
  );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(50);

var _classnames2 = _interopRequireDefault(_classnames);

var _tilde = __webpack_require__(51);

var _tilde2 = _interopRequireDefault(_tilde);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _Animate = __webpack_require__(23);

var _Animate2 = _interopRequireDefault(_Animate);

var _d3Ease = __webpack_require__(13);

var _logoFull = __webpack_require__(18);

var _logoFull2 = _interopRequireDefault(_logoFull);

var _slogan = __webpack_require__(11);

var _slogan2 = _interopRequireDefault(_slogan);

var _iconCart = __webpack_require__(61);

var _iconCart2 = _interopRequireDefault(_iconCart);

var _iconMenu = __webpack_require__(62);

var _iconMenu2 = _interopRequireDefault(_iconMenu);

var _iconClose = __webpack_require__(14);

var _iconClose2 = _interopRequireDefault(_iconClose);

var _iconFacebook = __webpack_require__(19);

var _iconFacebook2 = _interopRequireDefault(_iconFacebook);

var _iconInstagram = __webpack_require__(20);

var _iconInstagram2 = _interopRequireDefault(_iconInstagram);

var _iconEmail = __webpack_require__(21);

var _iconEmail2 = _interopRequireDefault(_iconEmail);

var _Footer = __webpack_require__(10);

var _Footer2 = _interopRequireDefault(_Footer);

var _Cart = __webpack_require__(63);

var _Cart2 = _interopRequireDefault(_Cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      menuOpen: false,
      cartOpen: false
    }, _this.doToggleMenu = function (e) {
      e && e.preventDefault();
      _this.setState({ menuOpen: !_this.state.menuOpen });
    }, _this.doToggleCart = function (e) {
      e.preventDefault();
      _this.setState({ cartOpen: !_this.state.cartOpen });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Layout, [{
    key: 'renderSubmenu',
    value: function renderSubmenu(config) {
      return _react2.default.createElement(
        _Animate2.default,
        {
          show: !this.state.menuOpen,
          start: { opacity: 0, translateX: -100 },
          enter: {
            opacity: [1],
            translateX: [0],
            timing: { duration: 300, ease: _d3Ease.easeQuadOut }
          } },
        function (_ref2) {
          var opacity = _ref2.opacity,
              translateX = _ref2.translateX;
          return _react2.default.createElement(
            'div',
            {
              className: 'flex items-center justify-between bb b--navy absolute absolute--fill',
              style: { opacity: opacity, transform: 'translateX(' + translateX + '%)' } },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: config.to, className: 'lh-copy f5 fw6' },
              config.name
            ),
            _react2.default.createElement(
              'ul',
              { className: 'list ma0 tr f5' },
              config.menus.map(function (menu) {
                return _react2.default.createElement(
                  'li',
                  { className: 'mb2', key: menu.label },
                  _react2.default.createElement(
                    _reactStatic.Link,
                    _extends({ className: 'fw3' }, menu.link),
                    menu.label
                  )
                );
              })
            )
          );
        }
      );
    }
  }, {
    key: 'renderMenu',
    value: function renderMenu() {
      return _react2.default.createElement(
        'div',
        {
          className: 'relative flex items-center',
          style: this.props.submenu || this.state.menuOpen ? { height: '10rem' } : {} },
        _react2.default.createElement(
          _Animate2.default,
          {
            show: this.state.menuOpen,
            start: { opacity: 0, translateX: 100 },
            enter: {
              opacity: [1],
              translateX: [0],
              timing: { duration: 300, ease: _d3Ease.easeQuadOut }
            },
            leave: {
              translateX: [100],
              opacity: [0],
              timing: { duration: 300, ease: _d3Ease.easeQuadOut }
            } },
          function (_ref3) {
            var opacity = _ref3.opacity,
                translateX = _ref3.translateX;
            return _react2.default.createElement(
              'ul',
              {
                className: 'list ma0 pa0 absolute absolute--fill',
                style: { opacity: opacity, transform: 'translateX(' + translateX + '%)' } },
              _react2.default.createElement(
                'li',
                { className: 'tr pv3 db bb b--navy' },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/about' },
                  'About Us'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'tr pv3 db bb b--navy' },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/how-to-order' },
                  'How to Order'
                )
              ),
              _react2.default.createElement(
                'li',
                { className: 'tr pv3 db bb b--navy' },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/order-now' },
                  'Order Now'
                )
              )
            );
          }
        ),
        this.props.submenu != null ? this.renderSubmenu(this.props.submenu) : null
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'main',
          null,
          _react2.default.createElement(
            'div',
            { className: 'pa2 pa0-l grid grid-1 grid-11-l grid-col-gap1' },
            _react2.default.createElement(
              'div',
              { className: 'grid-col-span-2-l' },
              _react2.default.createElement(
                'div',
                { className: 'flex items-center justify-between bb b--navy pv3-l' },
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/' },
                  _react2.default.createElement('img', { src: _logoFull2.default, alt: '', style: { width: '9rem' } })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'mt2' },
                  _react2.default.createElement(
                    'a',
                    { className: 'ml3', href: '#', onClick: this.doToggleCart },
                    _react2.default.createElement('img', { src: _iconCart2.default, alt: '', style: { width: '24px' } })
                  ),
                  _react2.default.createElement(
                    'a',
                    {
                      className: 'ml3 outline-transparent',
                      href: '#',
                      onClick: this.doToggleMenu },
                    _react2.default.createElement('img', {
                      src: this.state.menuOpen ? _iconClose2.default : _iconMenu2.default,
                      alt: '',
                      style: { width: '24px' }
                    })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'pa2 pa0-l grid grid-1 grid-11-l grid-rows-3 grid-col-gap1 grid-row-gap1' },
            _react2.default.createElement(
              'div',
              { className: 'grid-col-span-2-l' },
              this.renderMenu(),
              _react2.default.createElement(
                'div',
                { className: 'bb b--navy flex items-center justify-between pv1' },
                _react2.default.createElement('img', { src: _slogan2.default, alt: '', className: 'w-50' }),
                _react2.default.createElement(
                  'ul',
                  { className: 'list ma0 pa0 flex items-center' },
                  _react2.default.createElement(
                    'li',
                    { className: 'mh1' },
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      _react2.default.createElement('img', {
                        src: _iconFacebook2.default,
                        alt: '',
                        style: { width: '20px' }
                      })
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'mh1' },
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      _react2.default.createElement('img', {
                        src: _iconInstagram2.default,
                        alt: '',
                        style: { width: '20px' }
                      })
                    )
                  ),
                  _react2.default.createElement(
                    'li',
                    { className: 'mh1' },
                    _react2.default.createElement(
                      'a',
                      { href: '#' },
                      _react2.default.createElement('img', { src: _iconEmail2.default, alt: '', style: { width: '20px' } })
                    )
                  )
                )
              )
            ),
            this.props.header
          ),
          this.props.children
        ),
        _react2.default.createElement(_Footer2.default, { doOpenOrderForm: this.doToggleCart }),
        _react2.default.createElement(_Cart2.default, { isOpen: this.state.cartOpen, onRequestClose: this.doToggleCart })
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.makeLabels = makeLabels;
var MENU_STUDIO = exports.MENU_STUDIO = {
  name: 'Flower Studio',
  to: '/studio',
  menus: [{ link: { to: '/studio/introduction' }, label: 'Introduction' }, { link: { to: '/studio/flower-design' }, label: 'Flower Design' }, { link: { to: '/studio/diy' }, label: 'DIY & NHKH' }]
};

var MENU_STATION = exports.MENU_STATION = {
  name: 'Flower Station',
  to: '/station',
  menus: [{ link: { to: '/station/recommend' }, label: 'Recommend' }, { link: { to: '/station/arrangement' }, label: 'Arrangement' }, { link: { to: '/station/bouquet' }, label: 'Bouquet' }, { link: { to: '/station/styling' }, label: 'Styling' }, { link: { to: '/station/event' }, label: 'Event' }]
};

var BOUQUET_CATEGORIES = exports.BOUQUET_CATEGORIES = {
  ALL: '',
  ROUND_PARALELL: 'Round and Parallel Design',
  RUSTIC: 'Rustic Design',
  WEDDING: 'Wedding Design',
  EVENT: 'Event Design'
};

var ARRANGEMENT_CATEGORIES = exports.ARRANGEMENT_CATEGORIES = {
  ALL: '',
  BOX: 'Box Design',
  VASE: 'Vase Design',
  STAND: 'Stand Design',
  SPECIAL: 'Special Design'
};

var NUANCES = exports.NUANCES = {
  ALL: '',
  BRIGHT: 'Bright and Gorgeous',
  FRESH: 'Fresh and Natural',
  SIMPLE: 'Simple and Modern',
  CUTE: 'Cute',
  OTHER: 'Other'
};

function makeLabels(obj, valueOfAll) {
  return Object.entries(obj).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        value = _ref2[1];

    return {
      value: value,
      label: value === valueOfAll ? 'All' : value
    };
  });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _FlowerModal = __webpack_require__(74);

var _FlowerModal2 = _interopRequireDefault(_FlowerModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlowerGrid = function (_React$Component) {
  _inherits(FlowerGrid, _React$Component);

  function FlowerGrid() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FlowerGrid);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FlowerGrid.__proto__ || Object.getPrototypeOf(FlowerGrid)).call.apply(_ref, [this].concat(args))), _this), _this.state = { modalVisible: false, currentProduct: null, currentUrl: null }, _this.doShowFlower = function (currentProduct) {
      return function (e) {
        e.preventDefault();

        _this.setState({
          currentProduct: currentProduct,
          modalVisible: true,
          currentUrl: _this.props.location.pathname
        }, function () {
          // Update URL but don't redraw
          window.history.pushState(_this.props.location.state, currentProduct.name, currentProduct.url);
        });
      };
    }, _this.doCloseFlower = function () {
      return _this.setState(function (prevState) {
        // Restore URL
        window.history.pushState(_this.props.location.state, '', prevState.currentUrl);
        return { modalVisible: false, currentProduct: null, currentUrl: null };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FlowerGrid, [{
    key: 'getSpan',
    value: function getSpan(spans, index) {
      return spans[index % spans.length];
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var spans = this.props.spans || [5, 3, 3, 3, 3, 5];

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(_FlowerModal2.default, {
          product: this.state.currentProduct,
          isOpen: this.state.modalVisible,
          onRequestClose: this.doCloseFlower
        }),
        _react2.default.createElement(
          'div',
          { className: 'pa2 pa0-l grid grid-11-l grid-rows-4 grid-col-gap1 mv3' },
          this.props.items.map(function (item, index) {
            var props = _extends({
              key: item.id || index,
              className: 'cover bg-center mb3 grid-col-span-' + _this2.getSpan(spans, index) + '-l ' + (item.url != null ? 'pointer' : ''),
              style: { backgroundImage: 'url(' + item.image + ')' }
            }, item.url != null ? { onClick: _this2.doShowFlower(item) } : {});

            return _react2.default.createElement('div', props);
          })
        )
      );
    }
  }]);

  return FlowerGrid;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouter)(FlowerGrid);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var station = [{ text: 'Flower Station', to: '/station' }, { text: 'Recommend', to: '/station/recommend' }, { text: 'Arrangement', to: '/station/arrangement' }, { text: 'Bouquet', to: '/station/bouquet' }, { text: 'Styling', to: '/station/styling' }, { text: 'Event', to: '/station/event' }];

  var studio = [{ text: 'Flower Studio', to: '/studio' }, { text: 'Introduction', to: '/studio/introduction' }, { text: 'Flower design', to: '/studio/flower-design' }, { text: 'DIY & NHKH', to: '/studio/diy' }];

  return _react2.default.createElement(
    'footer',
    { className: 'flex flex-wrap pa2 pv4-l bt b--navy f7' },
    _react2.default.createElement(
      'div',
      { className: 'w-50 w-15-l flex flex-column items-center justify-center' },
      _react2.default.createElement(
        _reactStatic.Link,
        { to: '/', className: 'mt0 mb3' },
        _react2.default.createElement('img', { className: 'mw4', src: _logoFull2.default, alt: '' })
      ),
      _react2.default.createElement(
        'p',
        { className: 'mt0 mb3' },
        _react2.default.createElement('img', { className: 'mw4', src: _slogan2.default, alt: '' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'w-50 w-20-l tc tl-l' },
      _react2.default.createElement(
        'p',
        { className: 'lh-copy mv1' },
        'hello@eljulio.com'
      ),
      _react2.default.createElement(
        'a',
        { href: 'tel:0984802497', className: 'lh-copy mv1' },
        '0984 802 497'
      ),
      _react2.default.createElement(
        'ul',
        { className: 'list ma0 pa0 flex items-center justify-center justify-start-l mt4' },
        _react2.default.createElement(
          'li',
          { className: 'mr2' },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '#' },
            _react2.default.createElement('img', { src: _iconFacebook2.default, alt: '' })
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'mr2' },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '#' },
            _react2.default.createElement('img', { src: _iconInstagram2.default, alt: '' })
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'mr2' },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '#' },
            _react2.default.createElement('img', { src: _iconEmail2.default, alt: '' })
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'w-100 w-50-l flex mv2 mv0-l' },
      _react2.default.createElement(
        'ul',
        { className: 'list ma0 mr3 pl0 pr4-l' },
        station.map(function (link) {
          return _react2.default.createElement(
            'li',
            { key: link.to },
            _react2.default.createElement(
              _reactStatic.Link,
              { className: 'db mb2', to: link.to },
              link.text
            )
          );
        })
      ),
      _react2.default.createElement(
        'ul',
        { className: 'list ma0 mr3 pl0 pr4-l' },
        studio.map(function (link) {
          return _react2.default.createElement(
            'li',
            { key: link.to },
            _react2.default.createElement(
              _reactStatic.Link,
              { className: 'db mb2', to: link.to },
              link.text
            )
          );
        })
      ),
      _react2.default.createElement(
        'ul',
        { className: 'list ma0 mr3 pl0 pr4-l' },
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactStatic.Link,
            { className: 'db mb2', to: '/about' },
            'About'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            _reactStatic.Link,
            { className: 'db mb2', to: '/how-to-order' },
            'How to Order'
          )
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'a',
            { className: 'db mb2', href: '#', onClick: props.doOpenOrderForm },
            'Order Now'
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'w-100 w-15-l tc tr-l mt3 mt0-l' },
      new Date().getFullYear(),
      ' \xA9 Eljulio. All right reserved.'
    )
  );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(1);

var _logoFull = __webpack_require__(18);

var _logoFull2 = _interopRequireDefault(_logoFull);

var _slogan = __webpack_require__(11);

var _slogan2 = _interopRequireDefault(_slogan);

var _iconFacebook = __webpack_require__(19);

var _iconFacebook2 = _interopRequireDefault(_iconFacebook);

var _iconInstagram = __webpack_require__(20);

var _iconInstagram2 = _interopRequireDefault(_iconInstagram);

var _iconEmail = __webpack_require__(21);

var _iconEmail2 = _interopRequireDefault(_iconEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO4AAAAiCAYAAABYxOXtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YWQ1YzE5Zi05ODNlLTQ3YWUtOGM1OC1mMDc2ZjUxNDA0MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkY5QzY0Nzg2MEIyMTFFOEEzNUJDNTE2QTc4OTc0QkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkY5QzY0Nzc2MEIyMTFFOEEzNUJDNTE2QTc4OTc0QkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzgyYzcyMDUtOGM1NS00MjlmLWFhZGEtODJhYzIwZGY3Y2I1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NmY4NTM2ZjMtNWFkZC05ZjQxLWFiZGQtMjI5MWUwYWRmOWM4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Sb5rzAAAEW1JREFUeNrsXQlYVGUXvnckcjfTYpYglR1FkVUQEBBZXVABFQlH1ExTM6u/+i3zr2xTs820+lXcFc0lN1xwF1xLQxa31JRhUEkry3K7/3tmztCIMwhozy95z/Oc5xvufNv9vvOe7ftGRUmSBJlkkql2kSgDVyaZajFwRVGsduM6cQPdUcwHK8FP3lg765qleg2i05orJGm+KEghKNtd2jj/mLz0Mlmj7ZqYLpDG/4qCeDq4eF2ovCJ/kQmvipp2ANB6otgGLgM3oz4t1asXk/YYit3gm/QnAVxefpmsgzY6DsVy8GmwvbwilsmmhqAlC7sWPAHsAL4Ea3u9Yr26MQPqAs9r8HELeDW4Pe2NvOwyWaJtmmgvFIvASeCh4M3yqtwj4AK0ZKUXMhgPgt8H+1mpPglMgB4LPgB+E27yVXnZZapIWzVRjVAsAY8DNwQHgLXyytw7izsGrAGPAmeDJ8La5lWsZBurjYdD/hQ++oLnggvA0+Qll8kKfQqm3MdS8LcEWsS3l+RlsUzVSk7B2jqj+B6cyNa0BNwFwL1xizaI1TaGWc5XSNLroiAFKiQhDJ87/Lph7kV5yWtOk+1csUuGnZKeLy26L48DVqlDTXMU4nXbblalzRZNVBTqZ6Kdt2jw5sTs0OKsf8s7fjuV47WawF2P4ldOGpA7EwrQlt1mxmO1nwC4fgDrWgB3KAH3t/VzjsvLXn36wM4lHDvzGoQ6DOUvKG+ibIJSNbq08Pz9MMcV6hBbzGkU5jQMZUuUpTzHn+N0W1WVtd2s7lIXsleA+pMZuEpIY3cA94a8+9aBW+WsMkAbiyIK3EEwZpGjLYEW9VpzYuFHLmXQ1pDeU7o+ywmaUrDjC6VHmo4pLaK1bwC+cD/McbkquA7P8U3OdzTsqtumgrWtj8+tqtDFi2wM6J3agZNl0N4jVxlgpFiYElEEyiJ2j89aqbsOnUZAI5yBxY38I2v2KXmZawzcOVjDh7EzfV8qPXpfusYA7qOQncNkcXvodiytTttsdaQdrOwJtF+E9p3wuWOn4vXn5J2/R64ywDgcxVTwLnBPgPa8lXp0WL4Nne4CcHtdXZdRKzYhvl2ECIB04nj8lEKQFi3L21YpULSugXZo0xltls04uucPWaSqTwDuJwDrIMieDtIXHla84ay1urma+Oao0xX1lSiX+RevPnov5lDklCwKClFwO7pYqk3AtbmDe0xu0OvMc8BDANqrVurS2e5HgjGlnwrQVunY5/HO/RoAAAMBgBYAzVfFWxYfuVOb1h0TCGiIhyQntFl/MPcbi9nHjn6xdVCv8Y79WVaTYnFeEa6CZMh608UQuijyDlgnGC+XWKQ0t0BbtKHzaBdSZBTm0fNnnPzcMN7Rz0/sv3k3mzNB5W4D5SG9WlJ0Vy7jdGXbZhD0VAi6B8r3hugPnrRWd47Ktw7q1HuqZN/lqva/TNUxFG2SALyiBN2OqZXVzVJHkGnwQf02KI+hpLk8AyblHmsNtLs0sZTsohMMujOwXzCeaFBy1Pdu1qawVZIS1orcey14K4eB1aJTwVoFgs22eH9oflGFzzMcsmcW3amdPml4HVEB71UhnrZbOPXnmszfphLQuqHIEIznaRSvDrJ0yYLrRqKYB36EDNj1KoL2sc79ElB8wrE2ga+PfVhypzNbM3+wVN8tuKcNwJoK0PwLf9J1y98ZPJd8OnSNB2ieg1BM2LtnzbYg/9gA1CMl0hxc31J/MV6dnaHDdvLcSRhMx1V3ih/DeVwKH3KGOAfEURIOWOuOv73B39VkM95UezyCfl7BvEmgKcTwqqz+x3Ye8BKEkRCcGJQfjNDnkyAKnys9HURj7DiI+/FgpXQbcDOUPg5o/wo+9gM3mafy80wt2ZdvbcwlqiDYJyERYKI2apah39kju43WqcNs4c8ROF4CO/HjP8EzwSS00eHFGyrLgVDc3Jd0LMsXKdka50wKnkysB8DSkearHFeTt/RaVdv/EJAmAnSh6COd50TyRacrP4FTznQZFGa/cYbFK70lPZ+pB4AP5bieFBDdhYioWK9s8OjmGOPSo19+dL3KwAUIKVv8Mi80bfYv4MmWQIu69TkpQYNTomol6pXc6eWbdunvDJB9CkEn4R8BXgX+EjyYwAt+17y+c0gvEpZk1B9vNm+yaimwtsXtA7v54btvWCDOdfCPwztIq3lRF1qaQ1T7SAe0mUUKEEyH/yZLPwpuskXB7e/esZHCMAcpDX/SeJEMBqpPHkchg7la9MYTrRuJkvAC5jOa19uWrYtFmmLnFgLgkAWiiy+LWQCvfaZsYy8aL7v0Eox3yCnZM4AACc4072OW0rsx6tKRy0hezz287gWWxsxUBRr3wHhBgjyYD8A7WUlNrlh/jboTlKxI60R7Zs/rq+X3IqU7G9wjQrfRqpLYqYn1Yjn8QjAeP9L7HgIPq+4a59v3rg8FRfOh9bETjDe0yFsaBTd5L9U54t63CerMhxnxdDm88JaruSd8U23wnZaxcZFl5jfyQknuSV+yB5EC/o95W133oTaCaNiH8azkXuJ1PGxe74J21EMA9hs8hpb30EA/j3qhOZTF0+wR/gVcBiwBh6wZucjPg33AndhNNgcsCVY6bzppQLI0ZCV7VLZ4jaNS60Pwx7LGIaXgey57IWkqQRXRpyFrv/IER8tOiVQ/BQJNGrIu5WtYsAmMw7/P+WalV2B3bIJEoCcXLwHWthDAjWXQHjbf5AifKBHxdyj6HMJzpTG3M1BIA2euyNuqqzjvvh7BCriuA2AJ38Kfm8hbzziSWx6/w+LSehXT/OAm3xIrjW7pTaHAex+e+m5kxX7H2nt64DtYRYk2tR5bFzpyywG/XbH+ZDvX9gADgSsE/BUrOT8Gpz9vOD13H6bPK4Or3IWfxcJNJiETZijbA1AGYXuNFaYX7yMpoSAWyt2mMRepOpgDlt55eGJJztavVR3pnTcKxnP9z0z1V6lDbck9F4xK4QorWBLsvtG6zX9sUHfuy/KU11m3aZMlOdmuiaHjJVLob7BVpkx6LgMiC/FtlUOIw0/0ohDgAFv7Bry+ndnTy3Y7njnLAFrXPi4c8pBSmW7ex3Hv1ESWvZOMkUjuI7jF9gzDycqP4emNWH6XmNoVxw2pD3e4PwO1Lrv7M1gJNWGjZ6DzaSPbsxdC+5HNikW4OHyMCmB+mcddYcniEmACyQPjWJU0Ylf+bhDAShe/HckVZk21jrPLOnxH5n8PPlt0YRpEpykMABSkCaypSDgSzmcvNMSeyoi+DviuDW/yYIewpAuIXdviWQ/WsBPYspBrRre0publrJzWNqh7B4Dpa36evm/Pmi3+AfGIPyUtD02xS0Cob3Qz9AeXX+pG+oOF24lj2dVrDm2eaGneSa1DDBld9Pcyu0M95hblHLBQ1ZM3YrH5w+daeQdjfjMF6/ezH+e1JO9g7DhdQfFbanfKJ+Qivi3Pxk+0c3GH8NEmx7BLmjq6tPACXOX6ZptPViTwWf1hsvrCNKUneQALCKBP6w9lf6X0IsCmMmBpDcO1+m9NCZ5RiHE9eL+/nq/y/xR138eYPRgstC9jkkpys8zmPo7lwR/x7Y2V6pCmdI7LHtRlBl0DtkKkYK6vV0e8y+47Hf/Msgza6O4s2BdZyKnPYYHFayyGLwc03RtgrmmwRkkYv3/7sysqenw32dqT+/qFx+mlmwpaJEWyl+hhSFC59OnF86GQrZSVuHCsXYoSVnYa7+/zrfbNXQVXOYatbOsWO42gPd1poNosrEk/EzW4FGCjNgnskZClXapaPv2qvvewPvxO4YhvL5xLGfE46o5l5buX+6AwRHPxmedfYsBSviWyyceTdksfTbwNuLRpIr/oMnK92P0dzy7Ue+xGEYA7VjgO8ufnt1DdmAGiSOCTDJtIYxHAn6M1Kdu04CInp3oBGNN4nHxeFCcGbMCJ7V8XmsW4k1jrj/UM6gEBl8YxWCjLPdIvIJ4sKLkTZPUGgp9i7Uhj0TU6ckWzNn636RrHuGRZXotvF3ESimXVqu+3/JngGaaEdfWBZY7DvJK53fAFBbu2VqLYW3BpP9zR9xwWMQL9QWClYH6vDy0moc7kUZ8VzzpbsQDRcVBbhdHbSGAr0HJMaZG5AJNX5MaCNnGE/rC5JXqXATrnS2W7lxlApKgGpuu/22GMb72xNmJjrf7AsrSS/bS3BYhxJRaiBPZaCOiLk0tyyz2JpaogR3Y5KaHjtkIdQvvSm8FB882kW1Nr1WFn8PkFlo8PWbn0Ya+l3LPaookSOWNMfbqytSb3+FHex0W5mvg0gNfgDe3VdG1IR0ei8ccISRzuvM3lLdTm7DKJxzQnerd9JO9FTsmL2GMcz32Mgpt86ZhnSjhbPTIMKY77513htgS65S1zZhtAeypUm8C5kUkcbpD8tmRPpINm9ZcFZjGuHRsNWpMLpf2eJSPZn3Mspn0MZrCms+cV/shnk3dbjXFNMSys5xRORtGmTMLzz/CMtHwda8kpFrTyhJJNrLaRgpIdkjSSXUDyy2f/smHejUe69CcwJDWLTJEglMEs9INLNi82Ab+yXw9FmGlQckuSEeMuR4xLMVQXFiayMuNy9q67zMm1yoiOudaa3JvubcNMP078kZ+FZObvKKqCR5bP4YUpKWGyFgM/OvltiVA9IkWlfVflpsf6NWAL6/Ri6RFLFoc2fsZIfb7eUhjP3oWOBWr0YP3BlRXqpLMrSopamKvyC+JQ6Qp7XRl9S3Zft5Kcq8PKui57XwTcrG667RLHuDT2Eyz8IrvV3dgy0d6VZqsjHwMAe/M+uPGa9Qgtzio1hX27NLGxLNhndmvij4uGrgyWnvogD4C8iDXeZ1dWJ5P/E4cFRxnAHXgOBLLZR9v0G8GexiCng/NXVGhLc+t5MmjAVVjKYFa0Qxy2zDQpop2VjDuMPc6nGBMU4rV7bN6nxRzj1mW8kLWObzp9ykZrHd1yjguAxnPSYTqj3wVgvePxANqR+zCFNak7OvUGcHcCmDNhcb+5kjWnfFEBXEqKvILvKEG1n34wjTi3rCqrDYubhv4S4fauQ9sMuMtX7vZcLM4rop4oCRT3qtD3T+g7D3Huyer287Szf3v00QZ8Cu+0e+qJ/ddqMh+4yraYQ39Y/ctYx7Wv6I/8VpN+4CoHQMhdwPuG6g9ZVD6wuFCE4nLs/RnM+QbqSnz1cGH/kr1WM5qwuHBPxQTUPY8yt2fJzl8t1YPFfUc0WB+R7iGviNFtlhDjxuHZGvx9GSVZzmsYfyE+vxlWvOGEpX5yNHEUp/qgjiPK6yh/QJnnV7yqRr80g6tsKyoQoojiWYh9DuJQe5THUXbDXIJghgaijHbOW1BoIavcCG1fRVtnAPdb1P0KcW6VbrHB4gagzQiMsxd9LLBb/HlZheTUw/i+YbOZH5fd6Ry3HLg28em2bMmGc5D8KkCbUdXFAHgpC0dx6gV0+v31dRl3DSqZ/n7KUPpQttWZQAh3Wfd3jwfgPszx8+Moc1AujdBt1P8/1wAx7nQA1wWA2om1SAEYw+Aun70f98sScIewu3OaM5W+AO5NWbRl+icTYlwHAPYYgLsEZTCAG+xScH+C1hy45smpARwTUWwUJINWpgeEXud4mcK9kPsZtBaTU5z5e4gTUrvl/ZTpn06Fjsl0ejGQk2fxroWLCmvL3M2Ba8rSyT9glulBITrqouz4265HFmfVpombA7dpxX/JQiaZ/rHWtlUSXb6goyTDv4VW2+Z/V/+uskwy1WLgLoLQJ0LsfdyOZx6qLfMu/w8M6IP8vxnI9CBRQYskXwD3JmLcKbVt7ia8yhZXpgcLtE/SLxLF7aJC8ETp6H4is6y2AZdIIW+lTA8Y0X0Fuqo4ubaBVo5xZXowra1DYqAgCtkQ9j9hcR3df1jyU210lWXgyvTAUL59bxfI+CEAtxTCPsTj1JKNtfE9bgOuTDLJVAtdZZlkkqn20P8EGACyqR0hcHHa7gAAAABJRU5ErkJggg=="

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flower = __webpack_require__(52);

var _flower2 = _interopRequireDefault(_flower);

var _flower3 = __webpack_require__(53);

var _flower4 = _interopRequireDefault(_flower3);

var _flower5 = __webpack_require__(54);

var _flower6 = _interopRequireDefault(_flower5);

var _flower7 = __webpack_require__(55);

var _flower8 = _interopRequireDefault(_flower7);

var _flower9 = __webpack_require__(56);

var _flower10 = _interopRequireDefault(_flower9);

var _flower11 = __webpack_require__(57);

var _flower12 = _interopRequireDefault(_flower11);

var _flower13 = __webpack_require__(58);

var _flower14 = _interopRequireDefault(_flower13);

var _flower15 = __webpack_require__(59);

var _flower16 = _interopRequireDefault(_flower15);

var _flower17 = __webpack_require__(60);

var _flower18 = _interopRequireDefault(_flower17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_flower2.default, _flower4.default, _flower6.default, _flower8.default, _flower10.default, _flower12.default, _flower14.default, _flower16.default, _flower18.default];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("d3-ease");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YWQ1YzE5Zi05ODNlLTQ3YWUtOGM1OC1mMDc2ZjUxNDA0MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDg5MDU1QTQ3NkI0MTFFODg1RTJDMDk3REE3Q0Y0ODMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDg5MDU1QTM3NkI0MTFFODg1RTJDMDk3REE3Q0Y0ODMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzVmMmM4ZWMtMGIyMi00NDY4LTkxZjUtYzZjZjM3OWJkOGY2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjY5NjEyOTItMGJhMC1lNzRhLTk1ODEtMGZhYjNlMWFlNzJhIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bXfQgQAAAbVJREFUeNrsl71LA0EQxXN+QiwsxEJQbCxs7Ky0UkiliIUgIoIalCg2sfSjUbTSmEJSJIJE8BSLSBCjkFynlbV/Q2obg8HjfAsvcIV3xr31UngDP0h2Z27e7e7MJpplWaFGWlOowRYICAS0OE20ReaVJ6sWL6VWYB0kJPIlGCu3ArQePqgdVMB2ncn3QRx8gFtQlj0DInBWrB7YArt1JN8hVcaWvR7CPFgAJtgDmy6+cb69yZi8qiq4AVEg+vaRw97GwDF9ooxRWoZZJhF2CpZsc4sgZROS9VyGDpYGYXACMjyY4o3PgMYtSCvpAy6WpIgDcMGxZlZI0q9OeAh00Ep0jvnWisfAtO27+Dzul4ARcMdtSPFAhjk2quwucLBhUAAd4BxscFwIWAb3IAJe/mIFhsAj6ATXYIUVIFgFV5x7oK9SAYPAAF0gZ+uMNat1vhx9DMYoETAAiqCbyz8HPr/xMzlXoG+RsZ4E9IES6OVbzfCScbzy6WMwpsRnSAsQvyD6wROYYuf7ySr0fWas7kXAGk/2JHj/xYEVvhPcjpiXMnxlchl7owhX04J/RoGAfy/gS4ABADugXvWCdLbbAAAAAElFTkSuQmCC"

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  return _react2.default.createElement(
    "label",
    { className: "ej-radio" },
    _react2.default.createElement("input", _extends({ type: "radio" }, rest)),
    " ",
    _react2.default.createElement("i", { className: "ej-radio__checkmark" }),
    " ",
    children
  );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

var _reactStatic = __webpack_require__(1);

var _PageHeader = __webpack_require__(3);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Footer = __webpack_require__(10);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = (0, _reactStatic.withSiteData)(function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var styles = Array.from({ length: 8 }, function (_, i) {
        return i + 1;
      }).map(function (i) {
        return {
          backgroundImage: 'url(https://res.cloudinary.com/duqeezi8j/image/upload/v1529417963/ej/flower-' + i + '.jpg)'
        };
      });

      return _react2.default.createElement(
        'div',
        { className: 'ph3-ns' },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'Studio :: El Julio'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'mv4-l pa2 pa0-l grid grid-1 grid-11-l grid-col-gap1 grid-row-gap1 grid-rows-4' },
          _react2.default.createElement('div', {
            className: 'grid-col-span-3-l cover bg-center',
            style: styles[0]
          }),
          _react2.default.createElement(
            'div',
            { className: 'grid-col-span-3-l self-center' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/studio/flower-design' },
              _react2.default.createElement(
                _PageHeader2.default,
                { withoutTilde: true },
                'Flower Design'
              )
            )
          ),
          _react2.default.createElement('div', {
            className: 'grid-col-span-5-l cover bg-center',
            style: styles[1]
          }),
          _react2.default.createElement('div', {
            className: 'grid-col-span-5-l cover bg-center',
            style: styles[2]
          }),
          _react2.default.createElement(
            'div',
            { className: 'grid-col-span-3-l self-center' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/studio/diy' },
              _react2.default.createElement(
                _PageHeader2.default,
                { withoutTilde: true },
                'DIY'
              )
            )
          ),
          _react2.default.createElement('div', {
            className: 'grid-col-span-3-l cover bg-center',
            style: styles[3]
          }),
          _react2.default.createElement(
            'div',
            { className: 'grid-col-span-3-l self-center' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/studio/introduction' },
              _react2.default.createElement(
                _PageHeader2.default,
                { withoutTilde: true },
                'Introduction'
              )
            )
          ),
          _react2.default.createElement('div', {
            className: 'grid-col-span-3-l cover bg-center',
            style: styles[4]
          }),
          _react2.default.createElement('div', {
            className: 'grid-col-span-5-l cover bg-center',
            style: styles[5]
          })
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return _class;
}(_react2.default.Component));

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMoAAABbCAYAAAAyXxpOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YWQ1YzE5Zi05ODNlLTQ3YWUtOGM1OC1mMDc2ZjUxNDA0MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTNDRjE0NzU2MEIzMTFFOEI5RDZDRDVFMTA4MEVGQTEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTNDRjE0NzQ2MEIzMTFFOEI5RDZDRDVFMTA4MEVGQTEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NzgyYzcyMDUtOGM1NS00MjlmLWFhZGEtODJhYzIwZGY3Y2I1IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NmY4NTM2ZjMtNWFkZC05ZjQxLWFiZGQtMjI5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"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YWQ1YzE5Zi05ODNlLTQ3YWUtOGM1OC1mMDc2ZjUxNDA0MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODJGRUNBNUU2MTk1MTFFODk3OEQ4MUQxRUUxMkE0NjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODJGRUNBNUQ2MTk1MTFFODk3OEQ4MUQxRUUxMkE0NjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGJiZDFkOWMtNGZlNS00MzZlLWFhZTgtNjUzYWQwMzY2MmVmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OTVhZWQ5YTMtMmIwMi01MTRiLWE1NTAtMmYyZDFhYTJjNGQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Cl1gSQAAAWFJREFUeNpi/P//PwMtASOrSxRNLWDCws8A4jNA/A2I/xOJvwLxCSCOBzka2UAWNMNXALEtEHcC8Ukg/kWkQ9mB2AaI+6D6U7BZkAZVZAbEj8kIjWNAvB7qkz1Qx6IEUToQtxFhuAIQG0MxG5rcbSCeAMSp2OJAE2o7LsAHxAeA+D40jkBYAou640Csgy2IQOH4E48FOUBsD8QTgfgaVOwdFnU/oGZhWEAImADxZyAuoCSZ4gOg8P5HaswT4wNQypKEYlYgDkWS2wrNLxRZUAHE3kj8VUhseSB+RGkQ1QCxKzTjfYWyYfgVNYLoApQGRe4faCaiSSRTpbAb2hb8RM6BFAAOaG7GsACU/a2oYAHIjKvYLJgBTfOyFBiuBk1tM7El09lA7ADEp5EqHOTCjx+ImaHFNLZgAeX4MmhGXIWrTmaE1kag8lwbiLmIdDkoA14E4mlAvJSulT4jrZstAAEGAB9ATjYDh0psAAAAAElFTkSuQmCC"

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YWQ1YzE5Zi05ODNlLTQ3YWUtOGM1OC1mMDc2ZjUxNDA0MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlDMzFEODA2MTk1MTFFOEIwMjFBOTJGMTkzRDc0RDgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlDMzFEN0Y2MTk1MTFFOEIwMjFBOTJGMTkzRDc0RDgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGJiZDFkOWMtNGZlNS00MzZlLWFhZTgtNjUzYWQwMzY2MmVmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OTVhZWQ5YTMtMmIwMi01MTRiLWE1NTAtMmYyZDFhYTJjNGQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YAW7hAAAAfZJREFUeNq81s9L03Ecx/G2WsYOjZAKaqCIkJQUoetUkJHiJQktjTolHbpWdOw/8NDBo1kdpEKlgg4OESUvom140INekunqECnkZWOxr88PvDa+fNm+fT/G/MCDsX0+38/7/f38XMhxnEO1LKHIzfs1DRCu8FsTXiOLIpwAimr/Rs+XyxFP5wkkMY/H+GGR7Bk8wjd0Y9EbIIIxvMLzfYzGYSX1VP2cR8EdoAP1eOGT4XWcxC/Mud7wHBbwVdkP4oYZDXeAC0gj5+n4LF6iD3+xgxPKeBJPsIl3mNXzab1B0j3Jdch7Om/BEi4qwHGc1mc/Lmms43iAET2XV38VV1GpHMUnZNCOj663yyn7hLL/rDkMtExL5SEalOlulTZ/VN+o9lYB7iqzzD9WT0btem0DmElPBVyiKa0kqwA2h1SoWnu/AKuaxCDFLIJ12wDjuKWJ9iumvgcTtgHMgbeBD4hVaRNT/Xe8tQ1QwB1tInOA3UNUdVF9T6n+ttr7BijvPs88XNFuHtN+2Nan+b6s+jXPc+VTwX3hdOK9zp5chWRO4ZoOxN863LIV2h3T7+YNp90BzFZfwRc8+49LbEiLo9V7XJsxHMAMmjGKLYuO4zqmr6KrNCfeG82M6WXdCcO6A8IBOjdX5k9MoU2r72Au/VCt/7bsCTAAmwJ5YJVoHb4AAAAASUVORK5CYII="

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YWQ1YzE5Zi05ODNlLTQ3YWUtOGM1OC1mMDc2ZjUxNDA0MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERERUJBRjA2MTk1MTFFODgzOTlFRTBFOEMzQTBBNzQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERERUJBRUY2MTk1MTFFODgzOTlFRTBFOEMzQTBBNzQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGJiZDFkOWMtNGZlNS00MzZlLWFhZTgtNjUzYWQwMzY2MmVmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OTVhZWQ5YTMtMmIwMi01MTRiLWE1NTAtMmYyZDFhYTJjNGQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+91tQuQAAAZNJREFUeNq81s8rBGEYwPEd+VVu2uTi6sCBm5KDJBclav1MDpTCAReULQcXibJNu36exMnB36AUSjlstCU3JxcXtqXG+L71KI137Ttmx1Ofw85Mz/Pu8877vmO5rhsJM6yyzpFQC5Roro3hEq9wDWVxjSlvzlJP8j30Yw3zeDccqMrThlV0YAiOt0WDOMYzGvHksxu1uEWVDG7b26JJGXkGyT+0O4U0FiTXjzlQoz7HOLoR85FctaQLE7hCg65AJV5wj7j8i6hB8hrYWMaDTHj5b2+RioQ8bBsUSEpb7XyzrwtHWnWDPpzmeS4m7WzCh+k6+Ao1qhWZvGrN/aiMPi5tjfgtoGITj9Iyb9jSxoTflaxr1QB6vl1XbeuVe06hFVgo0vKGHGFLLU7MyrWMyRI3iQ1Z2aPye1oKRopVQMWhCLybhrZd52Q1B40KvOkKqJ2wtQgFVI47XYEdzKE+QPI6LGFXN8knaMcF1mVnzfloSwsWcSYHV94zeRgzaJbDwySy0uID7Msx+j+HvhX2Z8unAAMA1q9eoPU86isAAAAASUVORK5CYII="

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

var _reactStatic = __webpack_require__(1);

var _flowers = __webpack_require__(12);

var _flowers2 = _interopRequireDefault(_flowers);

var _constants = __webpack_require__(5);

var _PageHeader = __webpack_require__(3);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Layout = __webpack_require__(4);

var _Layout2 = _interopRequireDefault(_Layout);

var _FlowerGrid = __webpack_require__(6);

var _FlowerGrid2 = _interopRequireDefault(_FlowerGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(props) {
  return _react2.default.createElement(
    'div',
    { className: 'grid-col-span-9-l mb3' },
    _react2.default.createElement(
      _PageHeader2.default,
      null,
      props.pageHeader
    ),
    _react2.default.createElement(
      'div',
      { className: 'mw8-ns center mt4-l' },
      _react2.default.createElement(
        'p',
        { className: 'lh-copy dark-gray mt0 mb2 ph2 ph4-l f5 fw3' },
        'ELJULIO STUDIO l\xE0 m\u1ED9t kh\xF4ng gian s\xE1ng t\u1EA1o hoa ngh\u1EC7 thu\u1EADt theo y\xEAu c\u1EA7u c\u1EE7a t\u1EEBng c\xE1 nh\xE2n ho\u1EB7c t\u1EEBng doanh nghi\u1EC7p. Ch\xFAng t\xF4i l\xE0m vi\u1EC7c nh\u01B0 m\u1ED9t agency s\xE1ng t\u1EA1o, nh\u1EADn "brief", c\xF9ng "brainstorm" v\xE0 s\xE1ng t\u1EA1o ra nh\u1EEFng \xFD t\u01B0\u1EDFng kh\u1EA3 thi nh\u1EB1m mang \u0111\u1EBFn m\u1ED9t tr\u1EA3i nghi\u1EC7m th\u01B0\u1EDFng th\u1EE9c hoa ngh\u1EC7 thu\u1EADt \u0111\u1ED9c \u0111\xE1o v\xE0 duy nh\u1EA5t cho ng\u01B0\u1EDDi th\u01B0\u01A1ng ho\u1EB7c cho kh\xE1ch h\xE0ng c\u1EE7a b\u1EA1n. C\xF9ng ch\xFAng t\xF4i t\u1EA1o ra nh\u1EEFng kho\u1EA3nh kh\u1EAFc \u0111\xE1ng nh\u1EDB v\xEC trong m\u1ED7i ch\xFAng ta \u0111\u1EC1u l\xE0 nh\u1EEFng "b\xF4ng hoa" ng\xE1t h\u01B0\u01A1ng v\xE0 s\u1ED1ng \u0111\u1ED9ng.'
      )
    )
  );
}

function Content() {
  var items = _flowers2.default.map(function (image, id) {
    return { id: id, image: image };
  });

  return _react2.default.createElement(_FlowerGrid2.default, { items: items });
}

exports.default = (0, _reactStatic.withRouteData)(function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'ph3-ns' },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        props.pageHeader,
        ' :: El Julio'
      )
    ),
    _react2.default.createElement(
      _Layout2.default,
      { header: _react2.default.createElement(Header, props), submenu: _constants.MENU_STUDIO },
      _react2.default.createElement(Content, null)
    )
  );
});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-move/Animate");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var product = _ref.product,
      onRequestClose = _ref.onRequestClose;

  if (product == null) return null;

  return _react2.default.createElement(
    'div',
    null,
    onRequestClose != null ? _react2.default.createElement(
      'div',
      { className: 'absolute top-1 right-1' },
      _react2.default.createElement(
        'button',
        {
          className: 'bn bg-transparent outline-transparent',
          onClick: onRequestClose },
        _react2.default.createElement('img', { src: _iconClose2.default, alt: '' })
      )
    ) : null,
    _react2.default.createElement(
      'div',
      { className: 'mv5-l grid grid-11-l grid-col-gap1' },
      _react2.default.createElement(
        'div',
        { className: 'grid-col-start-2-l grid-col-span-5-l' },
        _react2.default.createElement('div', {
          className: 'cover bg-center',
          style: {
            height: '28em',
            backgroundImage: 'url(' + product.image + ')'
          }
        }),
        _react2.default.createElement(
          'h3',
          { className: 'f3 f-serif fw4' },
          'Thi\u1EBFt k\u1EBF t\u01B0\u01A1ng t\u1EF1'
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex item-center justify-center' },
          _react2.default.createElement('div', {
            className: 'w-33-l h5 cover bg-center mr3-l',
            style: {
              backgroundImage: 'url(https://res.cloudinary.com/duqeezi8j/image/upload/v1529417963/ej/flower-4.jpg)'
            }
          }),
          _react2.default.createElement('div', {
            className: 'w-33-l h5 cover bg-center',
            style: {
              backgroundImage: 'url(https://res.cloudinary.com/duqeezi8j/image/upload/v1529417963/ej/flower-5.jpg)'
            }
          }),
          _react2.default.createElement('div', {
            className: 'w-33-l h5 cover bg-center ml3-l',
            style: {
              backgroundImage: 'url(https://res.cloudinary.com/duqeezi8j/image/upload/v1529417963/ej/flower-6.jpg)'
            }
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'grid-col-start-8-l grid-col-span-3-l lh-dbl dark-gray fw3' },
        _react2.default.createElement(
          'h1',
          { className: 'ttu f3 f-serif fw4' },
          product.name
        ),
        product.description > 0 ? _react2.default.createElement(
          'p',
          null,
          product.description
        ) : null,
        _react2.default.createElement(
          'dl',
          { className: 'flex flex-column flex-row-l flex-wrap' },
          _react2.default.createElement(
            'dt',
            { className: 'pt3 bb b--silver w-100 w-40-l' },
            'K\xEDch th\u01B0\u1EDBc:'
          ),
          _react2.default.createElement(
            'dd',
            { className: 'pt3 bb b--silver w-100 w-60-l ml0' },
            product.size
          ),
          _react2.default.createElement(
            'dt',
            { className: 'pt3 bb b--silver w-100 w-40-l' },
            'Gi\xE1 tham kh\u1EA3o:'
          ),
          _react2.default.createElement(
            'dd',
            { className: 'pt3 bb b--silver w-100 w-60-l ml0' },
            dong(product.price)
          ),
          _react2.default.createElement(
            'dt',
            { className: 'pt3 bb b--silver w-100 w-40-l' },
            'C\u1EA3m x\xFAc:'
          ),
          _react2.default.createElement(
            'dd',
            { className: 'pt3 bb b--silver w-100 w-60-l ml0' },
            'Tinh t\u1EBF, Hi\u1EC7n \u0111\u1EA1i, Sang tr\u1ECDng'
          )
        ),
        _react2.default.createElement(
          'p',
          { className: 'mt4' },
          'M\u1ED7i m\u1ED9t s\u1EA3n ph\u1EA9m c\u1EE7a ELJULIO thi\u1EBFt k\u1EBF \u0111\u1EC1u mang m\u1ED9t v\u1EBB ri\xEAng v\xE0 t\xF9y bi\u1EBFn theo c\u1EA3m x\xFAc c\u1EE7a kh\xE1ch h\xE0ng, c\u0169ng nh\u01B0 nguy\xEAn li\u1EC7u theo m\xF9a. V\xEC v\u1EADy h\xECnh \u1EA3nh v\xE0 gi\xE1 ch\u1EC9 mang t\xEDnh ch\u1EA5t h\xECnh dung. Ch\xFAng t\xF4i kh\xF4ng th\u1EC3 th\u1EF1c hi\u1EC7n m\u1ED9t s\u1EA3n ph\u1EA9m gi\u1ED1ng 100% v\u1EDBi s\u1EA3n ph\u1EA9m tham kh\u1EA3o. H\xE3y \u0111\u1EC3 ch\xFAng t\xF4i mang \u0111\u1EBFn cho b\u1EA1n s\u1EF1 b\u1EA5t ng\u1EDD.'
        ),
        _react2.default.createElement(
          'p',
          { className: 'i mt4' },
          'The photograph is good at the time of publication. Because there are individual differences, event if you request exact the same thing, we may not be able to prepare.'
        )
      )
    )
  );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _iconClose = __webpack_require__(14);

var _iconClose2 = _interopRequireDefault(_iconClose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function dong(price) {
  return parseInt(price, 10).toLocaleString('vi-VI', {
    style: 'currency',
    currency: 'VND'
  });
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

var _reactStatic = __webpack_require__(1);

var _Footer = __webpack_require__(10);

var _Footer2 = _interopRequireDefault(_Footer);

var _PageHeader = __webpack_require__(3);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Station = function (_React$Component) {
  _inherits(Station, _React$Component);

  function Station() {
    _classCallCheck(this, Station);

    return _possibleConstructorReturn(this, (Station.__proto__ || Object.getPrototypeOf(Station)).apply(this, arguments));
  }

  _createClass(Station, [{
    key: 'render',
    value: function render() {
      var styles = Array.from({ length: 8 }, function (_, i) {
        return i + 1;
      }).map(function (i) {
        return {
          backgroundImage: 'url(https://res.cloudinary.com/duqeezi8j/image/upload/v1529417963/ej/flower-' + i + '.jpg)'
        };
      });

      return _react2.default.createElement(
        'div',
        { className: 'ph3-ns' },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'Station :: El Julio'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'mv4-l pa2 pa0-l grid grid-1 grid-11-l grid-col-gap1 grid-row-gap1 grid-rows-4' },
          _react2.default.createElement('div', {
            className: 'grid-col-span-3-l cover bg-center',
            style: styles[7]
          }),
          _react2.default.createElement(
            'div',
            { className: 'grid-col-span-3-l self-center' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/station/recommend' },
              _react2.default.createElement(
                _PageHeader2.default,
                { withoutTilde: true },
                'Recommend'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'grid-col-span-5-l cover bg-center', style: styles[6] },
            _react2.default.createElement(
              _reactStatic.Link,
              {
                to: '/station/styling',
                className: 'flex items-center justify-center h-100 flex-column relative' },
              _react2.default.createElement('div', { className: 'absolute absolute--fill bg-black-50 z-1' }),
              _react2.default.createElement(
                _PageHeader2.default,
                { withoutTilde: true, className: 'white z-2' },
                'Styling'
              )
            )
          ),
          _react2.default.createElement('div', {
            className: 'grid-col-span-5-l cover bg-center',
            style: styles[5]
          }),
          _react2.default.createElement('div', {
            className: 'grid-col-span-3-l cover bg-center',
            style: styles[4]
          }),
          _react2.default.createElement(
            'div',
            { className: 'grid-col-span-3-l self-center' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/station/arrangement' },
              _react2.default.createElement(
                _PageHeader2.default,
                { withoutTilde: true },
                'Arrangement'
              )
            )
          ),
          _react2.default.createElement('div', {
            className: 'grid-col-span-3-l cover bg-center',
            style: styles[3]
          }),
          _react2.default.createElement(
            'div',
            { className: 'grid-col-span-3-l self-center' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/station/bouquet' },
              _react2.default.createElement(
                _PageHeader2.default,
                { withoutTilde: true },
                'Bouquet'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'grid-col-span-5-l cover bg-center', style: styles[2] },
            _react2.default.createElement(
              _reactStatic.Link,
              {
                to: '/station/event',
                className: 'flex items-center justify-center h-100 flex-column relative' },
              _react2.default.createElement('div', { className: 'absolute absolute--fill bg-black-50 z-1' }),
              _react2.default.createElement(
                _PageHeader2.default,
                { withoutTilde: true, className: 'white z-2' },
                'Event'
              )
            )
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Station;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(Station);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

var _reactStatic = __webpack_require__(1);

var _flowers = __webpack_require__(12);

var _flowers2 = _interopRequireDefault(_flowers);

var _constants = __webpack_require__(5);

var _PageHeader = __webpack_require__(3);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Layout = __webpack_require__(4);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
  return _react2.default.createElement(
    'div',
    { className: 'grid-col-span-9-l mb3' },
    _react2.default.createElement(
      _PageHeader2.default,
      null,
      'Recommend'
    ),
    _react2.default.createElement(_reactStatic.RouteData, {
      render: function render(_ref) {
        var season = _ref.season;
        return season ? _react2.default.createElement(
          'h3',
          { className: 'tc f3 fw4 f-serif' },
          season
        ) : null;
      }
    })
  );
}

function Content() {
  return _react2.default.createElement(
    'div',
    { className: 'pa2 pa0-l grid grid-11-l grid-rows-4 grid-col-gap1 mv3' },
    _react2.default.createElement('div', {
      className: 'cover bg-center mb3 grid-col-span-5-l',
      style: { backgroundImage: 'url(' + _flowers2.default[2] + ')' }
    }),
    _react2.default.createElement(
      'div',
      { className: 'cover bg-center mb3 grid-col-span-3-l ph2 ph4-l' },
      _react2.default.createElement(
        'p',
        { className: 'lh-copy dark-gray mt0 mb2 f5 fw3' },
        'Seasonal/ monthly ideas of flower gifts. Finely selected flowers and materials with a sense of the season.'
      ),
      _react2.default.createElement(
        'p',
        { className: 'mt4 f-serif f3' },
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/station/recommend/spring' },
          'Spring'
        ),
        _react2.default.createElement(
          'span',
          { className: 'mh1' },
          '/'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/station/recommend/summer' },
          'Summer'
        )
      ),
      _react2.default.createElement(
        'p',
        { className: 'mt4 f-serif f3' },
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/station/recommend/autumn' },
          'Autumn'
        ),
        _react2.default.createElement(
          'span',
          { className: 'mh1' },
          '/'
        ),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/station/recommend/winter' },
          'Winter'
        )
      )
    ),
    _react2.default.createElement('div', {
      className: 'cover bg-center mb3 grid-col-span-3-l',
      style: { backgroundImage: 'url(' + _flowers2.default[4] + ')' }
    }),
    _react2.default.createElement('div', {
      className: 'cover bg-center mb3 grid-col-span-3-l',
      style: { backgroundImage: 'url(' + _flowers2.default[5] + ')' }
    }),
    _react2.default.createElement('div', {
      className: 'cover bg-center mb3 grid-col-span-3-l',
      style: { backgroundImage: 'url(' + _flowers2.default[6] + ')' }
    }),
    _react2.default.createElement('div', {
      className: 'cover bg-center mb3 grid-col-span-5-l',
      style: { backgroundImage: 'url(' + _flowers2.default[7] + ')' }
    })
  );
}

exports.default = (0, _reactStatic.withRouteData)(function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'ph3-ns' },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Station :: El Julio'
      )
    ),
    _react2.default.createElement(
      _Layout2.default,
      { header: _react2.default.createElement(Header, null), submenu: _constants.MENU_STATION },
      _react2.default.createElement(Content, null)
    )
  );
});

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

var _reactStatic = __webpack_require__(1);

var _constants = __webpack_require__(5);

var _PageHeader = __webpack_require__(3);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Layout = __webpack_require__(4);

var _Layout2 = _interopRequireDefault(_Layout);

var _FlowerGrid = __webpack_require__(6);

var _FlowerGrid2 = _interopRequireDefault(_FlowerGrid);

var _FlowerFilter = __webpack_require__(29);

var _FlowerFilter2 = _interopRequireDefault(_FlowerFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Arrangement = function (_React$Component) {
  _inherits(Arrangement, _React$Component);

  function Arrangement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Arrangement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Arrangement.__proto__ || Object.getPrototypeOf(Arrangement)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      filter: {
        category: _constants.ARRANGEMENT_CATEGORIES.ALL,
        nuance: _constants.NUANCES.ALL
      }
    }, _this.doSetFilter = function (type, value) {
      return function (e) {
        _this.setState({
          filter: _defineProperty({
            category: _constants.ARRANGEMENT_CATEGORIES.ALL,
            nuance: _constants.NUANCES.ALL
          }, type, value)
        });
      };
    }, _this.isFilterEnabled = function (type, value) {
      return _this.state.filter[type] === value;
    }, _this.getHeader = function () {
      var categories = (0, _constants.makeLabels)(_constants.ARRANGEMENT_CATEGORIES, _constants.ARRANGEMENT_CATEGORIES.ALL);
      var nuances = (0, _constants.makeLabels)(_constants.NUANCES, _constants.NUANCES.ALL);

      return _react2.default.createElement(
        'div',
        { className: 'grid-col-span-9-l f5 fw3' },
        _react2.default.createElement(
          _PageHeader2.default,
          null,
          'Arrangement'
        ),
        _react2.default.createElement(
          'div',
          { className: 'ml6-l mt4-l' },
          _react2.default.createElement(
            'p',
            { className: 'lh-copy dark-gray mt0 mb2 ph4' },
            'Bundling flowers is to bundle your mind. I create it in my hand, so I get a feeling straight. Together, the bouquet is tailored to you.'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lh-copy dark-gray mt0 mb2 ph4' },
            'Custom-made floral bouquet. Handwork by expert florist surely bundle flowers with your sincerity. One of a kind bouquet for just only for you.'
          )
        ),
        _react2.default.createElement(_FlowerFilter2.default, {
          categories: categories,
          nuances: nuances,
          doSetFilter: _this.doSetFilter,
          isFilterEnabled: _this.isFilterEnabled
        })
      );
    }, _this.getContent = function () {
      var items = _this.getVisible();

      return items.length > 0 ? _react2.default.createElement(_FlowerGrid2.default, { items: items }) : _react2.default.createElement(
        'div',
        { className: 'f-serif f4 i tc ma3' },
        'No item found'
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Arrangement, [{
    key: 'getVisible',
    value: function getVisible() {
      var _state$filter = this.state.filter,
          category = _state$filter.category,
          nuance = _state$filter.nuance;

      var products = this.props.products || [];

      if (category !== _constants.ARRANGEMENT_CATEGORIES.ALL) return products.filter(function (item) {
        return item.categories && item.categories.includes(category);
      });

      if (nuance !== _constants.NUANCES.ALL) return products.filter(function (item) {
        return item.nuances && item.nuances.includes(nuance);
      });

      return products;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ph3-ns' },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'Arrangement :: El Julio'
          )
        ),
        _react2.default.createElement(
          _Layout2.default,
          { header: this.getHeader(), submenu: _constants.MENU_STATION },
          this.getContent()
        )
      );
    }
  }]);

  return Arrangement;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(Arrangement);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Radio = __webpack_require__(15);

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_React$Component) {
  _inherits(_class, _React$Component);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          categories = _props.categories,
          nuances = _props.nuances,
          isFilterEnabled = _props.isFilterEnabled,
          doSetFilter = _props.doSetFilter;

      return _react2.default.createElement(
        'div',
        { className: 'flex flex-column flex-row-l flex-wrap dark-gray mt5-l mb4-l ph4 f6' },
        _react2.default.createElement(
          'div',
          { className: 'w-10-l fw6 fw4-l pv3 pv0-l tr-l pr3' },
          'Categories'
        ),
        _react2.default.createElement(
          'div',
          { className: 'w-40-l' },
          _react2.default.createElement(
            'ul',
            { className: 'list flex flex-wrap ma0 tl bl b--dark-gray pl3' },
            categories.map(function (cat) {
              return _react2.default.createElement(
                'li',
                { className: 'w-50 pb3 flex', key: cat.label },
                _react2.default.createElement(
                  _Radio2.default,
                  {
                    checked: isFilterEnabled('category', cat.value),
                    onChange: doSetFilter('category', cat.value),
                    value: cat.value,
                    name: 'categories' },
                  cat.label
                )
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'w-10-l fw6 fw4-l pv3 pv0-l tr-l pr3' },
          'Nuance'
        ),
        _react2.default.createElement(
          'div',
          { className: 'w-40-l' },
          _react2.default.createElement(
            'ul',
            { className: 'list flex flex-wrap ma0 tl bl b--dark-gray pl3' },
            nuances.map(function (el) {
              return _react2.default.createElement(
                'li',
                { className: 'w-50 mb3 flex', key: el.label },
                _react2.default.createElement(
                  _Radio2.default,
                  {
                    checked: isFilterEnabled('nuance', el.value),
                    onChange: doSetFilter('nuance', el.value),
                    value: el.value,
                    name: 'nuance' },
                  el.label
                )
              );
            })
          )
        )
      );
    }
  }]);

  return _class;
}(_react2.default.Component);

exports.default = _class;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

var _reactStatic = __webpack_require__(1);

var _constants = __webpack_require__(5);

var _PageHeader = __webpack_require__(3);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Layout = __webpack_require__(4);

var _Layout2 = _interopRequireDefault(_Layout);

var _FlowerGrid = __webpack_require__(6);

var _FlowerGrid2 = _interopRequireDefault(_FlowerGrid);

var _FlowerFilter = __webpack_require__(29);

var _FlowerFilter2 = _interopRequireDefault(_FlowerFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Arrangement = function (_React$Component) {
  _inherits(Arrangement, _React$Component);

  function Arrangement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Arrangement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Arrangement.__proto__ || Object.getPrototypeOf(Arrangement)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      filter: {
        category: _constants.BOUQUET_CATEGORIES.ALL,
        nuance: _constants.NUANCES.ALL
      }
    }, _this.doSetFilter = function (type, value) {
      return function (e) {
        _this.setState({
          filter: _defineProperty({
            category: _constants.BOUQUET_CATEGORIES.ALL,
            nuance: _constants.NUANCES.ALL
          }, type, value)
        });
      };
    }, _this.isFilterEnabled = function (type, value) {
      return _this.state.filter[type] === value;
    }, _this.getHeader = function () {
      var categories = (0, _constants.makeLabels)(_constants.BOUQUET_CATEGORIES, _constants.BOUQUET_CATEGORIES.ALL);
      var nuances = (0, _constants.makeLabels)(_constants.NUANCES, _constants.NUANCES.ALL);

      return _react2.default.createElement(
        'div',
        { className: 'grid-col-span-9-l f5 fw3' },
        _react2.default.createElement(
          _PageHeader2.default,
          null,
          'Bouquet'
        ),
        _react2.default.createElement(
          'div',
          { className: 'ml6-l mt4-l' },
          _react2.default.createElement(
            'p',
            { className: 'lh-copy dark-gray mt0 mb2 ph4' },
            'Bundling flowers is to bundle your mind. I create it in my hand, so I get a feeling straight. Together, the bouquet is tailored to you.'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lh-copy dark-gray mt0 mb2 ph4' },
            'Custom-made floral bouquet. Handwork by expert florist surely bundle flowers with your sincerity. One of a kind bouquet for just only for you.'
          )
        ),
        _react2.default.createElement(_FlowerFilter2.default, {
          categories: categories,
          nuances: nuances,
          isFilterEnabled: _this.isFilterEnabled,
          doSetFilter: _this.doSetFilter
        })
      );
    }, _this.getContent = function () {
      var items = _this.getVisible();
      return items.length > 0 ? _react2.default.createElement(_FlowerGrid2.default, { items: items }) : _react2.default.createElement(
        'div',
        { className: 'f-serif f4 i tc ma3' },
        'No item found'
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Arrangement, [{
    key: 'getVisible',
    value: function getVisible() {
      var _state$filter = this.state.filter,
          category = _state$filter.category,
          nuance = _state$filter.nuance;

      var products = this.props.products || [];

      if (category !== _constants.BOUQUET_CATEGORIES.ALL) return products.filter(function (item) {
        return item.categories && item.categories.includes(category);
      });

      if (nuance !== _constants.NUANCES.ALL) return products.filter(function (item) {
        return item.nuances && item.nuances.includes(nuance);
      });

      return products;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ph3-ns' },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            'Bouquet :: El Julio'
          )
        ),
        _react2.default.createElement(
          _Layout2.default,
          { header: this.getHeader(), submenu: _constants.MENU_STATION },
          this.getContent()
        )
      );
    }
  }]);

  return Arrangement;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(Arrangement);

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

var _reactStatic = __webpack_require__(1);

var _constants = __webpack_require__(5);

var _PageHeader = __webpack_require__(3);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Layout = __webpack_require__(4);

var _Layout2 = _interopRequireDefault(_Layout);

var _FlowerGrid = __webpack_require__(6);

var _FlowerGrid2 = _interopRequireDefault(_FlowerGrid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Station = function (_React$Component) {
  _inherits(Station, _React$Component);

  function Station() {
    _classCallCheck(this, Station);

    return _possibleConstructorReturn(this, (Station.__proto__ || Object.getPrototypeOf(Station)).apply(this, arguments));
  }

  _createClass(Station, [{
    key: 'getHeader',
    value: function getHeader() {
      return _react2.default.createElement(
        'div',
        { className: 'grid-col-span-9-l mb3' },
        _react2.default.createElement(
          _PageHeader2.default,
          null,
          this.props.pageHeader || 'Station'
        ),
        _react2.default.createElement(
          'div',
          { className: 'mw8-ns center mt4-l' },
          _react2.default.createElement(
            'p',
            { className: 'lh-copy dark-gray mt0 mb2 ph2 ph4-l f5 fw3' },
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum veritatis, excepturi quos. Itaque, unde. Sint a quod, est, sequi doloribus quisquam harum quaerat, nulla odit nisi voluptatum itaque quidem, dicta.'
          )
        )
      );
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return _react2.default.createElement(_FlowerGrid2.default, { items: this.props.products || [] });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ph3-ns' },
        _react2.default.createElement(
          _reactHelmet.Helmet,
          null,
          _react2.default.createElement(
            'title',
            null,
            this.props.pageHeader,
            ' :: El Julio'
          )
        ),
        _react2.default.createElement(
          _Layout2.default,
          { header: this.getHeader(), submenu: _constants.MENU_STATION },
          this.getContent()
        )
      );
    }
  }]);

  return Station;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withRouteData)(Station);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

var _reactStatic = __webpack_require__(1);

var _flowers = __webpack_require__(12);

var _flowers2 = _interopRequireDefault(_flowers);

var _constants = __webpack_require__(5);

var _PageHeader = __webpack_require__(3);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Layout = __webpack_require__(4);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
  return _react2.default.createElement(
    'div',
    { className: 'grid-col-span-9-l mb3' },
    _react2.default.createElement(
      _PageHeader2.default,
      null,
      'Recommend'
    ),
    _react2.default.createElement(_reactStatic.RouteData, {
      render: function render(_ref) {
        var season = _ref.season;
        return season ? _react2.default.createElement(
          'h3',
          { className: 'tc f3 fw4 f-serif' },
          season
        ) : null;
      }
    }),
    _react2.default.createElement(
      _reactStatic.Link,
      { to: '/station/recommend', className: 'db tc f4 fw3' },
      '\u2190 Go back'
    )
  );
}

function Content() {
  return _react2.default.createElement(
    'div',
    { className: 'pa2 pa0-l grid grid-11-l grid-rows-4 grid-col-gap1 mv3' },
    _react2.default.createElement('div', {
      className: 'cover bg-center mb3 grid-col-span-5-l',
      style: { backgroundImage: 'url(' + _flowers2.default[2] + ')' }
    }),
    _react2.default.createElement(
      'div',
      { className: 'cover bg-center mb3 grid-col-span-3-l ph2 ph4-l' },
      _react2.default.createElement(
        'p',
        { className: 'lh-copy dark-gray mt0 mb2 f5 fw3' },
        'Seasonal/ monthly ideas of flower gifts. Finely selected flowers and materials with a sense of the season.'
      )
    ),
    _react2.default.createElement('div', {
      className: 'cover bg-center mb3 grid-col-span-3-l',
      style: { backgroundImage: 'url(' + _flowers2.default[4] + ')' }
    }),
    _react2.default.createElement('div', {
      className: 'cover bg-center mb3 grid-col-span-3-l',
      style: { backgroundImage: 'url(' + _flowers2.default[5] + ')' }
    }),
    _react2.default.createElement('div', {
      className: 'cover bg-center mb3 grid-col-span-3-l',
      style: { backgroundImage: 'url(' + _flowers2.default[6] + ')' }
    }),
    _react2.default.createElement('div', {
      className: 'cover bg-center mb3 grid-col-span-5-l',
      style: { backgroundImage: 'url(' + _flowers2.default[7] + ')' }
    })
  );
}

exports.default = (0, _reactStatic.withRouteData)(function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'ph3-ns' },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Recommend - ',
        props.season,
        ' :: El Julio'
      )
    ),
    _react2.default.createElement(
      _Layout2.default,
      { header: _react2.default.createElement(Header, null), submenu: _constants.MENU_STATION },
      _react2.default.createElement(Content, null)
    )
  );
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

var _reactStatic = __webpack_require__(1);

var _homeLeft = __webpack_require__(75);

var _homeLeft2 = _interopRequireDefault(_homeLeft);

var _station = __webpack_require__(76);

var _station2 = _interopRequireDefault(_station);

var _studio = __webpack_require__(77);

var _studio2 = _interopRequireDefault(_studio);

var _logo = __webpack_require__(78);

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactStatic.withSiteData)(function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'bg-near-white relative h-100vh' },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'Trang Ch\u1EE7 :: ELJULIO'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'absolute w-100 h-100vh flex flex-column flex-row-ns z-1' },
      _react2.default.createElement(
        'div',
        {
          className: 'h-50 w-50-ns h-100-ns cover flex items-center justify-center',
          style: { backgroundImage: 'url(' + _homeLeft2.default + ')' } },
        _react2.default.createElement('img', { src: _station2.default, alt: '', className: 'mw-40vw mw-10vw-l' })
      ),
      _react2.default.createElement(
        'div',
        {
          className: 'h-50 w-50-ns h-100-ns cover flex items-center justify-center',
          style: { backgroundImage: 'url(' + _homeLeft2.default + ')' } },
        _react2.default.createElement('img', { src: _studio2.default, alt: '', className: 'mw-40vw mw-10vw-l' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'clip-s absolute w-100 h-100vh flex items-center justify-center z-2' },
      _react2.default.createElement('img', { src: _logo2.default, alt: 'ELJULIO', className: 'mw-25vw' })
    ),
    _react2.default.createElement(
      'div',
      { className: 'absolute w-100 h-100vh flex flex-column flex-row-ns z-3' },
      _react2.default.createElement(_reactStatic.Link, { to: '/station', className: 'h-50 w-50-ns h-100-ns ej-home-cell' }),
      _react2.default.createElement(_reactStatic.Link, { to: '/studio', className: 'h-50 w-50-ns h-100-ns ej-home-cell' })
    )
  );
});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

var _reactStatic = __webpack_require__(1);

var _PageHeader = __webpack_require__(3);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Layout = __webpack_require__(4);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
  return _react2.default.createElement(
    'div',
    { className: 'grid-col-span-9-l' },
    _react2.default.createElement(
      _PageHeader2.default,
      null,
      'About Us'
    )
  );
}

function Content() {
  return _react2.default.createElement(
    'div',
    { className: 'grid grid-11-l mv5 f5 fw3' },
    _react2.default.createElement(
      'div',
      { className: 'mb5 grid-col-span-5-l' },
      _react2.default.createElement('img', {
        src: 'https://res.cloudinary.com/duqeezi8j/image/upload/v1529417963/ej/flower-2.jpg',
        alt: ''
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'mb5 grid-col-start-7-l grid-col-span-4-l' },
      _react2.default.createElement(
        'p',
        { className: 'lh-dbl mv0 dark-gray pa3 pa0-l' },
        'G\u1EAFn li\u1EC1n v\u1EDBi c\xE2u slogan "Flower insider you". D\u1ECBch ngh\u0129a \u0111en l\xE0 hoa b\xEAn trong b\u1EA1n, \xFD ngh\u0129a V\u0169 mu\u1ED1n truy\u1EC1n t\u1EA3i l\xE0 v\u1EBB \u0111\u1EB9p n\u1ED9i t\xE2m c\u1EE7a con ng\u01B0\u1EDDi. T\u1EE9c l\xE0 b\u1EA3n th\xE2n b\xEAn trong t\u1EA5t c\u1EA3 ch\xFAng ta, d\xF9 l\xE0 ng\u01B0\u1EDDi x\u1EA5u hay t\u1ED1t, \u0111\u1EC1u t\u1ED3n t\u1EA1i nh\u1EEFng \u0111i\u1EC1u t\u1ED1t \u0111\u1EB9p m\xE0 nh\u1EEFng \u0111i\u1EC1u \u0111\xF3 \u0111\u01B0\u1EE3c v\xED nh\u01B0 nh\u1EEFng b\xF4ng hoa r\u1EF1c r\u1EE1 t\u1ECFa h\u01B0\u01A1ng \u2192 c\xE1i \u0111\u1EB9p v\xE0 l\xF2ng t\u1ED1t s\u1EBD \u0111\u01B0\u1EE3c lan t\u1ECFa d\xF9 trong b\u1EA5t c\u1EE9 ho\xE0n c\u1EA3nh n\xE0o. ELJULIO tin r\u1EB1ng b\u1EA5t c\u1EE9 ai c\u0169ng c\xF3 m\u1ED9t ni\u1EC1m y\xEAu th\xEDch v\u1EDBi hoa ho\u1EB7c c\xE1i \u0111\u1EB9p n\xF3i chung, ch\u1EC9 l\xE0 h\u1ECD c\xF3 nh\u1EADn ra hay kh\xF4ng. B\u1EB1ng nh\u1EEFng s\xE1ng t\u1EA1o c\u1EE7a m\xECnh, ELJULIO s\u1EBD gi\xFAp \u0111\xE1nh th\u1EE9c ni\u1EC1m y\xEAu th\xEDch hoa, c\xE2y c\u1ECF, l\xF2ng t\u1ED1t, c\xE1i \u0111\u1EB9p b\xEAn trong m\u1ED7i con ng\u01B0\u1EDDi\u2026'
      ),
      _react2.default.createElement(
        'div',
        { className: 'mt4-l pa3 pa0-l flex flex-column flex-row-l' },
        _react2.default.createElement(
          'div',
          { className: 'w-50-l pr5-l' },
          _react2.default.createElement(
            'h3',
            { className: 'mv2 mv4-l f3 f-serif fw4' },
            'S\u1EE9 M\u1EC7nh'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lh-dbl mv0 dark-gray' },
            'Awake your flowers, b\u1EB1ng nh\u1EEFng s\xE1ng t\u1EA1o c\u1EE7a m\xECnh, ELJULIO s\u1EBD gi\xFAp \u0111\xE1nh th\u1EE9c ni\u1EC1m y\xEAu th\xEDch hoa, c\xE2y c\u1ECF, l\xF2ng t\u1ED1t, c\xE1i \u0111\u1EB9p b\xEAn trong m\u1ED7i con ng\u01B0\u1EDDi\u2026'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'w-50-l' },
          _react2.default.createElement(
            'h3',
            { className: 'mv2 mv4-l f3 f-serif fw4' },
            'Gi\xE1 Tr\u1ECB C\u1ED1t L\xF5i'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lh-copy dark-gray mb1 fw6' },
            'Innovative'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lh-dbl dark-gray mt0' },
            'Kh\xF4ng ng\u1EEBng c\u1EA3i ti\u1EBFn'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lh-copy dark-gray mb1 fw6' },
            'Community/ Responsibilities'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lh-dbl dark-gray mt0' },
            'H\u01B0\u1EDBng \u0111\u1EBFn c\u1ED9ng \u0111\u1ED3ng'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lh-copy dark-gray mb1 fw6' },
            'Inspired'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lh-dbl dark-gray mt0' },
            'Lan t\u1ECFa \u0111am m\xEA'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lh-copy dark-gray mb1 fw6' },
            'Quality'
          ),
          _react2.default.createElement(
            'p',
            { className: 'lh-dbl dark-gray mt0' },
            'H\u01B0\u1EDBng \u0111\u1EBFn c\u1ED9ng \u0111\u1ED3ng'
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'grid-col-span-5-l' },
      _react2.default.createElement('img', {
        src: 'https://res.cloudinary.com/duqeezi8j/image/upload/v1529417963/ej/flower-7.jpg',
        alt: ''
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'mb5 grid-col-start-7-l grid-col-span-4-l' },
      _react2.default.createElement(
        'div',
        { className: 'pa3 pa0-l flex flex-column flex-row-l' },
        _react2.default.createElement(
          'div',
          { className: 'w-50 pr5-l' },
          _react2.default.createElement(
            'h3',
            { className: 'mv2 mv4-l f3 f-serif fw4' },
            '\u0110\u1ECBa ch\u1EC9'
          ),
          _react2.default.createElement(
            'address',
            { className: 'mv2 lh-dbl fs-normal' },
            '73 Nguy\u1EC5n Kh\u1EAFc Nhu, Ph\u01B0\u1EDDng C\xF4 Giang, Qu\u1EADn 1, TP. H\u1ED3 Ch\xED Minh'
          ),
          _react2.default.createElement(
            'a',
            { href: 'tel:0984802497', className: 'f3 mv4 db' },
            '0984 802 497'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'w-50' },
          _react2.default.createElement(
            'h3',
            { className: 'mv2 mv4-l f3 f-serif fw4' },
            'Gi\u1EDD m\u1EDF c\u1EEDa'
          ),
          _react2.default.createElement(
            'p',
            { className: 'ma0 lh-dbl' },
            'Th\u1EE9 Hai \u2013 Th\u1EE9 S\xE1u'
          ),
          _react2.default.createElement(
            'p',
            { className: 'ma0 lh-dbl f3' },
            '09:00 \u2013 20:00'
          ),
          _react2.default.createElement(
            'p',
            { className: 'ma0 lh-dbl' },
            'Ch\u1EE7 Nh\u1EADt'
          ),
          _react2.default.createElement(
            'p',
            { className: 'ma0 lh-dbl f3' },
            '09:00 \u2013 18:00'
          )
        )
      )
    )
  );
}

exports.default = (0, _reactStatic.withSiteData)(function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'ph3-ns' },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'About Us :: ELJULIO'
      )
    ),
    _react2.default.createElement(
      _Layout2.default,
      { header: _react2.default.createElement(Header, null) },
      _react2.default.createElement(Content, null)
    )
  );
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

var _reactStatic = __webpack_require__(1);

var _Layout = __webpack_require__(4);

var _Layout2 = _interopRequireDefault(_Layout);

var _FlowerDetails = __webpack_require__(25);

var _FlowerDetails2 = _interopRequireDefault(_FlowerDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header(_ref) {
  var product = _ref.product;

  return _react2.default.createElement(
    'div',
    { className: 'grid-col-span-9-l' },
    _react2.default.createElement(_FlowerDetails2.default, { product: product })
  );
}

exports.default = (0, _reactStatic.withRouteData)(function (props) {
  var product = props.product;

  return _react2.default.createElement(
    'div',
    { className: 'ph3-ns' },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        product.name,
        ' :: ELJULIO'
      )
    ),
    _react2.default.createElement(_Layout2.default, { header: _react2.default.createElement(Header, { product: product }) })
  );
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

var _reactStatic = __webpack_require__(1);

var _PageHeader = __webpack_require__(3);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Layout = __webpack_require__(4);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
  return _react2.default.createElement(
    'div',
    { className: 'grid-col-span-9-l' },
    _react2.default.createElement(
      _PageHeader2.default,
      null,
      'How To Order'
    ),
    _react2.default.createElement(
      'div',
      { className: 'mw8-ns center mv4' },
      _react2.default.createElement(
        'p',
        { className: 'lh-copy dark-gray mt0 mb2 ph4' },
        'Bundling flowers is to bundle your mind. I create it in my hand, so I get a feeling straight. Together, the bouquet is tailored to you.'
      ),
      _react2.default.createElement(
        'p',
        { className: 'lh-copy dark-gray mt0 mb2 ph4' },
        'Custom-made floral bouquet. Handwork by expert florist surely bundle flowers with your sincerity. One of a kind bouquet for just only for you.'
      )
    )
  );
}

function Content() {
  return _react2.default.createElement(
    'div',
    { className: 'mw8 center mv5 pa3 pa0-l' },
    _react2.default.createElement(
      'h2',
      { className: 'f2 f-serif fw4 mt0 mb3' },
      '1. Notes on ordering'
    ),
    _react2.default.createElement(
      'p',
      { className: 'lh-copy' },
      'Please contact person of foreign nationality from',
      ' ',
      _react2.default.createElement(
        'a',
        { href: '', className: 'fw7' },
        'here'
      ),
      '.'
    ),
    _react2.default.createElement(
      'dl',
      { className: 'grid ej-grid-list lh-copy' },
      _react2.default.createElement(
        'dt',
        { className: 'mv3 fw7' },
        'Budget'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus sint ratione quo qui delectus dolore, voluptates autem, magni voluptate rerum earum dignissimos velit debitis culpa minus ipsum tenetur ipsam.'
      ),
      _react2.default.createElement(
        'dt',
        { className: 'mv3 fw7' },
        'Order Outline'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Thank you for ordering by 15:00 two days before the delivery date. In case of Takkyubin, it is 3 days before arrival date. If you have special requests such as designated flower materials, please consult at least 3 days in advance. If you are in a hurry, please consult the staff by phone.'
      ),
      _react2.default.createElement(
        'dt',
        { className: 'mv3 fw7' },
        'Budget'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus sint ratione quo qui delectus dolore, voluptates autem, magni voluptate rerum earum dignissimos velit debitis culpa minus ipsum tenetur ipsam.'
      ),
      _react2.default.createElement(
        'dt',
        { className: 'mv3 fw7' },
        'Order Outline'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Thank you for ordering by 15:00 two days before the delivery date. In case of Takkyubin, it is 3 days before arrival date. If you have special requests such as designated flower materials, please consult at least 3 days in advance. If you are in a hurry, please consult the staff by phone.'
      ),
      _react2.default.createElement(
        'dt',
        { className: 'mv3 fw7' },
        'Budget'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus sint ratione quo qui delectus dolore, voluptates autem, magni voluptate rerum earum dignissimos velit debitis culpa minus ipsum tenetur ipsam.'
      ),
      _react2.default.createElement(
        'dt',
        { className: 'mv3 fw7' },
        'Order Outline'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Thank you for ordering by 15:00 two days before the delivery date. In case of Takkyubin, it is 3 days before arrival date. If you have special requests such as designated flower materials, please consult at least 3 days in advance. If you are in a hurry, please consult the staff by phone.'
      ),
      _react2.default.createElement(
        'dt',
        { className: 'mv3 fw7' },
        'Budget'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus sint ratione quo qui delectus dolore, voluptates autem, magni voluptate rerum earum dignissimos velit debitis culpa minus ipsum tenetur ipsam.'
      ),
      _react2.default.createElement(
        'dt',
        { className: 'mv3 fw7' },
        'Order Outline'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Thank you for ordering by 15:00 two days before the delivery date. In case of Takkyubin, it is 3 days before arrival date. If you have special requests such as designated flower materials, please consult at least 3 days in advance. If you are in a hurry, please consult the staff by phone.'
      )
    ),
    _react2.default.createElement(
      'h2',
      { className: 'f2 f-serif fw4 mt0 mb3' },
      '2. Area'
    ),
    _react2.default.createElement(
      'dl',
      { className: 'grid ej-grid-list lh-copy' },
      _react2.default.createElement(
        'dt',
        { className: 'mv3 fw7' },
        'Budget'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus sint ratione quo qui delectus dolore, voluptates autem, magni voluptate rerum earum dignissimos velit debitis culpa minus ipsum tenetur ipsam.'
      ),
      _react2.default.createElement(
        'dt',
        { className: 'mv3 fw7' },
        'Order Outline'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Thank you for ordering by 15:00 two days before the delivery date. In case of Takkyubin, it is 3 days before arrival date. If you have special requests such as designated flower materials, please consult at least 3 days in advance. If you are in a hurry, please consult the staff by phone.'
      ),
      _react2.default.createElement(
        'dt',
        { className: 'mv3 fw7' },
        'Budget'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus sint ratione quo qui delectus dolore, voluptates autem, magni voluptate rerum earum dignissimos velit debitis culpa minus ipsum tenetur ipsam.'
      ),
      _react2.default.createElement(
        'dt',
        { className: 'mv3 fw7' },
        'Order Outline'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Thank you for ordering by 15:00 two days before the delivery date. In case of Takkyubin, it is 3 days before arrival date. If you have special requests such as designated flower materials, please consult at least 3 days in advance. If you are in a hurry, please consult the staff by phone.'
      ),
      _react2.default.createElement(
        'dt',
        { className: 'mv3 fw7' },
        'Budget'
      ),
      _react2.default.createElement(
        'dd',
        null,
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus sint ratione quo qui delectus dolore, voluptates autem, magni voluptate rerum earum dignissimos velit debitis culpa minus ipsum tenetur ipsam.'
      )
    ),
    _react2.default.createElement(
      'h2',
      { className: 'f2 f-serif fw4 mt0 mb3' },
      '3. Web Orders'
    ),
    _react2.default.createElement(
      'p',
      { className: 'lh-copy' },
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur architecto deserunt quibusdam ab eos nisi illum culpa aut ad, incidunt voluptates enim ullam optio expedita vitae cupiditate hic. Aliquid, id?'
    )
  );
}

exports.default = (0, _reactStatic.withSiteData)(function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'ph3-ns' },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        'How to Order :: El Julio'
      )
    ),
    _react2.default.createElement(
      _Layout2.default,
      { header: _react2.default.createElement(Header, null) },
      _react2.default.createElement(Content, null)
    )
  );
});

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(2);

var _reactStatic = __webpack_require__(1);

var _PageHeader = __webpack_require__(3);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Layout = __webpack_require__(4);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Header() {
  return _react2.default.createElement(
    'div',
    { className: 'grid-col-span-9-l' },
    _react2.default.createElement(
      _PageHeader2.default,
      null,
      '\u0110\u01B0\u1EDDng d\u1EABn kh\xF4ng t\u1ED3n t\u1EA1i'
    ),
    _react2.default.createElement(
      'p',
      { className: 'tc lh-copy mh5-l' },
      'Trang web b\u1EA1n mu\u1ED1n xem kh\xF4ng t\u1ED3n t\u1EA1i. Vui l\xF2ng ki\u1EC3m tra l\u1EA1i URL.'
    )
  );
}

exports.default = (0, _reactStatic.withSiteData)(function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'ph3-ns' },
    _react2.default.createElement(
      _reactHelmet.Helmet,
      null,
      _react2.default.createElement(
        'title',
        null,
        '404 :: El Julio'
      )
    ),
    _react2.default.createElement(_Layout2.default, { header: _react2.default.createElement(Header, null) })
  );
});

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(7);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _reactDom = __webpack_require__(39);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(40);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Your top level component

_reactModal2.default.setAppElement('#root');

// Render your app
if (typeof document !== 'undefined') {
  var render = function render(Comp) {
    _reactDom2.default.render(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStaticRoutes = __webpack_require__(41);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _reactHotLoader = __webpack_require__(79);

var _reactStatic = __webpack_require__(1);

__webpack_require__(80);

var _AnimatedRoutes = __webpack_require__(81);

var _AnimatedRoutes2 = _interopRequireDefault(_AnimatedRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    _reactStatic.Router,
    null,
    _react2.default.createElement(_reactStaticRoutes2.default, { component: _AnimatedRoutes2.default })
  );
};

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(42);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(43);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(44);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(45);

var _reactUniversalComponent = __webpack_require__(46);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Studio',
  file: '/home/an/code/ej/public/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/containers/Studio', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Studio');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/containers/Studio';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/StudioSubtype',
  file: '/home/an/code/ej/public/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 22)), (0, _importCss3.default)('src/containers/StudioSubtype', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/StudioSubtype');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return 'src/containers/StudioSubtype';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Station',
  file: '/home/an/code/ej/public/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 26)), (0, _importCss3.default)('src/containers/Station', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Station');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return 'src/containers/Station';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Recommend',
  file: '/home/an/code/ej/public/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 27)), (0, _importCss3.default)('src/containers/Recommend', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Recommend');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return 'src/containers/Recommend';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Arrangement',
  file: '/home/an/code/ej/public/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 28)), (0, _importCss3.default)('src/containers/Arrangement', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Arrangement');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return 'src/containers/Arrangement';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Bouquet',
  file: '/home/an/code/ej/public/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 30)), (0, _importCss3.default)('src/containers/Bouquet', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Bouquet');
  },
  resolve: function resolve() {
    return /*require.resolve*/(30);
  },
  chunkName: function chunkName() {
    return 'src/containers/Bouquet';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/StationSubtype',
  file: '/home/an/code/ej/public/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 31)), (0, _importCss3.default)('src/containers/StationSubtype', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/StationSubtype');
  },
  resolve: function resolve() {
    return /*require.resolve*/(31);
  },
  chunkName: function chunkName() {
    return 'src/containers/StationSubtype';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Season',
  file: '/home/an/code/ej/public/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 32)), (0, _importCss3.default)('src/containers/Season', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Season');
  },
  resolve: function resolve() {
    return /*require.resolve*/(32);
  },
  chunkName: function chunkName() {
    return 'src/containers/Season';
  }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Home',
  file: '/home/an/code/ej/public/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 33)), (0, _importCss3.default)('src/containers/Home', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Home');
  },
  resolve: function resolve() {
    return /*require.resolve*/(33);
  },
  chunkName: function chunkName() {
    return 'src/containers/Home';
  }
}), universalOptions);
var t_9 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/About',
  file: '/home/an/code/ej/public/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 34)), (0, _importCss3.default)('src/containers/About', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/About');
  },
  resolve: function resolve() {
    return /*require.resolve*/(34);
  },
  chunkName: function chunkName() {
    return 'src/containers/About';
  }
}), universalOptions);
var t_10 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/Flower',
  file: '/home/an/code/ej/public/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 35)), (0, _importCss3.default)('src/containers/Flower', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/Flower');
  },
  resolve: function resolve() {
    return /*require.resolve*/(35);
  },
  chunkName: function chunkName() {
    return 'src/containers/Flower';
  }
}), universalOptions);
var t_11 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/HowToOrder',
  file: '/home/an/code/ej/public/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 36)), (0, _importCss3.default)('src/containers/HowToOrder', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/HowToOrder');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return 'src/containers/HowToOrder';
  }
}), universalOptions);
var t_12 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/containers/404',
  file: '/home/an/code/ej/public/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 37)), (0, _importCss3.default)('src/containers/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/containers/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return 'src/containers/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8, t_9, t_10, t_11, t_12];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 12

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(47);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(48);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(49);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(16);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAALCAYAAAAeEY8BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzkxQkQ4NkY2MTk1MTFFOEJBQjE4MTA4QkY3QzY0OEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzkxQkQ4NzA2MTk1MTFFOEJBQjE4MTA4QkY3QzY0OEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTFCRDg2RDYxOTUxMUU4QkFCMTgxMDhCRjdDNjQ4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTFCRDg2RTYxOTUxMUU4QkFCMTgxMDhCRjdDNjQ4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PrQ+mtYAAAE3SURBVHjaxNTPKwRxGMfxnV0kyspJLrR7kCSSiIMcuHDf9rKSM0fl6sjfIBeJkqvcZf24ifw+KIc9SG0iWjTeDx81tpmsaWufek1N8+P7zPM833Fc141UMqq+DuPTQdd7MYYetKAOBdzjGkc4wF2Yxd+3V74T8IlqpJFBP+I+97zhBofYFzt/+XcFimIECxj+41lLskOm8IgLVWUPp7jFk8+z9lFRq15xAnNYhBOiog16sZlBHue4wiUeUI9RffimN4EJTCJVxvlqxKB440ztPfG2oEmDNI8Y2pGU5jImtY5ZVePXDKyKN2rQhi70YUC7Ih5iYdsxS1guZQh/oqD+mS3UIqFkhtTrpHrvF88ayg2sIVfqLgiKV/XP7KBTFelGq3oe026wdh5jF1l8BL3UqfSf8FOAAQAL9ERJG4a01AAAAABJRU5ErkJggg=="

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/flower-1.42fe0075.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/flower-2.901e3965.jpg";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/flower-3.fc88cc17.jpg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/flower-4.fe6bce86.jpg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/flower-5.533ad15a.jpg";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/flower-6.6c083735.jpg";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/flower-7.d6d740da.jpg";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/flower-8.916990bd.jpg";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/flower-9.544cb837.jpg";

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YWQ1YzE5Zi05ODNlLTQ3YWUtOGM1OC1mMDc2ZjUxNDA0MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkNFNDgzRkQ2MTk1MTFFODlDQzBDOEYzQTAzMjVBMkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkNFNDgzRkM2MTk1MTFFODlDQzBDOEYzQTAzMjVBMkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGJiZDFkOWMtNGZlNS00MzZlLWFhZTgtNjUzYWQwMzY2MmVmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OTVhZWQ5YTMtMmIwMi01MTRiLWE1NTAtMmYyZDFhYTJjNGQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+D3w/dQAAAVNJREFUeNpi/P//P8NAAiaGAQYD7gAWGIPfORxbXBgA8UVaWPxx70qiQsCCnlHAiISLB8IByOAMlLYcSAf8AWJVIH4PxP+pjO8TcsA3aOIDyQvQwOP7icmGJ6B0PVr6oATvhpq5jxQHUCshsgGxNZR9gBgHnILS5lDXUwrMgJgLiO8A8RNiHHAbiN8BsRAQK1PBAQ7o8U/IAaDUepKK0eCMHv/ElITUSgccSGYcIMUBx6nkAAuoI64D8QtSHHAaGhX60ARELnDC5nuU2hAH+ADEt4BYHYi/UrMAIqU9cJxK5cB/ch2QSKVSEGTXm8HbIiIQdNQCjEMyBBhp6YAh0SyXA+JdQPwZSssRaTZR+ohxwFwgdgViHii9kEgHEKWPGAfA6gE7KG1FQvlPUB8xDoDViIeg9DEiHUCUPmIckAzEe6B1AYhOINIBROljHPG9Y4AAAwA5/lsa2bfKaQAAAABJRU5ErkJggg=="

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YWQ1YzE5Zi05ODNlLTQ3YWUtOGM1OC1mMDc2ZjUxNDA0MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTc0MUQ3ODU2MTk2MTFFODkzODZFRjdBODczMjI2OEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTc0MUQ3ODQ2MTk2MTFFODkzODZFRjdBODczMjI2OEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MGJiZDFkOWMtNGZlNS00MzZlLWFhZTgtNjUzYWQwMzY2MmVmIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OTVhZWQ5YTMtMmIwMi01MTRiLWE1NTAtMmYyZDFhYTJjNGQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Y/+wUQAAAFZJREFUeNpi/P//P8NAAiaGAQajDhh1AAsyh801muYW/tq9FLcDoICW+ZJxcEcBLleO5oJRB4ycgmi0HBgtB0YdMFoOjJYDI7IcYBztmo06YKAdABBgAAQHDEo0zXJoAAAAAElFTkSuQmCC"

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(7);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _axios = __webpack_require__(64);

var _axios2 = _interopRequireDefault(_axios);

var _moment = __webpack_require__(24);

var _moment2 = _interopRequireDefault(_moment);

var _Animate = __webpack_require__(23);

var _Animate2 = _interopRequireDefault(_Animate);

var _reactStatic = __webpack_require__(1);

var _d3Ease = __webpack_require__(13);

var _artLeft = __webpack_require__(65);

var _artLeft2 = _interopRequireDefault(_artLeft);

var _artRight = __webpack_require__(66);

var _artRight2 = _interopRequireDefault(_artRight);

var _iconClose = __webpack_require__(14);

var _iconClose2 = _interopRequireDefault(_iconClose);

var _PageHeader = __webpack_require__(3);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _OrderSender = __webpack_require__(67);

var _OrderSender2 = _interopRequireDefault(_OrderSender);

var _OrderRecipient = __webpack_require__(68);

var _OrderRecipient2 = _interopRequireDefault(_OrderRecipient);

var _OrderPayment = __webpack_require__(69);

var _OrderPayment2 = _interopRequireDefault(_OrderPayment);

var _OrderProduct = __webpack_require__(70);

var _OrderProduct2 = _interopRequireDefault(_OrderProduct);

var _OrderThankYou = __webpack_require__(72);

var _OrderThankYou2 = _interopRequireDefault(_OrderThankYou);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FLOWS = [_OrderProduct2.default, _OrderRecipient2.default, _OrderSender2.default, _OrderPayment2.default];

var Cart = function (_React$Component) {
  _inherits(Cart, _React$Component);

  function Cart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      submitting: false,
      submitted: false,
      error: null,
      currentViewIndex: 0,
      form: {
        product_type: 'Arrangement',
        purpose: 'Birthday',
        atmosphere: 'Recommendation',
        budget: 100000,
        delivery_date: (0, _moment2.default)().startOf('hour').add(4, 'hour'),
        greeting_card: 'yes_ej',
        card_content: '',
        card_type: 'handwriting',
        payment_type: 'cod',
        remarks: '',
        sender_name: '',
        sender_email: '',
        sender_company: '',
        sender_address: '',
        sender_ward: '',
        sender_district: '',
        sender_apartment_number: '',
        sender_phone: '',
        receiver_name: '',
        receiver_email: '',
        receiver_company: '',
        receiver_address: '',
        receiver_ward: '',
        receiver_district: '',
        receiver_apartment_number: '',
        receiver_phone: ''
      }
    }, _this.doSubmit = function (e) {
      e.preventDefault();
      if (_this.state.submitting) return;

      var req = _axios2.default.create({
        baseURL: _this.props.Configurations.apiUrl
      });

      _this.setState({ submitting: true });
      req.post('/orders', _this.state.form).then(function () {
        _this.setState({ submitting: false, submitted: true });
      }).catch(function (err) {
        _this.setState({
          submitting: false,
          error: 'An error has occurred. Please try again./ Đã xảy ra lỗi. Xin vui lòng kiểm tra dữ liệu và thử lại.'
        });
      });
    }, _this.doShowNext = function (e) {
      e.preventDefault();
      if (!_this.hasNext()) return;
      _this.setState({ currentViewIndex: _this.state.currentViewIndex + 1 });
    }, _this.doShowPrev = function (e) {
      e.preventDefault();
      if (!_this.hasPrev()) return;
      _this.setState({ currentViewIndex: _this.state.currentViewIndex - 1 });
    }, _this.onFieldChange = function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(function (_ref2) {
        var form = _ref2.form;

        return { form: _extends({}, form, _defineProperty({}, name, value)) };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Cart, [{
    key: 'getCurrentView',
    value: function getCurrentView() {
      return FLOWS[this.state.currentViewIndex];
    }
  }, {
    key: 'hasNext',
    value: function hasNext() {
      return this.state.currentViewIndex + 1 < FLOWS.length;
    }
  }, {
    key: 'hasPrev',
    value: function hasPrev() {
      return this.state.currentViewIndex - 1 >= 0;
    }
  }, {
    key: 'isLast',
    value: function isLast() {
      return this.state.currentViewIndex === FLOWS.length - 1;
    }
  }, {
    key: 'isChecked',
    value: function isChecked(name, value, form) {
      return form[name] === value;
    }
  }, {
    key: 'renderForm',
    value: function renderForm() {
      var _this2 = this;

      var Component = this.getCurrentView();
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          _PageHeader2.default,
          null,
          'Order Form'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde praesentium labore consequatur, non harum neque quasi obcaecati temporibus, nostrum quo error odio et, voluptatibus rem nulla placeat accusantium quos. Inventore?'
        ),
        _react2.default.createElement(
          _Animate2.default,
          {
            start: { opacity: 0 },
            enter: {
              opacity: [1],
              timing: { duration: 300, ease: _d3Ease.easeQuadOut }
            } },
          function (styles) {
            return _react2.default.createElement(
              'div',
              { style: styles },
              _react2.default.createElement(Component, {
                form: _this2.state.form,
                isChecked: _this2.isChecked,
                onFieldChange: _this2.onFieldChange
              })
            );
          }
        ),
        _react2.default.createElement(
          'div',
          { className: 'flex items-center justify-between' },
          this.hasPrev() ? _react2.default.createElement(
            'a',
            { href: '#', className: 'f-serif f3 mt3 db', onClick: this.doShowPrev },
            '\u2190 Back'
          ) : null,
          this.hasNext() ? _react2.default.createElement(
            'a',
            {
              href: '#',
              className: 'f-serif f3 mt3 db ml-auto',
              onClick: this.doShowNext },
            'Next \u2192'
          ) : this.isLast() ? _react2.default.createElement(
            'button',
            {
              disabled: this.state.submitting,
              className: 'f-serif f3 mt3 db ml-auto bg-transparent bn navy pointer',
              onClick: this.doSubmit },
            this.state.submitting ? 'Submitting…' : 'Submit'
          ) : null
        ),
        this.state.error != null ? _react2.default.createElement(
          'p',
          { className: 'dark-red fw6' },
          this.state.error
        ) : null
      );
    }
  }, {
    key: 'renderCart',
    value: function renderCart() {
      return _react2.default.createElement(
        'div',
        { className: 'db relative' },
        _react2.default.createElement(
          'div',
          { className: 'absolute top-1 right-1' },
          _react2.default.createElement(
            'button',
            {
              className: 'bn bg-transparent outline-transparent pointer',
              onClick: this.props.onRequestClose },
            _react2.default.createElement('img', { src: _iconClose2.default, alt: '' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'pv5-l grid grid-11-l grid-col-gap1' },
          _react2.default.createElement(
            'div',
            { className: 'grid-col-span-3-l flex flex-column items-center justify-center h-100' },
            _react2.default.createElement('img', { className: 'db', src: _artLeft2.default, style: { maxWidth: '250px' } })
          ),
          _react2.default.createElement(
            'div',
            { className: 'grid-col-span-5-l lh-dbl fw3' },
            this.state.submitted ? _react2.default.createElement(_OrderThankYou2.default, null) : this.renderForm()
          ),
          _react2.default.createElement(
            'div',
            { className: 'grid-col-span-3-l flex flex-column items-center justify-center h-100' },
            _react2.default.createElement('img', {
              className: 'db tc center',
              src: _artRight2.default,
              style: { maxWidth: '250px' }
            })
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          onRequestClose = _props.onRequestClose;


      return _react2.default.createElement(
        _reactModal2.default,
        {
          className: 'ReactModal__Content',
          overlayClassName: 'ReactModal__Overlay',
          onRequestClose: onRequestClose,
          isOpen: isOpen },
        this.renderCart()
      );
    }
  }]);

  return Cart;
}(_react2.default.Component);

exports.default = (0, _reactStatic.withSiteData)(Cart);

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/art-left.70e72af8.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/art-right.dc284c42.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var form = props.form,
      onFieldChange = props.onFieldChange;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h3",
      { className: "f-serif f4 fw4" },
      "Your information/ Th\xF4ng tin v\u1EC1 b\u1EA1n"
    ),
    _react2.default.createElement(
      "div",
      { className: "flex flex-wrap" },
      _react2.default.createElement(
        "div",
        { className: "w-50 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy mr3" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "Name/ T\xEAn*"
          ),
          _react2.default.createElement("input", {
            type: "text",
            className: "bn pv2 w-100 fw3",
            name: "sender_name",
            value: form.sender_name,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "w-50 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy ml3" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "Company/ C\xF4ng ty"
          ),
          _react2.default.createElement("input", {
            type: "text",
            className: "bn pv2 w-100 fw3",
            name: "sender_company",
            value: form.sender_company,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "w-50 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy mr3" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "Email*"
          ),
          _react2.default.createElement("input", {
            type: "email",
            className: "bn pv2 w-100 fw3",
            name: "sender_email",
            value: form.sender_email,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "w-50 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy ml3" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "Phone number/ S\u1ED1 \u0111i\u1EC7n tho\u1EA1i*"
          ),
          _react2.default.createElement("input", {
            type: "text",
            className: "bn pv2 w-100 fw3",
            name: "sender_phone",
            value: form.sender_phone,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "w-100 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "Street name/ \u0110\u1ECBa ch\u1EC9*"
          ),
          _react2.default.createElement("input", {
            type: "text",
            className: "bn pv2 w-100 fw3",
            name: "sender_address",
            value: form.sender_address,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "w-33 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy mr3" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "Ward/ Ph\u01B0\u1EDDng*"
          ),
          _react2.default.createElement("input", {
            type: "text",
            className: "bn pv2 w-100 fw3",
            name: "sender_ward",
            value: form.sender_ward,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "w-33 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy mh3" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "District/ Qu\u1EADn*"
          ),
          _react2.default.createElement("input", {
            type: "text",
            className: "bn pv2 w-100 fw3",
            name: "sender_district",
            value: form.sender_district,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "w-33 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy ml3" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "Apartment No./ S\u1ED1 c\u0103n h\u1ED9"
          ),
          _react2.default.createElement("input", {
            type: "text",
            className: "bn pv2 w-100 fw3",
            name: "sender_apartment_number",
            value: form.sender_apartment_number,
            onChange: onFieldChange
          })
        )
      )
    )
  );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var form = props.form,
      onFieldChange = props.onFieldChange;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h3",
      { className: "f-serif f4 fw4" },
      "Recipient's information/ Th\xF4ng tin ng\u01B0\u1EDDi nh\u1EADn"
    ),
    _react2.default.createElement(
      "div",
      { className: "flex flex-wrap" },
      _react2.default.createElement(
        "div",
        { className: "w-50 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy mr3" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "Name/ T\xEAn*"
          ),
          _react2.default.createElement("input", {
            type: "text",
            className: "bn pv2 w-100 fw3",
            name: "receiver_name",
            value: form.receiver_name,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "w-50 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy ml3" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "Company/ C\xF4ng ty"
          ),
          _react2.default.createElement("input", {
            type: "text",
            className: "bn pv2 w-100 fw3",
            name: "receiver_company",
            value: form.receiver_company,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "w-50 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy mr3" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "Email"
          ),
          _react2.default.createElement("input", {
            type: "email",
            className: "bn pv2 w-100 fw3",
            name: "receiver_email",
            value: form.receiver_email,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "w-50 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy ml3" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "Phone number/ S\u1ED1 \u0111i\u1EC7n tho\u1EA1i*"
          ),
          _react2.default.createElement("input", {
            type: "text",
            className: "bn pv2 w-100 fw3",
            name: "receiver_phone",
            value: form.receiver_phone,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "w-100 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "Street name/ \u0110\u1ECBa ch\u1EC9*"
          ),
          _react2.default.createElement("input", {
            type: "text",
            className: "bn pv2 w-100 fw3",
            name: "receiver_address",
            value: form.receiver_address,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "w-33 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy mr3" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "Ward/ Ph\u01B0\u1EDDng*"
          ),
          _react2.default.createElement("input", {
            type: "text",
            className: "bn pv2 w-100 fw3",
            name: "receiver_ward",
            value: form.receiver_ward,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "w-33 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy mh3" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "District/ Qu\u1EADn*"
          ),
          _react2.default.createElement("input", {
            type: "text",
            className: "bn pv2 w-100 fw3",
            name: "receiver_district",
            value: form.receiver_district,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "w-33 mb3" },
        _react2.default.createElement(
          "div",
          { className: "bb b--navy ml3" },
          _react2.default.createElement(
            "label",
            { htmlFor: "", className: "db fw6" },
            "Apartment No./ S\u1ED1 c\u0103n h\u1ED9"
          ),
          _react2.default.createElement("input", {
            type: "text",
            className: "bn pv2 w-100 fw3",
            name: "receiver_apartment_number",
            value: form.receiver_apartment_number,
            onChange: onFieldChange
          })
        )
      )
    )
  );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  var form = props.form,
      onFieldChange = props.onFieldChange,
      isChecked = props.isChecked;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h3',
      { className: 'f-serif f4 fw4' },
      'Payment/ H\xECnh th\u1EE9c thanh to\xE1n'
    ),
    _react2.default.createElement(
      'p',
      { className: 'lh-dbl fw3' },
      'Please select your preferred method'
    ),
    _react2.default.createElement(
      _Radio2.default,
      {
        name: 'payment_type',
        value: 'bank_transfer',
        onChange: onFieldChange,
        checked: isChecked('payment_type', 'bank_transfer', form) },
      'Bank Transfer/ Chuy\u1EC3n kho\u1EA3n ng\xE2n h\xE0ng'
    ),
    _react2.default.createElement(
      _Radio2.default,
      {
        name: 'payment_type',
        value: 'credit_card',
        onChange: onFieldChange,
        checked: isChecked('payment_type', 'credit_card', form) },
      'Credit Card/ Th\u1EBB t\xEDn d\u1EE5ng'
    ),
    _react2.default.createElement(
      _Radio2.default,
      {
        name: 'payment_type',
        value: 'cod',
        onChange: onFieldChange,
        checked: isChecked('payment_type', 'cod', form) },
      'Cash on Delivery/ Thanh to\xE1n khi giao h\xE0ng'
    )
  );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Radio = __webpack_require__(15);

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (props) {
  var form = props.form,
      onFieldChange = props.onFieldChange,
      isChecked = props.isChecked;

  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      'h3',
      { className: 'f-serif f4 fw4' },
      'Input desired information/ Y\xEAu c\u1EA7u c\u1EE7a b\u1EA1n'
    ),
    _react2.default.createElement(
      'p',
      { className: 'lh-copy' },
      'Please inspire us/ H\xE3y truy\u1EC1n c\u1EA3m h\u1EE9ng cho ch\xFAng t\xF4i'
    ),
    _react2.default.createElement(
      'div',
      { className: 'flex flex-column flex-row-l flex-wrap' },
      _react2.default.createElement(
        'div',
        { className: 'w-100 mb3' },
        _react2.default.createElement(
          'div',
          { className: 'w-50' },
          _react2.default.createElement(
            'div',
            { className: 'bb b--navy' },
            _react2.default.createElement(
              'label',
              { htmlFor: '', className: 'db mv3 fw6' },
              'Choose your product/ Ch\u1ECDn lo\u1EA1i s\u1EA3n ph\u1EA9m'
            ),
            _react2.default.createElement(
              'select',
              {
                className: 'bn w-100 pv2 bg-transparent f-sans-serif navy fw3 outline-transparent f6',
                name: 'product_type',
                value: form.product_type,
                onChange: onFieldChange },
              PRODUCT_TYPES.map(function (type) {
                return _react2.default.createElement(
                  'option',
                  { key: type, value: type },
                  type
                );
              })
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'w-50 mb3 pr3' },
        _react2.default.createElement(
          'div',
          { className: 'bb b--navy' },
          _react2.default.createElement(
            'label',
            { htmlFor: '', className: 'db mt3 fw6' },
            'Your budget/ Ng\xE2n s\xE1ch'
          ),
          _react2.default.createElement('input', {
            type: 'number',
            step: '10000',
            min: '0',
            className: 'bn pv2 w-100 outline-transparent f-sans-serif f5 navy fw3',
            style: { marginTop: '.2rem' },
            name: 'budget',
            value: form.budget,
            onChange: onFieldChange
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'w-50 mb3 pr3' },
        _react2.default.createElement(
          'div',
          { className: 'bb b--navy' },
          _react2.default.createElement(
            'label',
            { htmlFor: '', className: 'db mt3 fw6' },
            'Purpose/ D\xF9ng \u0111\u1EC3'
          ),
          _react2.default.createElement(
            'select',
            {
              className: 'bn w-100 pv2 bg-transparent f-sans-serif f6 navy fw3 outline-transparent',
              name: 'purpose',
              value: form.purpose,
              onChange: onFieldChange },
            PURPOSES.map(function (type) {
              return _react2.default.createElement(
                'option',
                { key: type, value: type },
                type
              );
            })
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'w-100 mb3' },
        _react2.default.createElement(
          'div',
          { className: 'w-50' },
          _react2.default.createElement(
            'div',
            { className: 'bb b--navy' },
            _react2.default.createElement(
              'label',
              { htmlFor: '', className: 'db mv3 fw6' },
              'Atmosphere/ C\u1EA3m x\xFAc c\u1EE7a s\u1EA3n ph\u1EA9m'
            ),
            _react2.default.createElement(
              'select',
              {
                className: 'bn w-100 pv2 bg-transparent f-sans-serif navy fw3 outline-transparent',
                name: 'atmosphere',
                value: form.atmosphere,
                onChange: onFieldChange },
              ATMOSPHERES.map(function (type) {
                return _react2.default.createElement(
                  'option',
                  { key: type, value: type },
                  type
                );
              })
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'w-40 pr3 mb3' },
        _react2.default.createElement(
          'label',
          { htmlFor: '', className: 'db fw6' },
          'Delivered at / Th\u1EDDi \u0111i\u1EC3m giao h\xE0ng'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'w-60 ph3 mb3' },
        _react2.default.createElement(_reactDatetime2.default, {
          dateFormat: 'DD/MM/YYYY',
          timeFormat: 'HH:mm',
          isValidDate: function isValidDate(d) {
            return d.isAfter((0, _moment2.default)().subtract(1, 'day'));
          },
          onChange: function onChange(value) {
            return onFieldChange({
              target: {
                name: 'delivery_date',
                value: new Date(value.toISOString())
              }
            });
          },
          value: form.delivery_date,
          renderInput: function renderInput(props) {
            return _react2.default.createElement(
              'div',
              { className: 'bb b--navy' },
              _react2.default.createElement('input', _extends({}, props, {
                className: 'bn pv2 w-100 outline-transparent f-sans-serif f6 navy fw3'
              }))
            );
          }
        })
      ),
      _react2.default.createElement(
        'div',
        { className: 'w-40 pr3 mb3' },
        _react2.default.createElement(
          'label',
          { htmlFor: '', className: 'db fw6' },
          'Greeting Card/ Thi\u1EC7p ch\xFAc m\u1EEBng'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'w-60 pl3 mb3 flex justify-between' },
        _react2.default.createElement(
          _Radio2.default,
          {
            name: 'greeting_card',
            value: 'yes_ej',
            onChange: onFieldChange,
            checked: isChecked('greeting_card', 'yes_ej', form) },
          'ELJULIO will provide'
        ),
        _react2.default.createElement(
          _Radio2.default,
          {
            name: 'greeting_card',
            value: 'yes_own',
            onChange: onFieldChange,
            checked: isChecked('greeting_card', 'yes_own', form) },
          'Bring your own'
        ),
        _react2.default.createElement(
          _Radio2.default,
          {
            name: 'greeting_card',
            value: 'no',
            onChange: onFieldChange,
            checked: isChecked('greeting_card', 'no', form) },
          'No'
        )
      ),
      form.greeting_card === 'no' ? null : _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { className: 'w-100 mb3 pr3' },
          _react2.default.createElement(
            'div',
            { className: 'bb b--navy' },
            _react2.default.createElement(
              'label',
              { htmlFor: '', className: 'db mt3 fw6' },
              'Message/ N\u1ED9i dung thi\u1EC7p'
            ),
            _react2.default.createElement('textarea', {
              name: 'card_content',
              value: form.card_content,
              onChange: onFieldChange,
              rows: 5,
              maxLength: 250,
              placeholder: 'Maximum 250 characters',
              className: 'lh-copy bn pv2 w-100 outline-transparent f-sans-serif f6 navy fw3'
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'w-40 pr3 mb3' },
          _react2.default.createElement(
            'label',
            { htmlFor: '', className: 'db fw6' },
            'Card format/ H\xECnh th\u1EE9c'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'w-60 pl3 mb3 flex justify-between' },
          _react2.default.createElement(
            _Radio2.default,
            {
              name: 'card_type',
              value: 'handwriting',
              onChange: onFieldChange,
              checked: isChecked('card_type', 'handwriting', form) },
            'Hand-writing/ Vi\u1EBFt tay'
          ),
          _react2.default.createElement(
            _Radio2.default,
            {
              name: 'card_type',
              value: 'printing',
              onChange: onFieldChange,
              checked: isChecked('card_type', 'printing', form) },
            'Printing/ In s\u1EB5n'
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'w-100 mb3 pr3' },
        _react2.default.createElement(
          'div',
          { className: 'bb b--navy' },
          _react2.default.createElement(
            'label',
            { htmlFor: '', className: 'db mt3 fw6' },
            'Remarks/ Ghi ch\xFA cho ELJULIO'
          ),
          _react2.default.createElement('textarea', {
            name: 'remarks',
            value: form.remarks,
            onChange: onFieldChange,
            rows: 5,
            placeholder: 'Anything we need to notice when handling this order? / C\xF3 \u0111i\u1EC1u g\xEC ELJULIO c\u1EA7n l\u01B0u \xFD khi ph\u1EE5c v\u1EE5 b\u1EA1n?',
            className: 'lh-copy bn pv2 w-100 outline-transparent f-sans-serif f6 navy fw3'
          })
        )
      )
    )
  );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDatetime = __webpack_require__(71);

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _moment = __webpack_require__(24);

var _moment2 = _interopRequireDefault(_moment);

var _Radio = __webpack_require__(15);

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PRODUCT_TYPES = ['Arrangement', 'Bouquet (Stick Type)', 'Bouquet (Round Type)', 'Original Flower Box', 'Stand Flower', 'Box Gift', 'Foliage Plant', 'Orchid Bowl'];

var PURPOSES = ['Birthday', 'Dressing Room Flowers', 'Condolence', 'Farewell/ Retirement', 'Inquiry', 'Lobby Flowers', "Father's Day", "Mother's Day", 'Opening/ Celebration', 'Promoation Inaugural', 'Relocation Holiday', 'Wedding', 'Wedding Anniversary', 'Other Congratulations'];

var ATMOSPHERES = ['Recommendation', 'Simple/ Modern', 'Cute', 'I Feel Energic', 'Bright and Gorgeous', 'Natural', 'Individual and Cool'];

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("react-datetime");

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (props) {
  return _react2.default.createElement(
    'div',
    { className: 'flex flex-column justify-center align-center h-100 tc' },
    _react2.default.createElement(
      'div',
      { className: 'mb4' },
      _react2.default.createElement('img', { src: _flowerLogo2.default, alt: '' })
    ),
    _react2.default.createElement(
      'p',
      { className: 'f3 fw7 f-serif ttu mv2' },
      'Thanks for choosing eljulio'
    ),
    _react2.default.createElement(
      'p',
      { className: 'f3 fw7 f-serif ttu mv2' },
      'Let us surprise you!'
    ),
    _react2.default.createElement(
      'div',
      { className: 'mt5' },
      _react2.default.createElement('img', { src: _slogan2.default, alt: '' })
    )
  );
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _slogan = __webpack_require__(11);

var _slogan2 = _interopRequireDefault(_slogan);

var _flowerLogo = __webpack_require__(73);

var _flowerLogo2 = _interopRequireDefault(_flowerLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAABwCAYAAAAwhbOWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YWQ1YzE5Zi05ODNlLTQ3YWUtOGM1OC1mMDc2ZjUxNDA0MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjVDN0Q0QTg3RThGMTFFOEJGQzBGNEY2RThEQzEyRTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjVDN0Q0QTc3RThGMTFFOEJGQzBGNEY2RThEQzEyRTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZWNhMzY3MzgtZDNjMy00NzcxLWE3NGItZjdiMTE0NjJlOWE2IiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6OTVhZWQ5YTMtMmIwMi01MTRiLWE1NTAtMmYy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"

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactModal = __webpack_require__(7);

var _reactModal2 = _interopRequireDefault(_reactModal);

var _FlowerDetails = __webpack_require__(25);

var _FlowerDetails2 = _interopRequireDefault(_FlowerDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlowerModal = function (_React$Component) {
  _inherits(FlowerModal, _React$Component);

  function FlowerModal() {
    _classCallCheck(this, FlowerModal);

    return _possibleConstructorReturn(this, (FlowerModal.__proto__ || Object.getPrototypeOf(FlowerModal)).apply(this, arguments));
  }

  _createClass(FlowerModal, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          isOpen = _props.isOpen,
          onRequestClose = _props.onRequestClose,
          product = _props.product;


      return _react2.default.createElement(
        _reactModal2.default,
        {
          className: 'ReactModal__Content',
          overlayClassName: 'ReactModal__Overlay',
          onRequestClose: onRequestClose,
          isOpen: isOpen },
        _react2.default.createElement(_FlowerDetails2.default, { product: product, onRequestClose: onRequestClose })
      );
    }
  }]);

  return FlowerModal;
}(_react2.default.Component);

exports.default = FlowerModal;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/home-left.48d7d816.jpg";

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAADVCAYAAACv1L6HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YWQ1YzE5Zi05ODNlLTQ3YWUtOGM1OC1mMDc2ZjUxNDA0MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTM0NkRGMUY2MEFCMTFFOEExNkVGRjM2REJCRjkyNkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTM0NkRGMUU2MEFCMTFFOEExNkVGRjM2REJCRjkyNkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWVjNzRkYmMtOGJlNC00MzdmLTg1NjMtNDdjMTgzYThlY2FiIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzdhNTI3MjctMDIxZC03NjQ4LWFiZmUtNjg2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"

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQoAAADVCAYAAACv1L6HAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo1YWQ1YzE5Zi05ODNlLTQ3YWUtOGM1OC1mMDc2ZjUxNDA0MmMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzA1RDRFMDg2MEFCMTFFODk5RTVEQzJBQTVDNThGMkUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzA1RDRFMDc2MEFCMTFFODk5RTVEQzJBQTVDNThGMkUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWVjNzRkYmMtOGJlNC00MzdmLTg1NjMtNDdjMTgzYThlY2FiIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzdhNTI3MjctMDIxZC03NjQ4LWFiZmUtNjg2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"

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/logo.808ee19b.png";

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 80 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(9);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStatic = __webpack_require__(1);

var _recompose = __webpack_require__(82);

var _reactMove = __webpack_require__(83);

var _d3Ease = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _recompose.getContext)({
  router: _propTypes2.default.object,
  staticURL: _propTypes2.default.string
})(function (_ref) {
  var getComponentForPath = _ref.getComponentForPath,
      router = _ref.router,
      staticURL = _ref.staticURL;

  var render = function render(props) {
    var Comp = getComponentForPath((0, _reactStatic.cleanPath)(props.location.pathname));
    if (!Comp) {
      Comp = getComponentForPath('404');
    }

    if (staticURL) {
      return _react2.default.createElement(
        'div',
        { className: 'relative' },
        _react2.default.createElement(Comp, props)
      );
    }

    return _react2.default.createElement(
      _reactMove.NodeGroup
      // React-move will handle the entry and exit of any items we pass in `data`
      ,
      { data: [{
          // pass the current Comp, props, ID and router
          id: props.location.pathname,
          Comp: Comp,
          props: props,
          router: router
        }],
        keyAccessor: function keyAccessor(d) {
          return d.id;
        },
        start: function start() {
          return {
            opacity: [0],
            scale: 1
          };
        },
        enter: function enter() {
          return {
            opacity: [1],
            timing: { duration: 300, delay: 300, ease: _d3Ease.easeQuadOut }
          };
        },
        update: function update() {
          return {
            opacity: [1]
          };
        },
        leave: function leave() {
          return {
            opacity: [0],
            timing: { duration: 300, ease: _d3Ease.easeQuadOut }
          };
        } },
      function (nodes) {
        return _react2.default.createElement(
          'div',
          { style: { position: 'relative' } },
          nodes.map(function (_ref2) {
            var key = _ref2.key,
                data = _ref2.data,
                _ref2$state = _ref2.state,
                opacity = _ref2$state.opacity,
                translateY = _ref2$state.translateY;

            // Here, we override the router context with the one that was
            // passed with each route
            var PreservedRouterContext = (0, _recompose.withContext)({
              router: _propTypes2.default.object
            }, function () {
              return {
                router: data.router
              };
            })(function (props) {
              return _react2.default.createElement('div', props);
            });

            return _react2.default.createElement(
              PreservedRouterContext,
              {
                key: key,
                style: {
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  transform: 'translateY(' + translateY + 'px)',
                  opacity: opacity
                } },
              _react2.default.createElement(data.Comp, data.props)
            );
          })
        );
      }
    );
  };

  return _react2.default.createElement(_reactStatic.Route, { path: '*', render: render });
});

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = require("react-move");

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.42f6f9dc.js.map