import { useContext } from 'react'
import Spinner from '../icons/Spinner'
import { NotesContext } from '../context/NotesContext'

const Saving = () => {
  const { status } = useContext(NotesContext)
  return (
    <>
      {status && (
        <>
          <div
            id='saving-indicator'
            className='status-hidden1'
          >
            <div className='card-saving'>
              <Spinner color='#9bd1de' />
              <span>{status}...</span>
            </div>
          </div>

          <div className='card-saving'></div>
        </>
      )}
    </>
  )
}
export default Saving
