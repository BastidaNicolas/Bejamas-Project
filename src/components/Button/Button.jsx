const Button = ({
  text,
  action,
  colorStyle,
}) => {
  return (
    <button className={`${colorStyle} w-44 h-12 flex items-center justify-center text-2xl font-medium uppercase`} onClick={action}>
      {text}
    </button>
  )
}

export default Button