import React from 'react'
import { useState } from 'react'
import { Box, TextField, styled, Button } from '@mui/material'

const Wrapper = styled(Box)`
width: 350px;
height: 500;
border: 2px;
backgroundColor: blue;
box-shadow: 5px 2px 5px 2px  rgb(0 0 0/ 0.6);
padding:10px;
margin: auto;
align: center;
`
const loginInitialValue = {
    username : "",
    password : ""
}
const singupInitailValue = {
    name : "",
    username : "",
    password : ""

}

function NewLogin() {

    const [account , setAccount] = useState("login")
    const [login , setLogin] = useState(loginInitialValue)
    const [singup , setSignup] = useState(singupInitailValue)
    const handleLoginClick = () => {
        if( login !== loginInitialValue) setLogin("loginInitialValue")
    }
    const handleSingupClick = () => {

    }
    const accountValue = () => {
     if(account === 'login') setAccount('singup')
     else setAccount('login')
    } 
    const onInputChange = (e) => {
        setLogin({...login , [e.target.name] : e.target.value})
    }

  return (
    <div>NewLogin
         {account === "login" ?
        <Wrapper>
          <h3>Blog Application</h3>
         <TextField label="Username" variant='standard'></TextField>
         <TextField label="Password" variant='standard'></TextField>
         <br/>
          <Button variant='contained' onClick={handleLoginClick}>Login</Button>
          <br/>
          <Button onClick={()=>accountValue()}>Create new Account</Button>
        </Wrapper>
        :
        <Wrapper>
        <h3>Blog Application</h3>
         <TextField label="Name" variant='standard' onChange={(e)=>{onInputChange()}}></TextField>
         <TextField label = "Username" variant='standard'></TextField>
         <TextField label ="Password" variant = "standard"></TextField>
         <br/>
         <Button variant='contained' onClick={handleSingupClick}>Singup</Button>
         <br/>
         <Button onClick={()=>accountValue()}> Already have an account</Button>
        </Wrapper>
}
    </div>
  )
}

export default NewLogin