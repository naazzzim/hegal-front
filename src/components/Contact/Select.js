
const Select = ({options,value,onChange,label,name}) => {
  return (
    <div>
        <label htmlFor={name}>{label}:&nbsp;&nbsp;</label>
        <select name={name} id={name} value={value}  onChange={(e)=>onChange(name,label,e)}>
            {options.map(
                x=> (
                    <option key={x} value={x}>{x}</option>
                )
            )}
        </select>
    </div>
  )
}

export default Select