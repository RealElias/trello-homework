export default function createStore(rootReducer, preloadedState, enchancer) {

  if (enchancer) {
    return enchancer(createStore)(rootReducer, preloadedState)
  }

  let reducer = rootReducer
  let state = preloadedState | {}
  let listeners = []
  let isDispatching = false

  function getState() {
    if (isDispatching) {
      throw new Error("dispatching")
    }

    return state
  }

  function subscribe(listener) {    
    if (isDispatching) {
      throw new Error("dispatching")
    }

    listeners.push(listener)
    let isSubscribed = true

    return function unsubscribe() {
      if (!isSubscribed) {
        return
      }

      if (isDispatching) {
        throw new Error(isDispatching)
      }

      isSubscribed = false
      const index = listeners.indexOf(listener)
      listeners.slice(index, 1)
    }
  }

  function dispatch(action) {
    if (isDispatching) {
      throw new Error("dispatching")
    }

    try {
      isDispatching = true
      state = reducer(state, action)
    } 
    finally {
      isDispatching = false
    }

    listeners.forEach(l => l())

    return action
  }

  return {
    dispatch,
    subscribe,
    getState,
  }
}