import { Typography } from "../typography/Typography"


export const ArticleCardText = ({ name, info }) => {
  return (
    <>
      <Typography variant="h3">{name}</Typography>
      <Typography variant="p">{info}</Typography>
    </>
  )
}