if (!global._babelPolyfill) {
  require('babel-polyfill')
}

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer, Field, reduxForm } from 'redux-form'
import { ButtonGroup, RadioButton, CheckboxButton } from 'cnr-as-button'
import './sass/main.scss'

const reducers = {
  form: formReducer
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

const CheckboxInputElement = {
  name: 'option-1'
}

const RadioInputElement = {
  name: 'simple-radio-example',
  options: [
    { label: 'Option 1', value: 'radio1' },
    { label: 'Option 2', value: 'radio2', checked: true },
    { label: 'Option 3', value: 'radio3' },
    { label: 'Option 4', value: 'radio4' }
  ]
}

const CheckboxButtonReduxForm = (field) => {
  return <CheckboxButton
    type={field.type}
    input={field.input}
    label={field.label}
  />
}

class DemoPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      simpleCheckbox1: false,
      simpleCheckbox2: true
    }

    this.handleSimpleCheckboxChange1 = this.handleSimpleCheckboxChange1.bind(this)
    this.handleSimpleCheckboxChange2 = this.handleSimpleCheckboxChange2.bind(this)
  }

  handleSimpleCheckboxChange1(e, checked) {
    this.setState({ simpleCheckbox1: checked })
  }

  handleSimpleCheckboxChange2(e, checked) {
    this.setState({ simpleCheckbox2: checked })
  }

  handleFormSubmit(props) {
    console.log('Props: ', props)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div>
        <h1>Demo Page</h1>
        <h2>Simple Checkbox example</h2>
        <ButtonGroup>
          <CheckboxButton
            input={CheckboxInputElement}
            onChange={this.handleSimpleCheckboxChange1}
            checked={this.state.simpleCheckbox1}
            label="Option 1"
          />
          <CheckboxButton
            input={CheckboxInputElement}
            onChange={this.handleSimpleCheckboxChange2}
            checked={this.state.simpleCheckbox2}
            label="Option 2"
          />
        </ButtonGroup>

        <h2>Simple Radio example</h2>
        <RadioButton
          input={RadioInputElement}
        />

        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>

          <h2>Using Checkbox with redux-form</h2>
          <ButtonGroup>
            <Field
              type="checkbox"
              name="checkbox-redux-form-1"
              component={CheckboxButtonReduxForm}
              label="Option 1" />
            <Field
              type="checkbox"
              name="checkbox-redux-form-2"
              component={CheckboxButtonReduxForm}
              label="Option 2" />
          </ButtonGroup>

          <h2>Using Radio with redux-form</h2>

          <ButtonGroup>
            <Field
              type="radio"
              name="radio-redux-form"
              component={CheckboxButtonReduxForm}
              label="Option 1"
              value="option1" />
            <Field
              type="radio"
              name="radio-redux-form"
              component={CheckboxButtonReduxForm}
              label="Option 2"
              value="option2" />
          </ButtonGroup>

          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

DemoPage = reduxForm({
  form: 'demoForm'
})(DemoPage)

ReactDOM.render(
  <Provider store={store}>
    <DemoPage />
  </Provider>, document.querySelector('.main'))
