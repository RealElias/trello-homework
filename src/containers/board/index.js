import React, { Component } from 'react'
import { connect } from 'react-redux'

class BoardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div />
    )
  }
}

const mapDispatchToProps = {
}

function mapStateToProps(state) {
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);