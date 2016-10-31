'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

var _cnrAsButton = require('cnr-as-button');

require('./sass/main.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (!global._babelPolyfill) {
  require('babel-polyfill');
}

var reducers = {
  form: _reduxForm.reducer
};
var reducer = (0, _redux.combineReducers)(reducers);
var store = (0, _redux.createStore)(reducer);

var CheckboxInputElement = {
  name: 'option-1'
};

var RadioInputElement = {
  name: 'simple-radio-example',
  options: [{ label: 'Option 1', value: 'radio1' }, { label: 'Option 2', value: 'radio2', checked: true }, { label: 'Option 3', value: 'radio3' }, { label: 'Option 4', value: 'radio4' }]
};

var CheckboxButtonReduxForm = function CheckboxButtonReduxForm(field) {
  return _react2.default.createElement(_cnrAsButton.CheckboxButton, {
    type: field.type,
    input: field.input,
    label: field.label
  });
};

var DemoPage = function (_Component) {
  _inherits(DemoPage, _Component);

  function DemoPage(props) {
    _classCallCheck(this, DemoPage);

    var _this = _possibleConstructorReturn(this, (DemoPage.__proto__ || Object.getPrototypeOf(DemoPage)).call(this, props));

    _this.state = {
      simpleCheckbox1: false,
      simpleCheckbox2: true
    };

    _this.handleSimpleCheckboxChange1 = _this.handleSimpleCheckboxChange1.bind(_this);
    _this.handleSimpleCheckboxChange2 = _this.handleSimpleCheckboxChange2.bind(_this);
    return _this;
  }

  _createClass(DemoPage, [{
    key: 'handleSimpleCheckboxChange1',
    value: function handleSimpleCheckboxChange1(e, checked) {
      this.setState({ simpleCheckbox1: checked });
    }
  }, {
    key: 'handleSimpleCheckboxChange2',
    value: function handleSimpleCheckboxChange2(e, checked) {
      this.setState({ simpleCheckbox2: checked });
    }
  }, {
    key: 'handleFormSubmit',
    value: function handleFormSubmit(props) {
      console.log('Props: ', props);
    }
  }, {
    key: 'render',
    value: function render() {
      var handleSubmit = this.props.handleSubmit;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Demo Page'
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Simple Checkbox example'
        ),
        _react2.default.createElement(
          _cnrAsButton.ButtonGroup,
          null,
          _react2.default.createElement(_cnrAsButton.CheckboxButton, {
            input: CheckboxInputElement,
            onChange: this.handleSimpleCheckboxChange1,
            checked: this.state.simpleCheckbox1,
            label: 'Option 1'
          }),
          _react2.default.createElement(_cnrAsButton.CheckboxButton, {
            input: CheckboxInputElement,
            onChange: this.handleSimpleCheckboxChange2,
            checked: this.state.simpleCheckbox2,
            label: 'Option 2'
          })
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Simple Radio example'
        ),
        _react2.default.createElement(_cnrAsButton.RadioButton, {
          input: RadioInputElement
        }),
        _react2.default.createElement(
          'form',
          { onSubmit: handleSubmit(this.handleFormSubmit.bind(this)) },
          _react2.default.createElement(
            'h2',
            null,
            'Using Checkbox with redux-form'
          ),
          _react2.default.createElement(
            _cnrAsButton.ButtonGroup,
            null,
            _react2.default.createElement(_reduxForm.Field, {
              type: 'checkbox',
              name: 'checkbox-redux-form-1',
              component: CheckboxButtonReduxForm,
              label: 'Option 1' }),
            _react2.default.createElement(_reduxForm.Field, {
              type: 'checkbox',
              name: 'checkbox-redux-form-2',
              component: CheckboxButtonReduxForm,
              label: 'Option 2' })
          ),
          _react2.default.createElement(
            'h2',
            null,
            'Using Radio with redux-form'
          ),
          _react2.default.createElement(
            _cnrAsButton.ButtonGroup,
            null,
            _react2.default.createElement(_reduxForm.Field, {
              type: 'radio',
              name: 'radio-redux-form',
              component: CheckboxButtonReduxForm,
              label: 'Option 1',
              value: 'option1' }),
            _react2.default.createElement(_reduxForm.Field, {
              type: 'radio',
              name: 'radio-redux-form',
              component: CheckboxButtonReduxForm,
              label: 'Option 2',
              value: 'option2' })
          ),
          _react2.default.createElement(
            'button',
            { type: 'submit' },
            'Submit'
          )
        )
      );
    }
  }]);

  return DemoPage;
}(_react.Component);

DemoPage = (0, _reduxForm.reduxForm)({
  form: 'demoForm'
})(DemoPage);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(DemoPage, null)
), document.querySelector('.main'));