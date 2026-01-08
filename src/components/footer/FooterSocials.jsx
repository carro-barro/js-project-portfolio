import styled from "styled-components"

const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 24px;
  text-decoration: none;
`

export const FooterSocials = (props) => {
  return (
    <SocialIconLink href={props.href}>
      <img src={props.src} alt={props.alt} />
    </SocialIconLink>
  )
}