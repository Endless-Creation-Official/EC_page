import './App.css';

function Header() {
  return (
  <header id="main-header" >
    <div class="header--container max-width-1200">
      <h1><a href="/"><img src="/ECmark.png" alt="ECmark" class="ECmark"/></a></h1>
      <ul>
        <li><a href="/read/1">Home</a></li>
        <li><a href="/read/2">About Us</a></li>
        <li><a href="/read/3">Members</a></li>
        <li><a href="/read/4">Recruit</a></li>
      </ul>
    </div>
  </header>
  );
}

function Main() {
  return (
    <div class="main-title">
      <h1>성장하는 즐거움!</h1>
      <div id="element"><h1>Endless Creation</h1></div>
      <h2 class="text-box">34기 모집 예정!</h2>
    </div>
  )
}

function AboutEC() {
  return (
    <div class="center-text">
      <h1>About EC</h1>
      <div class="container">
        <div class="box">
          <span>설립일</span>
          Since 1991
        </div>
        <div class="box">
          <span>멤버</span>
          <div>
            46 명
          </div>
        </div>
        <div class="box">
          <span>누적 프로젝트 수</span>
          <div>
            84 <b>+</b>
          </div> 
        </div>
      </div>
    </div>
  )
}

function Recruiting() {
  return(
    <div class="recruiting">
      <h2 class="center-text">Recruiting Schedule</h2>
      <ul>
        <li>34기 서류 지원</li>
        <li>1차 합격 발표</li>
        <li>2차 면접</li>
        <li>최종 합격 발표</li>
        <li>워크샵</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <AboutEC></AboutEC>
      <Recruiting></Recruiting>
    </div>
  );
}

export default App;
