import { useNavigate } from "react-router-dom"
import { BiPlus } from "react-icons/bi"

// eslint-disable-next-line react/prop-types
const ButtonAdd = ({path}) => {
    const navigate = useNavigate()
  return (
    <button onClick={() => navigate(path)} className='w-16 animate-bounce h-16 border border-border z-40 bg-subMain text-white rounded-full center fixed bottom-8 right-12 button-fb'>
        <BiPlus className='text-2xl' />
    </button>
  )
}

export default ButtonAdd