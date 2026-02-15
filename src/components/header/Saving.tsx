import Spinner from '../../assets/icons/Spinner'
import styles from './styles.module.css'

const Saving = ({ status }: { status: string }) => {
  return (
    <>
      {status && (
        <>
          <div
            id='saving-indicator'
            className={styles.saving_indicator}
          >
            <div className={styles.card_saving}>
              <Spinner color='#9bd1de' />
              <span>{status}...</span>
            </div>
          </div>

          <div className={styles.card_saving}></div>
        </>
      )}
    </>
  )
}
export default Saving
