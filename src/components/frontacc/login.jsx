import React from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink,SubmitButton,MuteLink } from "./common";
import { Marginer } from "../marginer"
import { FrontContext } from "./frocontext";
import { useContext} from "react";

export function LoginForm(props){

    const {switchToSignup} = useContext(FrontContext);
    return <BoxContainer>
        <FormContainer>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>
        </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <MutedLink href="#">Forgot your password?</MutedLink>
            <Marginer direction="vertical" margin="1.5em"/>
            <SubmitButton type="submit">Login</SubmitButton>
            <Marginer direction="vertical" margin="1em"/>
            <MuteLink>Don't have an account? <BoldLink href="#" onClick={switchToSignup}>Signup</BoldLink></MuteLink>
        
        </BoxContainer>
}

