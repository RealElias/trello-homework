import React, { Component } from 'react'
import { ReactReduxContext } from 'react-redux'

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function connectHOC(WrappedComponent) {
    return class extends Component {
      constructor(props) {
        super(props);
      }

      mergeProps(stateProps, dispatchProps, props) {
        return { ...props, ...stateProps, ...dispatchProps }
      }

      render() {
        return (
          <ReactReduxContext.Consumer>
            {({store}) => {
              console.log(store.getState())
              console.log(this.mergeProps(mapDispatchToProps(), mapStateToProps(store.getState()), this.props))

              return (<WrappedComponent {...this.mergeProps(mapDispatchToProps(), mapStateToProps(store.getState()), this.props)} />)
            }}
          </ReactReduxContext.Consumer>
        );
      }
    }
  };
}