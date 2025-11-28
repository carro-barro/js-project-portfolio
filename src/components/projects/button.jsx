import styled from "styled-components"

const StyledButton = styled.a`
  display: flex;
  width: 303px;
  height: 48px;
  padding: 0 16px;
  align-items: center;
  gap: 16px;
  border-radius: 12px;
  background: #000;
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  cursor: pointer;
`
const IconWrapper = styled.span`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Button = ({ icon, text, href }) => {
  return (
    <>
      <StyledButton href={href}>
        <IconWrapper>
          <img src={icon} alt="" />
        </IconWrapper>
        <span>{text}</span>
      </StyledButton>
    </>
  )
}