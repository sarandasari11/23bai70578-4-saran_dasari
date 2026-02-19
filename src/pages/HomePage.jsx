import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Paper,
  Rating,
  Stack,
  Badge
} from '@mui/material'
import { ThumbUp, Settings, Favorite, ShoppingCart, Brightness4, Brightness7, Code, Palette, Speed, Cloud, Lock, Layers, Email, Phone, LocationOn, Send, CheckCircle, Person, Subject } from '@mui/icons-material'
import { AppContext } from '../context/AppContext'
import { ACTIONS } from '../reducer/appReducer'
import './HomePage.css'

const PRODUCT_ITEMS = [
  { id: 1, name: 'React Book', price: 29.99 },
  { id: 2, name: 'JavaScript Course', price: 49.99 },
  { id: 3, name: 'Material UI Kit', price: 39.99 },
  { id: 4, name: 'Web Dev Guide', price: 34.99 },
  { id: 5, name: 'Advanced CSS Course', price: 59.99 }
]

export default function HomePage() {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(AppContext)
  const [liked, setLiked] = useState(false)
  const [rating, setRating] = useState(3)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    priority: 'normal',
    subscribe: false
  })
  const [submitted, setSubmitted] = useState(false)
  const cartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0)

  const handleAddToCart = (item) => {
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: item })
  }

  const handleToggleTheme = () => {
    dispatch({ type: ACTIONS.TOGGLE_THEME })
  }

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: '',
        priority: 'normal',
        subscribe: false
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <Box className={`home-page ${state.theme === 'dark' ? 'dark-theme' : ''}`}>
      {/* AppBar Header */}
      <AppBar position="static" className="home-appbar">
        <Toolbar className="home-toolbar">
          <Settings sx={{ mr: 2 }} />
          <Typography variant="h6" className="home-title">
            Material UI Sample App 23BAI70578
          </Typography>
          <Badge badgeContent={cartCount} color="error" className="cart-badge">
            <Button
              onClick={() => navigate('/cart')}
              sx={{
                color: 'white',
                border: '1px solid rgba(255,255,255,0.85)',
                bgcolor: '#4CAF50',
                px: 2,
                py: 0.5,
                borderRadius: 1,
                textTransform: 'none',
                display: 'flex',
                gap: 1,
                '&:hover': { bgcolor: 'rgba(76, 175, 80, 0.8)' }
              }}
              startIcon={<ShoppingCart />}
            >
              <b>Cart</b>
            </Button>
          </Badge>
          <Button
            onClick={() => navigate('/login')}
            sx={{
              color: 'white',
              border: '1px solid rgba(255,255,255,0.85)',
              bgcolor: 'orange',
              px: 2,
              py: 0.5,
              borderRadius: 1,
              textTransform: 'none',
              '&:hover': { bgcolor: 'rgba(255, 234, 0, 0.72)' }
            }}
          >
            <b>Login</b>
          </Button>
          <Button
            onClick={handleToggleTheme}
            sx={{
              color: 'white',
              border: '1px solid rgba(255,255,255,0.85)',
              bgcolor: '#7B68EE',
              px: 2,
              py: 0.5,
              borderRadius: 1,
              textTransform: 'none',
              ml: 1,
              display: 'flex',
              gap: 0.75,
              '&:hover': { bgcolor: 'rgba(123, 104, 238, 0.85)' }
            }}
            startIcon={state.theme === 'light' ? <Brightness4 /> : <Brightness7 />}
          >
            <b>{state.theme === 'light' ? 'Dark' : 'Lite'}</b>
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box className="home-content">
        {/* Hero Section */}
        <Box className="home-hero">
          <Typography variant="h3" className="hero-main-title">
            Welcome to Material UI Store
          </Typography>
          <Typography variant="h6" className="hero-subtitle">
            Discover premium learning resources and tools for development
          </Typography>
          <Box className="hero-info">
            <b>New Feature:</b> Add items to your cart and checkout with our advanced shopping experience!
          </Box>
        </Box>

        {/* Products Grid */}
        <Grid container spacing={3} className="products-grid">
          {PRODUCT_ITEMS.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id} sx={{ animation: 'slideInUp 0.6s ease-out' }}>
              <Card className="product-card">
                <CardContent className="product-content">
                  <Typography variant="h5" className="product-title">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" className="product-description">
                    High-quality learning resource for development.
                  </Typography>
                  <div className="product-badges">
                    <span className="badge badge-premium">Premium</span>
                    <span className="badge badge-popular">Popular</span>
                  </div>
                  <Typography variant="h6" className="product-price">
                    ${item.price}
                  </Typography>
                  <div className="product-rating">
                    <Rating value={rating} readOnly size="small" />
                  </div>
                </CardContent>
                <CardActions className="product-actions">
                  <Button 
                    variant="contained"
                    className="product-btn add-to-cart-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </Button>
                  <Button 
                    variant="outlined"
                    className="product-btn learn-more-btn"
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid> 

        {/* Experiment 4 Features Section - MOVED UP */}
        <Paper className="features-section">
          <Typography variant="h5" className="section-title" sx={{ mb: 2, borderBottom: 'none' }}>
            ✨ Experiment 4 Features
          </Typography>
          <Stack spacing={2} className="features-list">
            <Box className="feature-item">
              <Cloud className="feature-icon" />
              <Typography className="feature-text"><strong>Global Context API</strong> - Centralized state management for theme, cart, and user profile</Typography>
            </Box>
            <Box className="feature-item">
              <Layers className="feature-icon" />
              <Typography className="feature-text"><strong>useReducer Hook</strong> - Structured state transitions with 7+ actions (add/remove cart items, toggle theme, login/logout)</Typography>
            </Box>
            <Box className="feature-item">
              <Speed className="feature-icon" />
              <Typography className="feature-text"><strong>useMemo Optimization</strong> - Memoized calculations for cart summary (total, average price, item count)</Typography>
            </Box>
            <Box className="feature-item">
              <Palette className="feature-icon" />
              <Typography className="feature-text"><strong>Dark/Light Theme Toggle</strong> - Switch between light and dark modes with persistent state management</Typography>
            </Box>
            <Box className="feature-item">
              <ShoppingCart className="feature-icon" />
              <Typography className="feature-text"><strong>Full Shopping Cart System</strong> - Add/remove/update quantities with real-time calculations</Typography>
            </Box>
            <Box className="feature-item">
              <Code className="feature-icon" />
              <Typography className="feature-text"><strong>Advanced Routing</strong> - Multi-page SPA with Home, Login, and Cart pages using React Router</Typography>
            </Box>
            <Box className="feature-item">
              <Lock className="feature-icon" />
              <Typography className="feature-text"><strong>Authentication Flow</strong> - Mock login system with user profile management via context</Typography>
            </Box>
            <Box className="feature-item">
              <Palette className="feature-icon" />
              <Typography className="feature-text"><strong>Modern UI Design</strong> - Material-UI components with advanced CSS gradients, animations, and responsive layout</Typography>
            </Box>
          </Stack>
        </Paper>

        {/* Advanced Contact Form Section - MOVED DOWN */}
        <Paper className="contact-section advanced-contact">
          <Typography variant="h5" className="section-title">
            📧 Get in Touch - Contact Form
          </Typography>
          <Typography variant="body2" sx={{ color: '#757575', mb: 3 }}>
            We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.
          </Typography>

          {submitted ? (
            <Box sx={{ textAlign: 'center', py: 3 }}>
              <CheckCircle sx={{ fontSize: '3rem', color: '#4CAF50', mb: 2 }} />
              <Typography variant="h6" sx={{ color: '#4CAF50', fontWeight: 'bold' }}>
                Thank you for your message!
              </Typography>
              <Typography variant="body2" sx={{ color: '#757575', mt: 1 }}>
                We'll get back to you within 24 hours.
              </Typography>
            </Box>
          ) : (
            <form onSubmit={handleFormSubmit} className="advanced-form">
              <Grid container spacing={2.5}>
                {/* Full Name */}
                <Grid item xs={12} sm={6}>
                  <div className="form-group-advanced">
                    <label className="form-label-advanced">
                      <Person sx={{ mr: 1, fontSize: '1.2rem' }} />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-input-advanced"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </Grid>

                {/* Email */}
                <Grid item xs={12} sm={6}>
                  <div className="form-group-advanced">
                    <label className="form-label-advanced">
                      <Email sx={{ mr: 1, fontSize: '1.2rem' }} />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-input-advanced"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </Grid>

                {/* Phone */}
                <Grid item xs={12} sm={6}>
                  <div className="form-group-advanced">
                    <label className="form-label-advanced">
                      <Phone sx={{ mr: 1, fontSize: '1.2rem' }} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-input-advanced"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleFormChange}
                    />
                  </div>
                </Grid>

                {/* Subject */}
                <Grid item xs={12} sm={6}>
                  <div className="form-group-advanced">
                    <label className="form-label-advanced">
                      <Subject sx={{ mr: 1, fontSize: '1.2rem' }} />
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="form-input-advanced"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </Grid>

                {/* Category Dropdown */}
                <Grid item xs={12} sm={6}>
                  <div className="form-group-advanced">
                    <label className="form-label-advanced">Category</label>
                    <select
                      name="category"
                      className="form-select-advanced"
                      value={formData.category}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select a category...</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="partnership">Partnership</option>
                      <option value="bug">Bug Report</option>
                    </select>
                  </div>
                </Grid>

                {/* Priority */}
                <Grid item xs={12} sm={6}>
                  <div className="form-group-advanced">
                    <label className="form-label-advanced">Priority</label>
                    <select
                      name="priority"
                      className="form-select-advanced"
                      value={formData.priority}
                      onChange={handleFormChange}
                    >
                      <option value="low">Low</option>
                      <option value="normal">Normal</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>
                </Grid>

                {/* Message - Full Width */}
                <Grid item xs={12}>
                  <div className="form-group-advanced">
                    <label className="form-label-advanced">Message</label>
                    <textarea
                      name="message"
                      className="form-textarea-advanced"
                      placeholder="Tell us more about your inquiry..."
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={5}
                      required
                    />
                  </div>
                </Grid>

                {/* Rating */}
                <Grid item xs={12} sm={6}>
                  <div className="form-group-advanced">
                    <label className="form-label-advanced">Rate Your Experience</label>
                    <Rating
                      value={rating}
                      onChange={(event, newValue) => setRating(newValue)}
                      size="large"
                    />
                  </div>
                </Grid>

                {/* Subscribe Checkbox */}
                <Grid item xs={12} sm={6}>
                  <div className="checkbox-group-advanced">
                    <label className="checkbox-label-advanced">
                      <input
                        type="checkbox"
                        name="subscribe"
                        checked={formData.subscribe}
                        onChange={handleFormChange}
                        className="checkbox-input-advanced"
                      />
                      <span>Subscribe to our newsletter</span>
                    </label>
                  </div>
                </Grid>

                {/* Action Buttons */}
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                    <Button
                      type="submit"
                      className="submit-button-advanced"
                      startIcon={<Send />}
                    >
                      Send Message
                    </Button>
                    <Button
                      type="button"
                      className="like-button-form"
                      onClick={() => setLiked(!liked)}
                      startIcon={<Favorite sx={{ color: liked ? '#f44336' : 'inherit' }} />}
                    >
                      {liked ? 'You Liked Us!' : 'Like Us'}
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          )}
        </Paper>
      </Box>

      {/* Footer */}
      <Box className="home-footer">
        <Container>
          <Typography className="footer-text">
            © 2026 Material UI Sample App. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}
