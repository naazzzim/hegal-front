import styles from '@/styles/Home2.module.css'
import { useState } from 'react'

const Input = ({name, label,onChange,value}) => {
  return (
    <div>
        <label htmlFor={name}>{label}:&nbsp;&nbsp;</label>
        <input type="text" name={name} id={name} value={value}  onChange={(e)=>onChange(name,label,e)} />
    </div>
    )
}

export default Input