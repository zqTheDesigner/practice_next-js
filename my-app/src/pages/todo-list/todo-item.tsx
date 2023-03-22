import Checkbox from '@mui/material/Checkbox'

const label = {}

const TodoItem = ({ title = '', description = '' }) => {
  return (
    <>
      <div className='row'>
        <Checkbox {...label} />
        <>
          {title}
          {description}
        </>
      </div>
    </>
  )
}

export default TodoItem
