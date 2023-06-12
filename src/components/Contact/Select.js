
const Select = ({options,label,name}) => {
  return (
    <div>
        <label htmlFor={name}>{label}:&nbsp;&nbsp;</label>
        <select name={name} id={name} required>
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