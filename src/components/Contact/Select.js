const Select = ({options, label, name, sel}) => {
    return (
        <div>
            <label htmlFor={name}>{label}:&nbsp;&nbsp;</label>
            <select name={name} id={name} required>
                {options.map(
                    x => (
                        <option selected={x === sel ? true : false} key={x} value={x}>{x}</option>
                    )
                )}
            </select>
        </div>
    )
}

export default Select