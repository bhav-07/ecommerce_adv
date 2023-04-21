import { SendOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container=styled.div`
    height: 60vh;
`
const Title=styled.h1``
const Desc=styled.div``
const InputContainer=styled.div``
const Input=styled.input``
const Button=styled.button``

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updated for your favorite products.</Desc>
        <InputContainer>
            <Input placeholder="Your Email"/>
            <Button>
                <SendOutlined></SendOutlined>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter