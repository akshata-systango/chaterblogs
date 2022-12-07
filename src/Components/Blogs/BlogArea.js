import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Avatar, Badge, Box, Button, TextareaAutosize } from '@mui/material';
import { useLocation } from 'react-router-dom';
import './blogs.css';
import { useDispatch } from 'react-redux';
import { getBlogDetails, postblogsDetails } from '../../Store/actions/actions';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const BlogArea = () => {
    const dispatch = useDispatch();
    let [bloginDetails, setbloginDetail] = useState({
        blogMessage: '',
        userName: ''
    });
    const location = useLocation();
    let userName = location ? location?.state?.username : 'No User'
    // const loginDetails = useDispatch(getLoginDetails());
    // const blogDetails = dispatch(getBlogDetails());
    // console.log(blogDetails, 'blogDetails');
    const onchangeHandler = (event) => {
        setbloginDetail({ blogMessage: event.target.value, userName: userName })
    }
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(postblogsDetails(bloginDetails))
    }
    return (
        <>
            <Box component="span" sx={
                {
                    display: 'block',
                    color: 'warning.main',
                    boxShadow: 3,
                    p: 2,
                    borderColor: 'error.main'
                }}>
                Feel free to write...
            </Box>
            <div className='blog_area_wrapper'>
                <Box sx={{
                    width: 500,
                    height: 500,
                    marginTop: '70px',
                    marginLeft: '100px',
                    backgroundColor: 'primary.dark',
                }}>
                    <div className='user-name-bedge'>
                        <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            variant="dot"
                            style={{ marginTop: '40px' }}
                        >
                            <Avatar alt="Atat Sharp" src="/static/images/avatar/1.jpg" />
                        </StyledBadge>
                        <div className='username-area'>{userName?.toUpperCase()}</div>
                    </div>
                    <div>
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={20}
                            placeholder="Write your thoughts"
                            style={{ width: 450, marginTop: '30px' }}
                            onChange={onchangeHandler}
                        />
                    </div>
                    <Button variant="text" style={{ color: 'white ' }} onClick={submitHandler}>submit</Button>
                </Box>
                <Box sx={{
                    width: 500,
                    height: 500,
                    marginTop: '70px',
                    marginLeft: '100px',
                    backgroundColor: 'primary.dark',
                }}>

                </Box>
            </div>
        </>
    );
};

export default BlogArea;