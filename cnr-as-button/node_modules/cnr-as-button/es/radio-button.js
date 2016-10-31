'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _buttonGroup = require('./button-group');

var _buttonGroup2 = _interopRequireDefault(_buttonGroup);

var _checkboxButton = require('./checkbox-button');

var _checkboxButton2 = _interopRequireDefault(_checkboxButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  options: _react2.default.PropTypes.array.isRequired
};

var RadioButton = function (_Component) {
  _inherits(RadioButton, _Component);

  function RadioButton(props) {
    _classCallCheck(this, RadioButton);

    var _this = _possibleConstructorReturn(this, (RadioButton.__proto__ || Object.getPrototypeOf(RadioButton)).call(this, props));

    _this.state = {
      options: props.input.options
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(RadioButton, [{
    key: 'handleChange',
    value: function handleChange(e, checked, value) {
      var _this2 = this;

      this.setState(function () {
        var newState = [];
        _this2.state.options.filter(function (option) {
          option.checked = false;
          if (option.value === value) {
            option.checked = true;
          }
          newState.push(option);
        });
        return { options: newState };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props;
      var name = _props.name;
      var input = _props.input;

      var props = _objectWithoutProperties(_props, ['name', 'input']);

      var htmlOptions = input.options.map(function (option, index) {
        return _react2.default.createElement(_checkboxButton2.default, _extends({
          key: name + '-' + index,
          type: 'radio',
          id: name + '-' + index,
          onChange: _this3.handleChange,
          checked: _this3.state.options[index].checked
        }, props, {
          name: name,
          value: option.value,
          label: option.label
        }));
      });

      return _react2.default.createElement(
        _buttonGroup2.default,
        null,
        htmlOptions
      );
    }
  }]);

  return RadioButton;
}(_react.Component);

RadioButton.propTypes = propTypes;

exports.default = RadioButton;