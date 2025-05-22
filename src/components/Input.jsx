function Input({id, type,label, value, onChange , placeholder,clas, accept,checked}) {

    return (
        <form className={clas} onSubmit={handleSubmit}>
            {type === "checkbox" ? (
                <div style={{ display: "flex", alignItems: "center", gap: "4em"     }}>
                    <label htmlFor={id}>{label}</label>
                    <input
                        type={type}
                        id={id}
                        checked={value}
                        onChange={onChange}
                        style={{ transform: "scale(2)", cursor: "pointer" , marginLeft: "-75px" }}

                    />
                </div>
            ) : (
                <>
                    <label htmlFor={id}>{label}</label>
                    <input
                        type={type}
                        id={id}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        accept={accept}
                    />
                </>
            )}
        </form>
    )
}
export default Input;
function handleSubmit(e) {
    e.preventDefault();
}