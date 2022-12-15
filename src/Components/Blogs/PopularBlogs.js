import { Button } from '@mui/material';
import React, { useState } from 'react';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import './blogs.css';
import { useDispatch } from 'react-redux';
import { postChatDetails } from '../../Store/actions/actions';
const PopularBlogs = () => {
    const dispatch = useDispatch();
    let [openChat, setOpenChat] = useState(false);
    let [message, setMessage] = useState('');
    const chatMessageHandler = (e) => {
        setMessage(e.target.value)
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(postChatDetails({
            message: message,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" })
        }))
    }
    return (
        <div>
            <div className='para-wrapper'>
                <p className='para-text'>
                    Education can be thought of as the transmission of the values and accumulated
                    knowledge of a society.
                    In this sense, it is equivalent to what social scientists term socialization
                    or enculturation.
                    Children—whether conceived among New Guinea tribespeople, the Renaissance
                    Florentines, or the middle classes of Manhattan—are born without culture.
                    Education is designed to guide them in learning a culture, molding their
                    behaviour in the ways of adulthood, and directing them toward their eventual
                    role in society.
                    In the most primitive cultures, there is often little formal learning—little of
                    what one would ordinarily call school or classes or teachers.
                    Instead, the entire environment and all activities are frequently viewed as school
                    and classes, and many or all adults act as teachers.
                    As societies grow more complex, however, the quantity of knowledge to be passed
                    on from one generation to the next becomes more than any one person can know, and,
                    hence, there must evolve more selective and efficient means of cultural transmission.
                    The outcome is formal education—the school and the specialist called the teacher.
                </p>
                <br />
                <p className='para-text'>
                    The primary requirement of a test is validity—traditionally defined as the degree
                    to which a test actually measures whatever it purports to measure.
                    A test is reliable to the extent that it measures consistently, but reliability is
                    of no consequence if a test lacks validity.
                    Since the person who draws inferences from a test must determine how well it serves
                    his purposes, the estimation of validity inescapably requires judgment.
                    Depending on the criteria of judgment employed, tests exhibit a number of different
                    kinds of validity.

                    Empirical validity (also called statistical or predictive validity) describes how
                    closely scores on a test correspond (correlate) with behaviour as measured in other
                    contexts.
                    Students’ scores on a test of academic aptitude, for example, may be compared with
                    their school grades (a commonly used criterion).
                    To the degree that the two measures statistically correspond, the test empirically
                    predicts the criterion of performance in school.
                    Predictive validity has its most important application in aptitude testing
                    (e.g., in screening applicants for work, in academic placement, in assigning military
                    personnel to different duties).</p>
                <br />

                <p className='para-text'>
                    A test exhibits construct validity when low scorers and high scorers are found to
                    respond differently to everyday experiences or to experimental procedures.
                    A test presumed to measure anxiety, for example, would give evidence of construct
                    validity if those with high scores (“high anxiety”) can be shown to learn less
                    efficiently than do those with lower scores.
                    The rationale is that there are several propositions associated with the concept of
                    anxiety: anxious people are likely to learn less efficiently, especially if uncertain
                    about their capacity to learn; they are likely to overlook things they should attend
                    to in carrying out a task; they are apt to be under strain and hence feel fatigued.
                    (But anxious people may be young or old, intelligent or unintelligent.)
                    If people with high scores on a test of anxiety show such proposed signs of anxiety,
                    that is, if a test of anxiety has the expected relationships with other measurements
                    as given in these propositions, the test is viewed as having construct validity.</p>
            </div>
            <Button
                style={{
                    padding: '16px 20px',
                    border: 'none',
                    cursor: 'pointer',
                    opacity: '0.8',
                    position: 'fixed',
                    bottom: '23px',
                    right: '28px',
                    width: '280px',
                }}
                onClick={() => setOpenChat(!openChat)}
            >
                <ChatBubbleRoundedIcon style={{ height: '50px', width: '50px' }} />

            </Button>
            {openChat && <form className="form-container" style={{
                padding: '16px 20px',
                border: 'none',
                cursor: 'pointer',
                opacity: '0.8',
                position: 'fixed',
                bottom: '23px',
                right: '28px',
                width: '280px',
            }}>
                <h1>Chat</h1>

                <label for="msg"><b>Message</b></label>
                <textarea placeholder="Type message.." name="msg" required onChange={chatMessageHandler}></textarea>

                <button type="submit" className="btn" onClick={onSubmitHandler}>Send</button>
                <button type="button" className="btn cancel" onClick={() => setOpenChat(false)}>Close</button>
            </form>}
        </div >
    );
};

export default PopularBlogs;