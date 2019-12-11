import React, { Component } from 'react'
import { ReactReduxContext } from 'react-redux'

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function connectHOC(WrappedComponent) {
    return class extends Component {
      constructor(props) {
        super(props)

        this.updateComponent = this.updateComponent.bind(this)
      }

      mergeProps(stateProps, dispatchProps, props) {
        return { ...props, ...stateProps, ...dispatchProps }
      }

      dispatchToProps(dispatch) {
        if (typeof mapDispatchToProps === 'function') {
          return dispatch(mapDispatchToProps)
        }

        return Object.entries(mapDispatchToProps).reduce((result, [name, func]) => {
          result[name] = (...args) => dispatch(func(...args))
          return result
        }, {})
      }

      updateComponent() {
        this.forceUpdate()
      }

      render() {
        return (
          <ReactReduxContext.Consumer>
            {({ store }) => {
              store.subscribe(this.updateComponent)
              return (<WrappedComponent {...this.mergeProps(this.dispatchToProps(store.dispatch), mapStateToProps(store.getState()), this.props)} />)
            }}
          </ReactReduxContext.Consumer>
        );
      }
    }
  };
}