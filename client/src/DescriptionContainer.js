import React, {Component} from "react";
import {connect} from "react-redux";
import Description from "./Description";
class DescriptionContainer extends Component {
  render() {
    return <Description description={this.props.description} />;
  }
}

const mapStateToProps = state => {
  return {
    description: state.description
  };
};

export default connect(mapStateToProps)(Description);
