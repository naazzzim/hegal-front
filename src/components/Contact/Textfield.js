

const Textfield = ({name, label,onChange,value}) => {
  return (
    <div>
        <label htmlFor={name}>{label}:&nbsp;&nbsp;</label>
        <textarea name={name} id={name} cols="30" rows="8"  value={value} onChange={(e)=>onChange(name,label,e)}></textarea>
    </div>
  )
}

export default Textfield