import './App.css';
import React, {useState, useEffect} from 'react';
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
  const [number, setNumber] = useState(0);
  const endingNumber = 150;
  useEffect(() => {
    let start;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      if (progress < 1000) {
        setNumber(Math.min(Math.floor((progress / 2000) * endingNumber), endingNumber));
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => setNumber(0); // Reset the number when the component unmounts
  }, [endingNumber]); // Include endingNumber in the dependency array to react to changes

  return (
    <div className="center-text">
      <h1>지금까지 EC는?</h1>
      <div className="container">
        <div className="box">
          <span>설립일</span>
          Since 1991
        </div>
        <div className="box">
          <span>멤버</span>
          <div>
            {number} 명
          </div>
        </div>
        <div className="box">
          <span>누적 프로젝트 수</span>
          <div>
            {number} <b>+</b>
          </div>
        </div>
      </div>
    </div>
  );
}

function Identity() {
  return (
    <div className="center-text">
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
    <div className="center-text">
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