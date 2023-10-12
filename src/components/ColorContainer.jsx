import { FaSun, FaMoon } from "react-icons/fa6"
import { useThemeContext } from '../hooks/useThemeContext'

const colors = ['#F99417', '#005B41', '#219C90'];

function ColorContainer() {
  const { changeColor, theme, changeTheme } = useThemeContext()

  const setNewTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    changeTheme(newTheme)
    document.documentElement.setAttribute('data-theme', theme)
  };
  return (
    <div className='align-element my-5 flex justify-between items-center'>
      <button onClick={setNewTheme} className='text-2xl cursor-pointer'>
        {theme === 'light' ? <FaSun/> : <FaMoon />}
      </button>
      <div className='flex items-center gap-3'>
        {colors.map((color) => {
          return (
            <span
                key={color}
                style={{ backgroundColor: color }}
                className='h-7 w-7 rounded-full cursor-pointer'
                onClick={() => changeColor(color)}
            ></span>
          );
        })}
      </div>
    </div>
  )
}

export default ColorContainer