import styles from '@/styles/Home2.module.css'
import { useState } from 'react'

const Input = ({name, label}) => {
  return (
    <div>
        <label htmlFor={name}>{label}:&nbsp;&nbsp;</label>
        <input type="text" name={name} id={name} required/>
    </div>
    )
}

export default Input