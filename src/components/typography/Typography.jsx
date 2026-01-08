import styled, { css } from "styled-components"

const typographyVariants = {
  h1: css` 
    font-weight: 700;
    text-align: center;
    font-size: 52px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      margin: 16px 0;
      font-size: 100px;
    }
  `,
  h2: css`
    text-align: center;
    font-size: 80px;
    font-weight: 700;
    font-size: 48px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 80px;
    }
  `,
  h3: css`
    font-weight: 500;
    font-size: 24px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 30px;
    }
  `,
  p: css`
    font-weight: 400;
    font-size: 16px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
      font-size: 18px;
    }
  `
}

const StyledTypography = styled.p`
  margin: 0;
  font-style: normal;
  line-height: normal;

  ${({ variant }) => typographyVariants[variant] || typographyVariants.p}
`

export const Typography = ({ variant, children, }) => {
  return (
    <StyledTypography as={variant} variant={variant}>{children}</StyledTypography>
  )
}