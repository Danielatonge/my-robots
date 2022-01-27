import React, { useState, useEffect } from "react";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import ErrorBoundry from "./containers/ErrorBoundry";
import Scroll from "./containers/Scroll";
import robotData from "./data/robot";
import { RobotType } from "./types";

function App() {
  const [robots, setRobots] = useState<RobotType[] | null>(null);
  const [searchfield, setSearchfield] = useState("");
  useEffect(() => {
    setRobots(robotData);
  }, []);

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchfield(event.target.value);
    console.log(event.target.value);
  };

  const filteredRobots =
    robots &&
    robots.filter((robot: RobotType) =>
      robot.name.toLocaleLowerCase().includes(searchfield)
    );

  return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBar
        searchfield={searchfield}
        searchChange={onSearchChange}
      ></SearchBar>
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </div>
  );
}

export default App;
