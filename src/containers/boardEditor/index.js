import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'

import Input from '../../components/input';
import Button from '../../components/button';
import { saveBoard } from '../../middleware/boards'

class BoardEditor extends Component {

  constructor(props) {
    super(props)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSaveBoard = this.handleSaveBoard.bind(this)

    this.state = {
      id: props.id,
      title: props.title,
      showEditor: props.showEditor,
      inProgress: props.inProgress,
    }
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handleCancel() {
    this.setState({
      showEditor: false,
    });
  }

  handleSaveBoard(event) {
    event.preventDefault();

    this.props.saveBoard(this.props);
  }

  render() {
    const { inProgress } = this.props
    const { showEditor, title } = this.state
    console.log("editor render: ", { 
      fromProps: this.props.showEditor, 
      fromState: this.state.showEditor 
    })
    return (
      <ReactModal isOpen={showEditor} >
        <Input
          value={title}
          placeholder='Title'
          disabled={inProgress}
          onChange={this.handleTitleChange}
        />
        <Button
          value='Save'
          disabled={inProgress}
          onClick={this.handleSaveBoard}
        />
        <Button
          value='Cancel'
          disabled={inProgress}
          onClick={this.handleCancel}
        />
      </ReactModal>
    )
  }
}

BoardEditor.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
}

BoardEditor.defaultProps = {
  title: ''
}

const mapDispatchToProps = {
  saveBoard,
}

function mapStateToProps(state) {
  const { inProgress, showEditor } = state.boards
  return {inProgress, showEditor}
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardEditor);