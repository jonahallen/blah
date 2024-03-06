import React from "react";
import "./App.css";
import CollegeBasketballTeams from "./CollegeBasketballTeams.json";

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return <h1>Colleges in NCAA Basketball:</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <br />
        <h2>{oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city}, {oneTeam.state}
        </h3>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {CollegeBasketballTeams.teams.map((teamNum: TeamProps, index: number) => (
        <Team key={index} {...teamNum} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
