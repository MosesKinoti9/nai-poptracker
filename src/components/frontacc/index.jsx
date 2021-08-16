import React from "react";
import styled from "styled-components";
import { LoginForm}  from "./login";
import { SignUpForm } from "./register";
import { motion } from "framer-motion";
import { FrontContext } from "./frocontext";
import { useState } from "react";

const BoxContainer = styled.div `
 width: 280px;
 min-height: 550px;
 top: 50px;
 display: flex;
 flex-direction: column;
 border-radius: 19px;
 background-color: #ffff;
 box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
 position: relative;
 overflow: hidden;

`;

const TopContainer = styled.div `
width: 100%;
height: 250px;
display: flex;
flex-direction: column;
justify-content: flex-end;
padding: 0 1.8em;
padding-bottom: 5em;

`;

const BackDrop = styled(motion.div) `
width: 160%;
height: 550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
transform: rotate(60deg);
top: -290px;
left: -70px;
background: rgb(97,28,94);
background: linear-gradient(4deg, rgba(97,28,94,1) 0%, rgba(97,28,94,1) 0%);

`;

const HeaderContainer = styled.div `
width: 100%;
display: flex;
flex-direction: column;

`;

const HeaderText = styled.h2 `
 font-size: 30px;
 font-weight: 500;
 line-height: 1.24;
 color: #fff;
 z-index: 10;
 margin: 0;
 
`;

const SmallText = styled.h5 `
color: #ffff;
font-weight: 500;
font-size: 15px;
z-index: 10;
margin: 0;
margin-top: 7px;
`;

const InnerContainer = styled.div `
width: 100%;
display: flex;
flex-direction: column;
padding: 0 1.8em;
`;

const backdropVariants = {
    expanded: {
        width: "233%",
        height: "1050px",
        borderRadius: "20%",
        transform: "rotate(60deg)"
    },
    collapsed: {
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform: "rotate(60deg)"
    },
};

const expandingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
};

function FrontAcc(props){
    const [isExpanded, setExpanded] = useState(false);
    const [active,setActive] = useState("signin");

    const playExpandingAnimation = () => {
        setExpanded(true);
        setTimeout(() => {
            setExpanded(false);
        }, expandingTransition.duration * 1000 - 1500);
    };

    const switchToSignup = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signup");
        }, 400);
        
    };

    const switchToSignin = () => {
        playExpandingAnimation();
        setTimeout(() => {
            setActive("signin");
        }, 400);
        
    };


    const contextValue = { switchToSignup, switchToSignin};

    return ( 
        <FrontContext.Provider value={contextValue}>
    <BoxContainer>
        <TopContainer>
            <BackDrop initial={false} animate={isExpanded ? "expanded" : "collapsed"} variants={backdropVariants} transition={expandingTransition}/>
            {active === "signin" && (<HeaderContainer> 
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Sign in to continue</SmallText>
            </HeaderContainer>)}
            {active === "signup" && (<HeaderContainer> 
                <HeaderText>Create</HeaderText>
                <HeaderText>New Account</HeaderText>
                <SmallText>Sign up to continue</SmallText>
            </HeaderContainer>)}
        </TopContainer>
        <InnerContainer>
           {active === "signin" && <LoginForm/>}
        </InnerContainer>
        <InnerContainer>
           {active === "signup" && <SignUpForm/>}
        </InnerContainer>

    </BoxContainer> 
    </FrontContext.Provider>);
}

export default FrontAcc;