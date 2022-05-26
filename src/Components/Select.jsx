import React from "react";

class Select extends React.Component {
  state = { val: this.props.default, options: [] };

  onInputChange(newVal) {
    this.setState({ val: newVal });
    this.props.onSelectChange(newVal);
  }

  componentDidMount = () => {
    const optionsJSX = this.props.optionsArr.map((option) => {
      return (
        <option key={option} value={option}>
          {option}
        </option>
      );
    });
    this.setState({ options: optionsJSX });
  };

  render() {
    return (
      <div className="selectContainer">
        <select
          id="mySelect"
          value={this.state.val}
          onChange={(e) => this.onInputChange(e.target.value)}
        >
          <option value={this.props.default} disabled>
            {this.props.default}
          </option>
          {this.state.options}
        </select>
      </div>
    );
  }
}

export default Select;
