import { useNavigate } from "react-router-dom";

import LoginComp from '../components/Login';

const Login = () => {
    const navigate = useNavigate();
    const enterField = ({nickname, fieldId}) => {
        navigate(`/${fieldId}/${nickname}`)
    }
    
    return <LoginComp enterField={enterField} />
}

export default Login;
