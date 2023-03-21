import Checkbox from '@mui/material/Checkbox'

const label = {}

const TodoItem = () => {
  return (
    <>
      <div className='row'>
        <Checkbox {...label} />
        Test item
      </div>
    </>
  )
}

export default TodoItem
