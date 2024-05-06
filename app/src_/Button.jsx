import clsx from "clsx"

const Button = (props) => {
  const { children, outline, className, ...rest } = props

  const classNames = clsx(
    {
      btn: true,
      "btn-default": !outline,
      "btn-outline": outline,
    },
    className
  )

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  )
}

export default Button
