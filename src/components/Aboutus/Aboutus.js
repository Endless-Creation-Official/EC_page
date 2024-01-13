import Header from "../Header/Header";

function Aboutus() {
    return (
        <div>
            <Header />
            <div class="center-text">
            <h1>AboutEC</h1>
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
        </div>
      )
}

export default Aboutus;