export const router = (dispatch) => (index) =>
  dispatch({
    type: 'REDUX_ROUTER',
    index
  })

export const setTitle = (dispatch) => (title) =>
  dispatch({
    type: 'SET_TITLE',
    title
  })

export const setDialog = (dispatch) => (bool) =>
  dispatch({
    type: 'SET_DIALOG',
    bool
  })

export const setFilter = (dispatch) => (string) =>
  dispatch({
    type: 'SET_FILTER',
    string
  })

const initialState = {
  index: 0,
  title: 'Discover',
  open: false,
  filterText: 'channel1'
}

const firstReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REDUX_ROUTER':
      return { ...state, index: action.index }
    case 'SET_TITLE':
      return { ...state, title: action.title }
    case 'SET_DIALOG':
      return { ...state, open: action.bool }
    case 'SET_FILTER':
      return { ...state, filterText: action.string }
    default:
      return state
  }
}

export default firstReducer
