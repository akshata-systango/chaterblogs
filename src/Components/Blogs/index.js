import { Box, Button, Card, TextField } from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postLoginDetails } from '../../Store/actions/actions';
import pencil_animate_image from '../../assets/gifs/pencil_gifs.gif';
import './blogs.css';

const MyComponent = styled('div')({
    color: '#ed6c02',
    backgroundColor: 'aliceblue',
    padding: 12,
    width: '480px',
    borderRadius: 4,
});

const Blogs = () => {
    const dispatch = useDispatch();
    const nevigate = useNavigate();

    let [loginDetails, setLoginDetail] = useState();
    const onChangeHandler = (event) => {
        setLoginDetail({ ...loginDetails, [event.target.name]: event.target.value })
    }
    const loginSubmitHandler = (event) => {
        event.preventDefault();
        nevigate('/blog_area', {
            state: loginDetails
        })
        if (loginDetails !== '') {
            dispatch(postLoginDetails(loginDetails))
        }
    }

    return (
        <div>
            <Box component="span" sx={
                {
                    display: 'block',
                    color: 'warning.main',
                    boxShadow: 3,
                    p: 2,
                    borderColor: 'error.main'
                }}>
                Want to write something ? why don't you try blogs...
            </Box>
            <Box
                sx={{
                    width: 1500,
                    height: 800,
                    backgroundColor: '#ed6c02',
                    borderColor: 'error.main',
                    align: 'right',
                    display: 'flex',
                    flexDirection: 'row',
                    p: 1,
                    m: 1,
                }}
            >
                <div className='blogs_left_image'>
                    <img src={pencil_animate_image} />
                </div>
                <div className='login_card_container'>
                    <Card variant="outlined" className='login_form_container'>
                        <MyComponent>LOGIN</MyComponent>
                        <TextField id="standard-basic" type='text' label="Username" name="username" variant="standard" onChange={onChangeHandler} />
                        <TextField id="standard-basic" type='email' label="Email" name='email' variant="standard" onChange={onChangeHandler} />
                        <TextField id="standard-basic" label="Role" name='role' variant="standard" onChange={onChangeHandler} />
                        <Button variant="contained" style={{ background: '#ed6c02', marginTop: '20px', marginBottom: '20px' }} onClick={(e) => loginSubmitHandler(e)}>Go</Button>
                    </Card>

                </div>

            </Box>
        </div >
    );
};

export default Blogs;