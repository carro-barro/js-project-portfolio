import styled from "styled-components"
import { FooterHeading } from "./FooterHeading"
import { FooterAvatar } from "./FooterAvatar"
import { FooterContactInfo } from "./FooterContactInfo"
import { FooterSocials } from "./FooterSocials"

const StyledFooter = styled.footer`
display: flex;
  flex-direction: column;
  align-items: center;
  padding: 128px 20px;
  background-color: #000;
  color: #fff;
  text-align: center;
  gap: 32px;
`
const StyledSocialsContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-end;
gap: 32px;
`

export const FooterSection = (props) => {
  return (
    <StyledFooter>
      <FooterHeading></FooterHeading>
      <FooterAvatar src="/images/hero/Headshot-heroImg-1.png" alt="professional headshot of carolina"></FooterAvatar>
      <FooterContactInfo></FooterContactInfo>
      <StyledSocialsContainer>
        <FooterSocials href="https://www.linkedin.com/in/carolina-oldertz-a875601b8/" src="/icons/Btn - linkedin.svg" alt="Linkedin icon"></FooterSocials>
        <FooterSocials href="https://github.com/carro-barro" src="/icons/Btn - github.svg" alt="Github icon"></FooterSocials>
        <FooterSocials href="https://stackoverflowteams.com/c/technigo/users/706/?tab=profile" src="/icons/Btn - stackoverflow.svg" alt="Stackoverflow icon"></FooterSocials>
        <FooterSocials href="https://stackoverflowteams.com/c/technigo/users/706/?tab=profile" src="/icons/Btn - twitter.svg" alt="Twitter icon"></FooterSocials>
        <FooterSocials href="https://stackoverflowteams.com/c/technigo/users/706/?tab=profile" src="/icons/Btn - instagram.svg" alt="Instagram icon"></FooterSocials>
      </StyledSocialsContainer>
    </StyledFooter>
  )
}