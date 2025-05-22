import Button from '../components/Button';
import Input from '../components/Input';
import {useState} from "react";


function Login() {
    const [text, setText] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    function handleconfirmpassword() {
        setConfirmPassword(e.target.value);
    }
    const[islogin, setIslogin] = useState(false);
    function loginStateHandle(){
        if(islogin===true){
            setIslogin(false);
        }
        else{
            setIslogin(true);
        }
    }

    function textChangeHandle(e){
        setText(e.target.value);
        console.log(text);
    }
    function passChangeHandle(e){
        setPassword(e.target.value);
    }
    function emailChangeHandle(e){
        setEmail(e.target.value);
    }
    function handleClick(text) {
        console.log(text);
        alert(text);
    }
    return (
        <div id="form-container">
            {islogin && (
                <div className="input-group">
                    <Input
                        type="text"
                        placeholder="Username"
                        label="Username:"

                        onChange={textChangeHandle}
                    />
                </div>
            )}
            <Input type="email" placeholder="Email" label="Email : " onChange={emailChangeHandle} />
            <Input type="password" placeholder="Password" label="Password : " onChange={passChangeHandle} />
            {islogin && ( <Input type="password" placeholder="Confirm Password" label=" Confirm Password : " onChange={handleconfirmpassword} />)}
<div id="login-btns">
        <Button text={!islogin ? "Login" : "Sign Up"} className="btn-primary"  id="btn-primary" onClick={() => handleClick(text)}/>
            <Button text={!islogin ? "SignUP" : "Login"} className="btn-primary" id="btn-secondary" onClick={() => loginStateHandle()}/>
        </div></div>
    )
}
export default Login;


