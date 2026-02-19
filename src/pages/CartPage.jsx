import { useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Box,
  Button,
  Card,
  CardContent,
  AppBar,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Grid,
  Alert
} from '@mui/material'
import { Delete, Remove, Add, ArrowBack, Brightness4, Brightness7 } from '@mui/icons-material'
import { AppContext } from '../context/AppContext'
import { ACTIONS } from '../reducer/appReducer'
import './CartPage.css'

export default function CartPage() {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(AppContext)
  const { cart } = state

  // useMemo Hook - Optimize derived calculations
  const cartSummary = useMemo(() => {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    const avgPrice = cart.length > 0 ? (totalPrice / cart.length).toFixed(2) : 0
    const uniqueItems = cart.length

    return {
      totalItems,
      totalPrice: totalPrice.toFixed(2),
      avgPrice,
      uniqueItems
    }
  }, [cart])

  const handleRemoveItem = (id) => {
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: id })
  }

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity > 0) {
      dispatch({ type: ACTIONS.UPDATE_CART_QUANTITY, payload: { id, quantity } })
    }
  }

  const handleClearCart = () => {
    dispatch({ type: ACTIONS.CLEAR_CART })
  }

  const handleToggleTheme = () => {
    dispatch({ type: ACTIONS.TOGGLE_THEME })
  }

  return (
    <Box className={`cart-page ${state.theme === 'dark' ? 'dark-theme' : ''}`}>
      {/* AppBar Header */}
      <AppBar position="static" className="cart-appbar">
        <Toolbar className="cart-toolbar">
          <Button
            onClick={() => navigate('/')}
            className="back-button"
            startIcon={<ArrowBack />}
            sx={{
              color: 'white',
              bgcolor: 'rgba(25, 118, 210, 0.8)',
              px: 2,
              py: 0.5,
              borderRadius: 1,
              textTransform: 'none',
              border: '1px solid rgba(255,255,255,0.3)',
              '&:hover': {
                bgcolor: 'rgba(25, 118, 210, 1)',
                transform: 'translateX(-3px)',
                transition: 'all 0.3s ease'
              }
            }}
          >
            Back
          </Button>
          <Button
            onClick={handleToggleTheme}
            sx={{
              color: 'white',
              bgcolor: '#7B68EE',
              px: 2,
              py: 0.5,
              borderRadius: 1,
              textTransform: 'none',
              ml: 1,
              mr: 'auto',
              border: '1px solid rgba(255,255,255,0.3)',
              display: 'flex',
              gap: 0.75,
              '&:hover': {
                bgcolor: 'rgba(123, 104, 238, 0.85)',
                transition: 'all 0.3s ease'
              }
            }}
            startIcon={state.theme === 'light' ? <Brightness4 /> : <Brightness7 />}
          >
            <b>{state.theme === 'light' ? 'Dark' : 'Lite'}</b>
          </Button>
          <Typography variant="h6" className="cart-title">
            Shopping Cart
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box className="cart-content">
        <Typography variant="h4" className="cart-header">
          Your Cart
        </Typography>

        {/* Empty Cart Message */}
        {cart.length === 0 ? (
          <Alert severity="info" className="empty-cart-alert">
            Your cart is empty. Add some items to get started!
          </Alert>
        ) : (
          <>
            {/* Cart Summary */}
            <Grid container spacing={2} className="cart-summary-grid">
              <Grid item xs={12} sm={6} md={3}>
                <Card className="summary-card summary-card-items">
                  <CardContent>
                    <Typography className="summary-label">
                      Total Items
                    </Typography>
                    <Typography className="summary-value">
                      {cartSummary.totalItems}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card className="summary-card summary-card-unique">
                  <CardContent>
                    <Typography className="summary-label">
                      Unique Items
                    </Typography>
                    <Typography className="summary-value">
                      {cartSummary.uniqueItems}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card className="summary-card summary-card-avg">
                  <CardContent>
                    <Typography className="summary-label">
                      Average Price
                    </Typography>
                    <Typography className="summary-value">
                      ${cartSummary.avgPrice}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card className="summary-card summary-card-total">
                  <CardContent>
                    <Typography className="summary-label">
                      Total Price
                    </Typography>
                    <Typography className="summary-value">
                      ${cartSummary.totalPrice}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            {/* Cart Table */}
            <TableContainer component={Paper} className="cart-table-wrapper">
              <Table className="cart-table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="right">Subtotal</TableCell>
                    <TableCell align="center">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cart.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell className="product-name">{item.name}</TableCell>
                      <TableCell align="right" className="product-price">${item.price}</TableCell>
                      <TableCell align="center">
                        <Box className="quantity-control">
                          <IconButton
                            size="small"
                            className="quantity-btn"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                          >
                            <Remove fontSize="small" />
                          </IconButton>
                          <Typography className="quantity-value">
                            {item.quantity}
                          </Typography>
                          <IconButton
                            size="small"
                            className="quantity-btn"
                            onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Add fontSize="small" />
                          </IconButton>
                        </Box>
                      </TableCell>
                      <TableCell align="right" className="subtotal">
                        ${(item.price * item.quantity).toFixed(2)}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          size="small"
                          className="delete-btn"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Delete fontSize="small" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Action Buttons */}
            <Box className="cart-actions">
              <Button
                className="action-button clear-cart-btn"
                onClick={handleClearCart}
              >
                Clear Cart
              </Button>
              <Button
                className="action-button checkout-btn"
              >
                Checkout (${cartSummary.totalPrice})
              </Button>
            </Box>
          </>
        )}
      </Box>

      {/* Footer */}
      <Box className="cart-footer">
        <Container>
          <Typography className="footer-text">
            © 2026 Material UI Sample App. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}
