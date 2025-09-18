import GenerateCard from "../Componenets/Cards";
import SplitText from "../Componenets/SplitText";

import placeHolder1 from "../assets/placeholder-1.jpg";
import placeHolder2 from "../assets/placeholder-2.jpg";
import placeHolder3 from "../assets/placeholder-3.jpg";

import "../Styles/Pages/Home.css";

function Home() {
  return (
    <div className="App">
      <h1 className="Title justify-content-center">
        <SplitText
          text="EduQuest"
          className="text-2xl font-semibold text-center justify-content-center"
          delay={125}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </h1>

      <div
        id="motto-fill"
        className="d-flex align-items-center justify-content-center"
      >
        <p className="mb-0">
          &#8220; Education with a quest to&nbsp;
          <span className="span-underline">complete</span>
          &nbsp;&#8221;
        </p>
      </div>

      <svg
        className="wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <defs>
          <linearGradient id="my-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#755697ff" />
            <stop offset="100%" stop-color="#617aa5ff" />
          </linearGradient>
        </defs>

        <path
          fill="url(#my-gradient)"
          fill-opacity="1"
          d="M0,32L26.7,37.3C53.3,43,107,53,160,90.7C213.3,128,267,192,320,197.3C373.3,203,427,149,480,122.7C533.3,96,587,96,640,96C693.3,96,747,96,800,117.3C853.3,139,907,181,960,202.7C1013.3,224,1067,224,1120,208C1173.3,192,1227,160,1280,154.7C1333.3,149,1387,171,1413,181.3L1440,192L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>

      <div className="d-flex flex-row mb-3 justify-content-center">
        <GenerateCard
          image={placeHolder1}
          title="Why choose us?"
          text="At EduQuest, we make learning engaging and effective by blending education with gamification."
        />

        <GenerateCard
          image={placeHolder2}
          title="Who can use EduQuest?"
          text="Our platform is beginner-friendly and designed for students, educators, and lifelong learners who want to make learning fun and engaging."
        />

        <GenerateCard
          image={placeHolder3}
          title="How does gamification help learning?"
          text="Gamification boosts motivation by rewarding progress, breaking down learning into quests, and turning complex topics into manageable, fun challenges."
        />
      </div>
    </div>
  );
}

export default Home;
