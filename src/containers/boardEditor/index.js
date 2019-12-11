import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import { connect } from 'react-redux'

import Input from '../../components/input';
import Button from '../../components/button';
import { saveBoard } from '../../middleware/boards'
import { closeBoardEditor } from '../../core/boards/actions'

class BoardEditor extends Component {

  constructor(props) {
    super(props)
    this.handleTitleChange = this.handleTitleChange.bind(this)

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

  render() {
    const { showEditor, inProgress, closeBoardEditor, saveBoard } = this.props
    const { title } = this.state

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
          onClick={() => saveBoard(this.state)}
        />
        <Button
          value='Cancel'
          disabled={inProgress}
          onClick={closeBoardEditor}
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
    closeBoardEditor,
}

function mapStateToProps(state) {
  const { inProgress, showEditor } = state.boards
  return {inProgress, showEditor}
}

export default connect(mapStateToProps, mapDispatchToProps)(BoardEditor);