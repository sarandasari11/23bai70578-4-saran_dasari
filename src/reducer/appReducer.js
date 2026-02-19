export const ACTIONS = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART_QUANTITY: 'UPDATE_CART_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
  TOGGLE_THEME: 'TOGGLE_THEME',
  LOGIN_USER: 'LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER'
}

const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART: {
      const existingItem = state.cart.find(item => item.id === action.payload.id)
      
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      }
    }

    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }

    case ACTIONS.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0)
      }

    case ACTIONS.CLEAR_CART:
      return {
        ...state,
        cart: []
      }

    case ACTIONS.TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      }

    case ACTIONS.LOGIN_USER:
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: true,
          name: action.payload.name || state.user.name
        }
      }

    case ACTIONS.LOGOUT_USER:
      return {
        ...state,
        user: {
          ...state.user,
          isLoggedIn: false
        }
      }

    default:
      return state
  }
}

export default appReducer
