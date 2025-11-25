
import { HeroHeading } from "./components/hero/HeroHeading"
import { HeroImageMiddle } from "./components/hero/HeroImageMiddle"
import { HeroImageLeft } from "./components/hero/HeroImageLeft"
import { HeroImageRight } from "./components/hero/HeroImageRight"
import { HeroText } from "./components/hero/HeroText"

export const App = () => {
  return (
    <>
      <HeroHeading></HeroHeading>
      <HeroImageLeft src="/images/SideProfile-heroImg-2.jpg" />
      <HeroImageMiddle src="/images/Headshot-heroImg-1.png" />
      <HeroImageRight src="/images/Painting-heroImg-3.jpg" />
      <HeroText></HeroText>
    </>
  )
}
