'use client'
import  styles from '@/styles/Home2.module.css'
import { useState } from "react"
import Input from "./Input"
import { useEffect } from "react"
import Select from './Select'
import Textfield from './Textfield'
import InputFlatButton from '../InputFlatButton'
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import { SnackbarProvider,enqueueSnackbar } from 'notistack'

const ContactForm = ({sel="Provide feedback"}) => {
    const form1 = useRef()
    const options   =   [
        'Book a service',
        'Provide feedback',
        'Others'
    ]
    const formData ={
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
    }
    // useEffect(() => {
    //   console.log(formData);
    // }, [formData])
    const [disabled, setDisabled] = useState(false)


    const onSubmit  =   (e)  =>  {
        e.preventDefault()
        if(!disabled){
            setDisabled(true)
            console.log('Hi there');
            return  (emailjs.sendForm('service_g5s96v7','template_aw13q17',form1.current,'rPGAAss1dor6ee9in')
            .then(x=>{
                console.log(x.text)
                enqueueSnackbar("Message sent ✅!","success")
            })
            .catch(x=>{(
                console.log(x.text))
                enqueueSnackbar("Please try again later 🥲","error")
            })
            .finally(()=>{
                form1.current.reset()
                setDisabled(false)
            })
            )}
        }
  return (
    <form  ref={form1}  className={styles.contactForm}  onSubmit={onSubmit}>
        <SnackbarProvider   autoHideDuration={3000} anchorOrigin={{vertical:'bottom',horizontal:'center'}}/>
        {
            Object.keys(formData).map(  name    =>
                {
                    if(name==='purpose')
                    {
                        return  ( <Select  key={name} options={options} name={name} sel={sel} label={formData[name].label} /> )
                    }
                    if(name==='message')
                    {
                        return  ( <Textfield  key={name} name={name} label={formData[name].label}/> )
                    }   
                    return    (<Input key={name} name={name} label={formData[name].label}/>)

            }
            )
        }
            <InputFlatButton disabled={disabled} text={disabled?"Loading...":'Submit'}/>

    </form>
  )
}

export default ContactForm