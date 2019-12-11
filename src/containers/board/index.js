import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getBoard } from '../../middleware/boards';

class BoardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
    }
  }

  componentDidMount() {
    const { id } = this.state
    this.props.getBoard(id)
  }

  render() {
    const { board } = this.props;
    if (board  && Object.entries(board)) {
      return (
        <h1>{board.title}</h1>
      )
    } else {
      return (
        <h1>There are no such board, stalker</h1>
      )
    }
  }
}

const mapDispatchToProps = {
  getBoard,
}

function mapStateToProps(state) {
  const { board } = state.boards
  return { board }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);