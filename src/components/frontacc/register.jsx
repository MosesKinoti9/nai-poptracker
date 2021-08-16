import React from "react";
import { BoldLink, BoxContainer, FormContainer, Input, SubmitButton,MuteLink } from "./common";
import { Marginer } from "../marginer";
import { FrontContext } from "./frocontext";
import { useContext} from "react";


export function SignUpForm(props){

    const {switchToSignin} = useContext(FrontContext);
    return <BoxContainer>
        <FormContainer>
            <Input type="text" placeholder="Username"/>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Confirm Password"/>
        </FormContainer>
            <Marginer direction="vertical" margin={10}/>
            <SubmitButton type="submit">Register</SubmitButton>
            <Marginer direction="vertical" margin="1em"/>
            <MuteLink>Already have an account? <BoldLink href="#" onClick={switchToSignin}>Signin</BoldLink></MuteLink>
        </BoxContainer>
};

