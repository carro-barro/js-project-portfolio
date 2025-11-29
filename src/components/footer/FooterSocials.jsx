import styled from "styled-components"

const SocialIconLink = styled.a`
display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #fff;
  font-size: 24px;
  text-decoration: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const FooterSocials = (props) => {
  return (
    <>
      <SocialIconLink href={props.href}>
        <img src={props.src} alt={props.alt} />
      </SocialIconLink>
    </>
  )
}