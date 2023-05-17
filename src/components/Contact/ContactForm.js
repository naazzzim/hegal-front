'use client'
import  styles from '@/styles/Home2.module.css'
import { useState } from "react"
import Input from "./Input"
import { useEffect } from "react"
import Select from './Select'
import Textfield from './Textfield'
import FlatButton from '../FlatButton'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name:{
            value:'',
            label:'Name'
        },
        email:{
            value:'',
            label:'Email'
        },
        phone:{
            value:'',
            label:'Contact No.',
        },
        purpose:{
            value:'Book a service',
            label:'Purpose'
        },
        subject:{
            value:'',
            label:'Subject'
        },
        message:{
            value:'',
            label:'Message'
        }
    })
    const options   =   [
        'Book a service',
        'Provide feedback',
        'Others'
    ]

    // useEffect(() => {
    //   console.log(formData);
    // }, [formData])
    

    const onChange  =   (name,label,value)  =>  {
        setFormData(x   =>  ({...x,[name]:{
            label,
            value:value.target.value
        }}))
    }
  return (
    <div    className={styles.contactForm}>
        {
            Object.keys(formData).map(  name    =>
                {
                    if(name==='purpose')
                    {
                        return  ( <Select  key={name} options={options} name={name}  label={formData[name].label} onChange={onChange} value={formData[name].value}  /> )
                    }
                    if(name==='message')
                    {
                        return  ( <Textfield  key={name} name={name} label={formData[name].label} onChange={onChange} value={formData[name].value}  /> )
                    }   
                    return    (<Input key={name} name={name} label={formData[name].label} onChange={onChange} value={formData[name].value} />)

            }
            )
        }
        <FlatButton text={'Submit'}/>
    </div>
  )
}

export default ContactForm