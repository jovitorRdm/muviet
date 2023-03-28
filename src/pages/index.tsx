import style from "../styles/pages/Home.module.css"
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompliteChallenges } from "../components/ComplitedChallenges";
import { Countdown } from "../components/Countdown";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountdownProvider } from "@/contexts/CountdownContext";
import { GetServerSideProps } from "next";


export default function Home() {
  return (
    <div className={style.container}>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompliteChallenges />
            <Countdown></Countdown>
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { } = ctx.req.cookies;


  return {
    props: {

    }
  }
}
