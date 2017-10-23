'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _src = require('./src');

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var debug = require('debug')('select-currency:demo');

var style = {
    fontWeight: 'bold'
};

var SelectCurrencyDemo = function (_React$Component) {
    _inherits(SelectCurrencyDemo, _React$Component);

    function SelectCurrencyDemo(props) {
        _classCallCheck(this, SelectCurrencyDemo);

        var _this = _possibleConstructorReturn(this, (SelectCurrencyDemo.__proto__ || Object.getPrototypeOf(SelectCurrencyDemo)).call(this, props));

        _this.state = {
            currencyAbbrev: ''
        };
        _this.onChange = _this.onChange.bind(_this);
        _this.componentDidCatch = _this.componentDidCatch.bind(_this);
        return _this;
    }

    _createClass(SelectCurrencyDemo, [{
        key: 'render',
        value: function render() {
            var currencyAbbrev = this.state.currencyAbbrev;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'form',
                    { onSubmit: function onSubmit(ev) {
                            return ev.preventDefault();
                        } },
                    _react2.default.createElement(
                        'label',
                        { style: style, htmlFor: 'select-currency' },
                        'Currency'
                    ),
                    _react2.default.createElement(_src2.default, { id: 'select-currency', name: 'currency', value: currencyAbbrev, onChange: this.onChange })
                ),
                !!currencyAbbrev && _react2.default.createElement(
                    'div',
                    null,
                    'Selected ',
                    currencyAbbrev
                )
            );
        }
    }, {
        key: 'componentDidCatch',
        value: function componentDidCatch(error, info) {
            console.log(error);
            console.log(info);
        }
    }, {
        key: 'onChange',
        value: function onChange(ev) {
            var _ev$target = ev.target,
                name = _ev$target.name,
                value = _ev$target.value;

            this.setState({ currencyAbbrev: value });
            window.localStorage.setItem('initValue', value);
        }

        // Error fence

    }, {
        key: 'componentDidCatch',
        value: function componentDidCatch(error, info) {}
    }]);

    return SelectCurrencyDemo;
}(_react2.default.Component);

(function mountDemo() {
    var el = document.getElementById('demo-mountpoint');

    if (el) {
        _reactDom2.default.render(_react2.default.createElement(SelectCurrencyDemo, null), el);
    }
})();
