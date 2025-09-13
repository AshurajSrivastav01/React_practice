import styles from './Buttons.module.css'

const Buttons = () => {

  const ButtonNames = [
    'C', '1', '2',
    '+', '3', '4',
    '-', '5', '6',
    '*', '7', '8',
    '/', '=', '9',
    '0', '.'
  ];

    return (
        <div id="button-container" className={`${styles['button-container']}`}>
          {ButtonNames.map( (ButtonName) => {
            return <button className={`${styles.button}`}>{ButtonName}</button>
          })}
        </div>
    )
}

export default Buttons;