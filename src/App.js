import './App.css';
import React, { useState, useEffect, useRef }from 'react';
import logo from './ECmark.png'
function Header() {
  return (
    <header id="main-header">
      <div className="header--container max-width-1200">
        <i><a href="https://mainpageAeress~.com"><img src={logo} alt="ECmark" className="ECmark" /></a></i>
        <nav>
          <ul>
            <li><a className="menu" href="http://www.HomepageAdress~.com">Home</a></li>
            <li><a className="menu" href="http://www.IntroducingAdress~.com">About Us</a></li>
            <li><a className="menu" href="http://www.MemberAdress~.com">Members</a></li>
            <li><a className="menu" href="http://www.ProjectAdress~.com">Project</a></li>
            <li><a className="menu" href="http://www.RecruitingPageAdress~.com">Recruit</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Main() {
  return (
    <div className="main-box">
      <div className="main-title">
        <h1>성장하는 즐거움!</h1>
        <div id="element"><h1>Endless Creation</h1></div>
        <h2 className="text-box">34기 모집 예정!</h2>
      </div>
    </div>
  );
}

function AboutEC(props) {
  const [memberCount, setMemberCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);
  const [establishmentYear, setEstablishmentYear] = useState(2024);
  const endingMemberCount = 46;
  const endingProjectCount = 84;
  const startingEstablishmentYear = 1991;

  const titleRef = useRef();

  useEffect(() => {
    let start;
    let animationStarted = false;

    const handleScroll = () => {
      const titleElement = titleRef.current;
      const titleRect = titleElement.getBoundingClientRect();

      // Check if the title is visible on the screen
      if (titleRect.top < window.innerHeight && titleRect.bottom >= 0 && !animationStarted) {
        animationStarted = true;

        const animate = (timestamp) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;

          const animatedMemberCount = Math.min(Math.floor((progress / 4000) * endingMemberCount), endingMemberCount);
          const animatedProjectCount = Math.min(Math.floor((progress / 4000) * endingProjectCount), endingProjectCount);

          setMemberCount(animatedMemberCount);
          setProjectCount(animatedProjectCount);

          // Calculate establishment year progress to go from 2024 to 1991
          const establishmentYearProgress = Math.min((progress / 4000), 1);
          const animatedEstablishmentYear = 2024 - Math.floor(establishmentYearProgress * (2024 - startingEstablishmentYear));
          setEstablishmentYear(animatedEstablishmentYear);

          if (animatedMemberCount === endingMemberCount && animatedProjectCount === endingProjectCount && animatedEstablishmentYear === startingEstablishmentYear) {
            return; // Stop the animation when all counts reach their respective endings
          }

          requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      setMemberCount(0);
      setProjectCount(0);
      setEstablishmentYear(2024);
    }; // Reset the counts when the component unmounts
  }, []); // Empty dependency array, as we don't need any dependencies here

  return (
    <div id="" className="center-text">
      <h1 ref={titleRef}>지금까지 EC는?</h1>
      <div className="container">
        <div className="box">
          <span>설립일</span>
          Since {establishmentYear}
        </div>
        <div className="box">
          <span>멤버</span>
          <div>{memberCount} 명</div>
        </div>
        <div className="box">
          <span>누적 프로젝트 수</span>
          <div>
            {projectCount} <b>+</b>
          </div>
        </div>
      </div>
    </div>
  );
}


function Identity() {
  return (
    <div id="introducing-box" className="center-text">
      <h1>EC의 핵심 가치</h1>
      <div className="container">
        <div className="box-identity">
          <img src="/Growth.png" alt="Growth"></img>
          <p className="identityTitle">growth</p>
        </div>
        <div className="box-identity">
          <img src="/Sharing.png" alt="Sharing"></img>
          <p className="identityTitle">Sharing</p>
        </div>
        <div className="box-identity">
          <img src="/Cooperation.png" alt="Cooperation"></img>
          <p className="identityTitle">Cooperation</p>
        </div>
      </div>
    </div>
  );
}

function Project() {
  return (
    <div id="introducing-box" className="center-text">
      <h1>Project & Study</h1>
      <div className="container">
        <div className="box-project">
          <img src="https://user-images.githubusercontent.com/24623403/146597330-b4cafe41-c5c8-406f-a28f-3080024d11d1.png" alt="MoyeoRun"></img>
        </div>
        <div className="box-project">
          <img src="https://user-images.githubusercontent.com/24623403/146601381-9eac6210-0f45-46b2-bbfe-d8ebc2355f11.png" alt="Upgle"></img>
        </div>
        <div className="box-project">
          <img src="https://user-images.githubusercontent.com/28949165/128905429-1cdcc41c-e570-4819-a112-608936563d79.png" alt="Gamp"></img>
        </div>
        <div className="box-project">
          <img src="https://user-images.githubusercontent.com/24623403/152966700-aa767bc2-9e36-41c3-aa09-e5e3a87640e9.png" alt="Join"></img>
        </div>
      </div>
      <label class="dropdown">

        <div class="dd-button">
          프로젝트 & 스터디 더보기
        </div>

        <input type="checkbox" class="dd-input" id="test" />

        <ul class="dd-menu">
          <li>31기</li>
          <li>32기</li>
          <li>33기</li>
          <li class="divider"></li>
        </ul>

      </label>
    </div>
  );
}

function Recruiting() {
  return (
    <div className="recruiting">
      <h2 className="center-text">Recruiting Schedule</h2>
      <ul>
        <li>34기 서류 지원</li>
        <li>1차 합격 발표</li>
        <li>2차 면접</li>
        <li>최종 합격 발표</li>
        <li>워크샵</li>
      </ul>
    </div>
  );
}

function App() {
  const nu=[100, 200];
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <AboutEC num={nu}></AboutEC>
      <Identity></Identity>
      <Project></Project>
      <Recruiting></Recruiting>
    </div>
  );
}

export default App;