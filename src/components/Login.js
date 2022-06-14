import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { selectUserName, setSignOutState, setUserLoginDetails } from "../features/user/userSlice"

const Login = (props) => {

  const dispatch = useDispatch()
  const history = useHistory()
  const userName = useSelector(selectUserName)


  const handleAuth = () => {
    if(!userName) {
    auth.signInWithPopup(provider).then((result) => {
      setUser(result.user);
    }).catch((error) => {
      alert(error.message)
    });
  } else if (userName) {
    auth.signOut().then(() => {
      dispatch(setSignOutState())
      history.push("/")
    }).catch((err) => alert(err.message))
  }
}
const setUser = (user) => {
  dispatch(
    setUserLoginDetails({
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
    })
    );
};

  return (
    <Container>
      <Content>
          <CTA>
              <CTALogoOne src="/images/cta-logo-one.svg" alt=""/>
              <SignUp onClick = {handleAuth}>GET FREE  ACCESS NOW</SignUp>
              <Description>Get Premier Access to Raya and the Last Dragon for and additional fee with a Disney+ subscription.As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
              </Description>
              <CTALogoTwo src=".images/cta-logo-two.png" alt=""/>
          </CTA>
      <BgImage/>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction:column;
  text-align:center;
  height:100vh;
`;
const Content = styled.div`
margin-bottom:10cw;
width:100%;
position:relative;
min-height:100vh;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
padding:80px 40px;
height:100%;
`;

const BgImage =styled.div`
background-image: url("/images/login-background.jpg");
height:100%;
background-size:cover;
background-repeat:no-repeat;
position:absolute;
top:0;
left:0;
right:0;
z-index:-1;
`;

const CTA = styled.div`
margin-bottom:2vw;
max-width:650px;
flex-wrap:wrap;
display:flex;
flex-direction:column;
justify-content:center;
margin-top:0;
align-items:center;
text-align:center;
margin-right:auto;
margin-left:auto;
transition-timing-function:ease-out;
transition:opacity 0.2s;
width:100%;
`;

const CTALogoOne = styled.img`
margin-bottom:12px;
max-width:600px;
min-height:1px;
display:block;
width:100%

`;
const SignUp = styled.a`
font-weight:bold;
color:#f9f9f9;
background-color: #0063e5;
margin-bottom:12px;
width:100%;
letter-spacing:1.5px;
font-size:18px;
padding:16.5px 0;
border:1px solid transparent;
border-radius:4px;

&:hover{
  background-color:#0483ee;

}
`;

const Description = styled.h2`
color:hsla(0,0% ,95.31%, 1);
font-size:11px;
margin: 0 0 24px;
line-height:1.5;
letter-spacing:1.5px;



`;

const CTALogoTwo = styled.img`
max-width:600px;
margin-bottom:20px;
display:inline-block;
vertical-align:bottom;
width:100%;
`;




export default Login;
