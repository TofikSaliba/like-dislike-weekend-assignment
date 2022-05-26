import React from "react";
import Picture from "./Components/Picture";
import Select from "./Components/Select";
import CustomButton from "./Components/CustomButton";

import "./style.css";

class App extends React.Component {
  state = {
    categories: ["animals", "plants", "space", "water"],
    pickedCat: "",
    imgIndex: 1,
    yes: 0,
    no: 0,
    msg: "Are You Ready?",
    clicked: false,
  };

  onSelectChange = (newCat) => {
    this.setState({
      pickedCat: newCat,
      imgIndex: 1,
      msg: "",
      yes: 0,
      no: 0,
    });
  };

  handleClick = (classId) => {
    if (this.state.imgIndex < 5 && this.state.pickedCat) {
      this.setState((prev) => {
        return {
          imgIndex: prev.imgIndex + 1,
          [classId]: prev[classId] + 1,
          clicked: true,
        };
      });
    } else if (this.state.imgIndex === 5 && !this.state.msg) {
      let msg2 =
        this.state.yes > this.state.no
          ? `Cool! You love ${this.state.pickedCat}, i like that :))`
          : `Too bad! I guess you dont like ${this.state.pickedCat}...`;
      this.setState((prev) => {
        return { msg: msg2, [classId]: prev[classId] + 1 };
      });
    }
    setTimeout(() => {
      this.setState({ clicked: false });
    }, 1000);
  };

  render() {
    return (
      <div className="mainContainer">
        {/* <Select
          default="Select category"
          onSelectChange={this.onSelectChange}
          optionsArr={this.state.categories}
        /> */}
        <div className="counters">
          <span>🤢{this.state.no}</span>
          <span>💖{this.state.yes}</span>
        </div>
        {this.state.msg ? (
          <div className="finalMsg">
            {this.state.msg}
            <Select
              default="Select category"
              onSelectChange={this.onSelectChange}
              optionsArr={this.state.categories}
            />
          </div>
        ) : (
          <Picture
            category={this.state.pickedCat}
            index={this.state.imgIndex}
          />
        )}
        <div className="yesNoBtns">
          <CustomButton
            text="❌"
            className="no"
            handleClick={this.handleClick}
            disabled={this.state.clicked}
          />
          <CustomButton
            text="✔"
            className="yes"
            handleClick={this.handleClick}
            disabled={this.state.clicked}
          />
        </div>
      </div>
    );
  }
}

export default App;
