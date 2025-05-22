function Title({text, heading="h1",color="Black"}){
    const Tag = heading || "h1"; // fallback to h1 if heading is undefined
    return (
        <div id="title-function-return" style={{ textAlign: "center" }}>
            <Tag style={color ? { color } : {}}>
                {text}
            </Tag>
        </div>
    );
}
export default Title;