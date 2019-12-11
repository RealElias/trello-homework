import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getBoards } from '../../middleware/boards'
import BoardList from '../../components/boardList';

class HomeContainer extends Component {
  constructor(props) {
    super(props)

    this.onGetBoardsClick = this.onGetBoardsClick.bind(this)

    this.state = {
      boards: [],
      inProgress: false,
    }
  }

  onGetBoardsClick(event) {
    event.preventDefault()

    this.props.getBoards()
  }

  render() {
    const { boards, inProgress } = this.props;
    return (
      <div>
        <BoardList
          boards={boards}
          inProgress={inProgress}
        />
        <br />
        <div>
          <button onClick={this.onGetBoardsClick}>Get Boards</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = {
  getBoards,
}

function mapStateToProps(state) {
  const { inProgress, boards } = state.boards
  return { inProgress, boards }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)