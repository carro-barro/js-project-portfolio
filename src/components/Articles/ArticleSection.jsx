import styled from "styled-components"
import { ArticleHeading } from "./ArticleHeading"
import { ArticleCard } from "./ArticleCard"
import Data from "../../data/articles.json"


export const ArticleSection = () => {
  return (
    <>
      <ArticleHeading />
      {Data.articles.map(article => (
        <ArticleCard
          key={article.name}
          date={[article.date]}
          name={article.name}
          info={article.info}
          link={article.link}
          image={article.image}
        />
      ))}
    </>
  )
}