import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

// import Box from '@material-ui/core/Box';
import {
    Divider,
    TextField,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Avatar,
    Fab,
    Paper,
    Grid
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch } from 'react-redux';
import { postChatDetails } from '../../Store/actions/actions';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    chatSection: {
        width: '100%',
        height: '80vh'
    },
    headBG: {
        backgroundColor: '#e0e0e0'
    },
    borderRight500: {
        borderRight: '1px solid #e0e0e0'
    },
    messageArea: {
        height: '70vh',
        overflowY: 'auto'
    }
});

const Chat = () => {
    const dispatch = useDispatch();
    const [chatDetail, setChatDetail] = useState({
        userName: '',
        chatMessage: '',
        time: ''
    });
    const [name, setName] = useState('Admin')
    const classes = useStyles();
    const onChangeHandler = (event) => {
        setChatDetail({ ...chatDetail, chatMessage: event.target.value, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }) })
    }
    const chatPartcipentNameHandler = (event) => {
        setName(event.target.value)
    }
    const sendMessageHandler = (event) => {
        event.preventDefault();
        dispatch(postChatDetails({
            username: name,
            message: chatDetail.chatMessage,
            time: chatDetail.time
        }))
    }
    return (
        <div>
            <Grid container>
                <Grid item xs={12} >
                    <Typography variant="h5" className="header-message">Chat</Typography>
                </Grid>
            </Grid>
            <Grid container component={Paper} className={classes.chatSection}>
                <Grid item xs={3} className={classes.borderRight500}>
                    <List>
                        <ListItem button key="RemySharp">
                            <ListItemIcon>
                                <Avatar alt="Remy Sharp" />
                            </ListItemIcon>
                            <ListItemText primary={name}></ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                    <Grid item xs={12} style={{ padding: '10px' }}>
                        <TextField id="outlined-basic-email" label="Your Name" onChange={chatPartcipentNameHandler} variant="outlined" fullWidth />
                    </Grid>
                    <Divider />
                </Grid>
                <Grid item xs={9}>
                    <List className={classes.messageArea}>
                        <ListItem key="2">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="left" primary="Hey, Iam Good! What about you ?"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="left" secondary="09:31"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <ListItem key="1">
                            <Grid container>
                                <Grid item xs={12}>
                                    <ListItemText align="right" primary="Hey man, What's up ?"></ListItemText>
                                </Grid>
                                <Grid item xs={12}>
                                    <ListItemText align="right" secondary="09:30"></ListItemText>
                                </Grid>
                            </Grid>
                        </ListItem>
                    </List>
                    {/* <Divider /> */}
                    <Grid container style={{ padding: '20px' }}>
                        <Grid item xs={11}>
                            <TextField id="outlined-basic-email" label="Type Something" fullWidth onChange={onChangeHandler} />
                        </Grid>
                        <Grid xs={1} align="right">
                            <Fab color="primary" aria-label="add" onClick={sendMessageHandler}><SendIcon /></Fab>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Chat;