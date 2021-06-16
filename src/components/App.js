import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import $ from "jquery"

import Footer from "./Footer"
import Header from "./Header"
import Races from "./Races"
import Ranking from "./Ranking"
import Riders from "./Riders"
import Navigation from "./Navigation"

import "../styles/App.css"

class App extends React.Component {
  state = {
    chosenTeam: "all",
    mainStyle: false,
  }
  componentDidMount() {
    const header = $(".headPic")
    const nav = $(".mainNav")
    let headerScrolled = true

    $(document).on("scroll", function () {
      const skroll = $(document).scrollTop()
      if (skroll >= header.height() && headerScrolled) {
        nav.css({
          position: "fixed",
          top: 0,
          left: "50%",
          zIndex: "10",
          transform: "translateX(-50%)",
          borderRadius: "20px",
          border: "1px solid black",
          overflow: "hidden",
        })

        $(".mainNav a").css({ padding: "10px 20px" })

        headerScrolled = !headerScrolled
      } else if (skroll <= header.height() && !headerScrolled) {
        nav.css({
          position: "static",
          top: "auto",
          left: "auto",
          transform: "none",
          border: "1px solid black",
          borderRadius: "0px",
        })
        $(".mainNav a").css({
          padding: "20px 30px",
        })
        headerScrolled = !headerScrolled
      }
    })
    $(".mainNav a").on("click", () => {
      if ($("main").offset().top + 50 < $(document).scrollTop()) {
        $(document).scrollTop(0)
      }
    })
  }

  handleTeamChoice = (e) => {
    const team = e.target.value
    this.setState({
      chosenTeam: team,
    })
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <Route path="/" component={Header} />
          <Route path="/" render={Navigation} />
          <main>
            <Route
              path="/riders"
              render={() => (
                <Riders
                  change={this.handleTeamChoice}
                  chosenTeam={this.state.chosenTeam}
                  data={this.props.data}
                />
              )}
            />
            <Route
              path="/races"
              render={() => <Races data={this.props.data} />}
            />
            <Route
              path="/rank"
              render={() => <Ranking data={this.props.data} />}
            />
          </main>
        </div>
        <Footer />
      </Router>
    )
  }
}
export default App
