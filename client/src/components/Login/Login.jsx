import React, { useState } from 'react';
import { toast } from "react-toastify";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import style from './Login.module.scss';

const Login = ({enterField}) => {
	const fieldId = "pokemon";
    const [nickname, setNickname] = useState('');
    
    const isInvalidNickname = () => {
        const pattern = /^\S.{0,14}\S$/;
        const invalid = nickname.length > 16 || nickname.length < 2 || !pattern.test(nickname);
        
        return invalid;
    }
    
    const onChangeNickname = (e) => {
        const input = e.currentTarget.value;
        setNickname(input);
    }
    
    const onClick = () => {
        if (isInvalidNickname()) {
            toast.error("닉네임은 앞뒤 공백 없는 2~16글자만 가능합니다.");
            return;
        }
        enterField({nickname, fieldId}); // {닉네임, 필드id}
    }
    
    return (
        <Stack className={style.Login} alignItems="center" spacing={2}>
            <div className={style.Login__title}>둥동댕 유치원 🐤</div>
            <TextField label="NICKNAME" variant="outlined" value={nickname} onChange={onChangeNickname}/>
            <Button onClick={onClick} size="large">Enter!</Button>
        </Stack>
    );
    
}

export default Login;