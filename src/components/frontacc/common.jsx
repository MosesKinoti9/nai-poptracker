import styled from "styled-components";


export const BoxContainer = styled.div `
width: 100;
display: flex;
flex-direction: column;
align-items: center;
margin: 0;
margin-top: 10px;
`;

export const FormContainer = styled.form `
width: 100%;
display: flex;
flex-direction: column;
`;

export const MutedLink = styled.a `
font-size: 13px;
color: rgb(200, 200, 200, 10);
font-weight: 500;
text-decoration: none;
margin: 0;
margin-top: 10px;
text-align: center;

&:hover{
    font-size: 15px;
    font-weight: 900;
    color: #00796b;
}

transition: all 200ms ease-in-out;
`;

export const MuteLink = styled.a `
font-size: 13px;
color: rgb(200, 200, 200, 10);
font-weight: 500;
text-decoration: none;
margin: 0;
margin-top: 10px;
text-align: center;
transition: all 200ms ease-in-out;
`;

export const BoldLink = styled.a `
font-size: 12px;
color: rgb(200, 200, 200, 10);
font-weight: 500;
text-decoration: none;

&:hover{

    font-weight: 900;
    color: #00796b;
    transition: all 200ms ease-in-out;
}
`;

export const Input = styled.input `
width: 100%;
height: 43px;
outline: none;
border: none;
padding: 0px 10px;
border-bottom: 1px solid transparent;
transition: all 200ms ease-in-out;

&::placeholder{
    color: rgba(200, 200, 200, 1);
}

&:not(:last-of-type){
    border-botttom: 1px solid rgb(200, 200, 200, 0.8);
}

&:hover{
    font-size: 16px;
}

&:focus{

    font-size: 16px;
    outline:none;
    border-bottom: 2px solid rgb(97,28,94);
}
`;

export const SubmitButton = styled.button `
width: 100%;
padding: 10px 40%;
color: #ffff;
font-size: 15px;
font-weight: 600px;
border: none;
border-radius: 100px 100px 100px 100px;
cursor: pointer;
transition: all, 240ms ease-in-out;
margin: 0;
margin-top: 10px;
background: #00796b;
background: linear-gradient(4deg, #00796b 0%, #00796b 0%);
&:hover{

    padding: 15px;
    filter: brightness(1.03);
}


`;