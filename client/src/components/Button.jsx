import React from 'react'
import clsx from "clsx"

const Button = ({
   icon, className, label, type, onClick = () => {}
}) => {
  return (
    <button
    type={type || "button"}
    className={clsx("bx-3 py-2 outline-none", className)}
    >
        <span>
            {label}
        </span>
        {icon && icon}
    </button>
  )
}

export default Button
