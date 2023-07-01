const Textfield = ({name, label}) => {
    return (
        <div>
            <label htmlFor={name}>{label}:&nbsp;&nbsp;</label>
            <textarea name={name} id={name} cols="22" rows="10" required></textarea>
        </div>
    )
}

export default Textfield