import style from "./home.module.css";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className={style.background}>
            <div className={style.header}>
                <div className={style.ECmark}>
                    <img src="/Ecmark.png" alt="ECmark" />
                </div>
                <div className={style.highbar}>
                    <Link to={`/`}>
                        Home
                    </Link>
                    <Link to={`/Aboutus`}>
                        Aboutus
                    </Link>
                    <Link to={`/Members`}>
                        Members   
                    </Link>
                    <Link to={`Recruit`}>
                        Recruit    
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;