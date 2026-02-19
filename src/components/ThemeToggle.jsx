import { useContext } from 'react'
import { IconButton } from '@mui/material'
import { Brightness4, Brightness7 } from '@mui/icons-material'
import { AppContext } from '../context/AppContext'
import { ACTIONS } from '../reducer/appReducer'

export default function ThemeToggle() {
  const { state, dispatch } = useContext(AppContext)

  const handleToggleTheme = () => {
    dispatch({ type: ACTIONS.TOGGLE_THEME })
  }

  return (
    <IconButton
      onClick={handleToggleTheme}
      sx={{ color: 'white' }}
      title={`Switch to ${state.theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {state.theme === 'light' ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  )
}
