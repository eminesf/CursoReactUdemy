import './styles.css';

export const Button = ({ texto, onClick, disabled }) => {
  return (
    <button
      disabled={disabled}
      className="button"
      onClick={onClick}
    >
      {texto}
    </button>
  )
}