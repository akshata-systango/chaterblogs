import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ADMIN_LOGIN_EMAIL, ADMIN_ROLE, ADMIN_USERNAME } from '../../constants/constants';
import { postLoginDetails } from '../../Store/actions/actions';

import { Box, Button, Card, TextField, useMediaQuery, DialogTitle, DialogContentText, DialogContent, DialogActions, Dialog } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';


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
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    let [loginDetails, setLoginDetail] = useState();
    const [open, setOpen] = React.useState(false);

    const onChangeHandler = (event) => {
        setLoginDetail({ ...loginDetails, [event.target.name]: event.target.value })
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const loginSubmitHandler = (event) => {
        debugger;
        event.preventDefault();
        console.log(loginDetails, 'loginDetails');
        if (loginDetails?.username === ADMIN_USERNAME && loginDetails?.email === ADMIN_LOGIN_EMAIL && loginDetails?.role === ADMIN_ROLE) {
            nevigate('/blog_area', {
                state: loginDetails
            })
            if (loginDetails !== '') {
                dispatch(postLoginDetails(loginDetails))
            }
        }
        else {
            handleClickOpen();
            setLoginDetail({
                username: '',
                email: '',
                role: ''
            });
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
            <Button variant="text" style={{ color: '#ed6c02' }} href="/popular_blogs">Polpular Blogs</Button>
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
                        <TextField
                            id="standard-basic"
                            type='text'
                            label="Username"
                            name="username"
                            variant="standard"
                            onChange={onChangeHandler}
                            value={loginDetails?.username}
                        />
                        <TextField
                            id="standard-basic"
                            type='email'
                            label="Email"
                            name='email'
                            variant="standard"
                            onChange={onChangeHandler}
                            value={loginDetails?.email}
                        />
                        <TextField
                            id="standard-basic"
                            label="Role"
                            name='role'
                            variant="standard"
                            onChange={onChangeHandler}
                            value={loginDetails?.role}
                        />
                        <Button
                            variant="contained"
                            style={{ background: '#ed6c02', marginTop: '20px', marginBottom: '20px' }}
                            onClick={(e) => loginSubmitHandler(e)}
                        >
                            Go
                        </Button>
                        <Dialog
                            fullScreen={fullScreen}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="responsive-dialog-title"
                        >
                            <DialogTitle id="responsive-dialog-title">
                                {"Wrong Credentials??"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Something went wrong !! Please try again later.
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} autoFocus>
                                    Okay
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Card>

                </div>

            </Box>
        </div >
    );
};

export default Blogs;