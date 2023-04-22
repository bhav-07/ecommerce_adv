import styled from "styled-components"
import { mobile } from "../responsive"

const Container=styled.div`
    width: 100vw;
    height: 100vh;
    background-color: teal;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Wrapper=styled.div`
    padding: 20px;
    width: 30%;
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
    background-color: white;
    padding: 20px;
    border-radius: 15px;
    flex-direction: column;
`
const Input=styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
    border: none;
    border-bottom: 1px solid gray;
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
const Link=styled.a`
    margin: 5px 0px;
    font-size: 12px;
    /* text-decoration: underline; */
    color: gray;
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <Button>Log in</Button>
                <Link>Forgot Password?</Link>
                <Link>Create a new account</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login