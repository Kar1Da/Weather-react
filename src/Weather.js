import "./style.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="mainWrapper">
          <div className="wrapper">
            <form id="searchCity-form">
              <div className="input-group mb-4 firstGroup">
                <input
                  type="text"
                  className="form-control mainInput"
                  placeholder="Search city..."
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  id="city-input"
                />
                <button
                  type="submit"
                  className="btn btn-primary searchButton ps-4 pe-4"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="card-body innerContent">
              <div className="row g-0 firstRow">
                <div className="col-auto city">
                  <h1 id="city">City</h1>
                </div>
                <div className="col-auto temperature">
                  <h1>
                    <span id="degrees"></span>
                    <button type="button" id="celsius">
                      C
                    </button>
                    <span className="stick">|</span>
                    <button type="button" id="fahrenheit">
                      F
                    </button>
                  </h1>
                </div>

                <div className="col-auto bonusInfo">
                  <div className="col">
                    <span>
                      Humidity: 50%<span className="humidity"></span>
                    </span>
                  </div>
                  <div className="col">
                    <span>
                      Wind: 3km/h<span className="windSpeed"></span>
                    </span>
                  </div>
                </div>
                <div className="col-md-auto ms-md-auto todaysInfo">
                  <div className="col today">Today</div>
                  <div className="col time">time</div>
                  <div className="col-auto weather">weather</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
