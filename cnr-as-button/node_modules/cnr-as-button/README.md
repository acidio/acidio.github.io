# Checkbox'n Radio as a Button

A React based component to transform checkbox and radio into buttons.

## Get started

```javascript
npm install cnr-as-button

import { ButtonGroup, RadioButton, CheckboxButton } from 'cnr-as-button'
import 'cnr-as-button/dist/cnr-as-button.min.css'
```

## Using CheckboxButton

```javascript
const CheckboxInputElement = {
  name: 'option-1'
}

class DemoPage extends Component {
  render() {
    return <CheckboxButton
      input={CheckboxInputElement}
      onChange={this.handleSimpleCheckboxChange1}
      checked={this.state.simpleCheckbox1}
      label="Option 1"
    />
  }
```

## Using RadioButton

```javascript
const RadioInputElement = {
  name: 'simple-radio-example',
  options: [
    { label: 'Option 1', value: 'radio1' },
    { label: 'Option 2', value: 'radio2', checked: true },
    { label: 'Option 3', value: 'radio3' },
    { label: 'Option 4', value: 'radio4' }
  ]
}

class DemoPage extends Component {
  render() {
    return <RadioButton
      input={RadioInputElement}
    />
  }
```

## Using with ReduxForm

```javascript
const CheckboxButtonReduxForm = (field) => {
  return <CheckboxButton
    type={field.type}
    input={field.input}
    label={field.label}
  />
}

class DemoPage extends Component {
  render() {
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
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
      </form>
    )
  }
```
