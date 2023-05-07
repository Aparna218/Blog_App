
import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import {Box, styled,Button, Typography, TextField } from '@mui/material'
import { API } from '../../service/api';


const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: Purple;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;
const BlogText = styled(Typography)`
    color: Purple;
    font-size: 34px;
`;

// const Error = styled(Typography)`
//     font-size: 10px;
//     color: #ff6161;
//     line-height: 0;
//     margin-top: 10px;
//     font-weight: 600;
// `

// const loginInitialValues = {
//     username: '',
//     password: ''
// };

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};


function Login() {
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] =useState(signupInitialValues);

    const OnInputChange = (e) => {
        setSignup({...signup, [e.target.name]:e.target.value})
    }
    
    
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //    axios.post('http://localhost:5000/signup',{signup})
    //     .then(response=>console.log(response.data))
    //     .catch(error=>console.log(error))
    //     setSignup(signupInitialValues)
    // }
    
    const toggleSignup = () => {
        account === 'login' ? toggleAccount('signup') : toggleAccount('login');
    }
  return (
    <Component>
        <BlogText style={{ textAlign: 'center' }}>Blog</BlogText>
        { account === 'login'?(
        <Wrapper>
            <TextField variant='standard' label='Enter Username'>username</TextField>
            <TextField variant='standard' label='Enter Password'>password</TextField>
            <LoginButton variant='contained'>Login</LoginButton>
            <Text style={{ textAlign: 'center' }}>OR</Text>
            <SignupButton onClick={()=>toggleSignup()}>Don't have account? Create new account</SignupButton>
        </Wrapper>):(
        <Wrapper>
            <TextField variant='standard' onChange={(e)=>OnInputChange(e)} label='Enter Name'>name</TextField>
            <TextField variant='standard' onChange={(e)=>OnInputChange(e)} label='Enter Username'>username</TextField>
            <TextField variant='standard' onChange={(e)=>OnInputChange(e)} label='Enter Password'>password</TextField>
            <LoginButton variant='contained' onClick={(e)=>handleSubmit(e)}>Singup</LoginButton>
            <Text style={{ textAlign: 'center' }}>OR</Text>
            <SignupButton onClick={()=>toggleSignup()}>Already have an account</SignupButton>
        </Wrapper>
        )
        }
     </Component>
     )
}

export default Login