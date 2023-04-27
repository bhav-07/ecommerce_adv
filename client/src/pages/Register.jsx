import styled from "styled-components"
import { mobile } from "../responsive"

const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper=styled.div`
    padding: 20px;
    width: 40%;
    background-color:teal;
    ${mobile({width:"80%"})}
`

const Title=styled.h1`
    font-size: 24px;
    font-weight: 300;  
    color:white;

`
const Form=styled.form`
    display: flex;
    flex-wrap: wrap;
    background-color: white;
    padding: 20px;
    border-radius: 15px;
`
const Input=styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid gray;
`
const Agreement=styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button=styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    border-radius: 15px;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Create an account!</Title>
            <Form>
                <Input placeholder="FirstName" />
                <Input placeholder="Lastname" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirm password"/>
                <Agreement> By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}
  
export default Register