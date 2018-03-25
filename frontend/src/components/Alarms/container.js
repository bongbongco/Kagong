import React, { Component } from "react";
import Alarm from "./presenter";

class Container extends Component {
    render() {
        return <Alarm {...this.props} {...this.state} />
    }
}

export default Container;