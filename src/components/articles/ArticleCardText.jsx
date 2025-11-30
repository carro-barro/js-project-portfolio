
import { H3 } from "../typography/H3"
import { P } from "../typography/P"


export const ArticleCardText = ({ name, info }) => {
  return (
    <>
      <H3>{name}</H3>
      <P>{info}</P>
    </>
  )
}