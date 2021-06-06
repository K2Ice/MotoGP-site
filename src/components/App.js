import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Footer from "./Footer"
import Header from "./Header"
import Races from "./Races"
import Riders from "./Riders"
import Navigation from "./Navigation"

import "../styles/App.css"

class App extends React.Component {
  state = {
    chosenTeam: "all",
  }
  // componentDidMount() {
  //   fetch("./data.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(typeof data)
  //       return this.setState({ data })
  //     })
  // }

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
          </main>
        </div>
        <Footer />
      </Router>
    )
  }
}

export default App
