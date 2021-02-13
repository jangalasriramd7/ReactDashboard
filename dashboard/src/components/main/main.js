import "./main.css";
import hello from "../../assets/hello.png";
import Chart from "../charts/chart";

const Main = () => {
    return (
        <main>
            <div className="main__container">
                
                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>Hello Eagles</h1>
                        <p>Welcome to your admin dashboard</p>
                    </div>
                </div>

                <div className="main__cards">
                
                    <div className="card">
                        <i className="fa fa-user-o fa-2x text-lighblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of subscribers</p>
                            <span className="font-bold text-title">578</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Times of Watching</p>
                            <span className="font-bold text-title">2467</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-video-camera fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Videos</p>
                            <span className="font-bold text-title">360</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of likes</p>
                            <span className="font-bold text-title">645</span>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Cupertino, California, USA</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart/>
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Stats Report</h1>
                                <p>Cupertino, California, USA</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>

                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>$750,000</p>
                            </div>
                            <div className="card2">
                                <h1>Sales</h1>
                                <p>12000</p>
                            </div>
                            <div className="card3">
                                <h1>Users</h1>
                                <p>734</p>
                            </div>
                            <div className="card4">
                                <h1>Orders</h1>
                                <p>4520</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;