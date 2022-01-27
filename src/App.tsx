import React from "react";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import ErrorBoundry from "./containers/ErrorBoundry";
import Scroll from "./containers/Scroll";
import robots, { RobotType } from "./data/robot";

interface State {
  robots: RobotType[] | null;
  searchfield: string;
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Props {}
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      robots: null,
      searchfield: "",
      searchChange: () => {}
    };
  }

  componentDidMount() {
    this.setState({ robots: robots });
  }
  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchfield: event.target.value });
    console.log(event.target.value);
  };

  render() {
    const filteredRobots = robots.filter((robot) =>
      robot.name.toLocaleLowerCase().includes(this.state.searchfield)
    );
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBar
          searchfield={this.state.searchfield}
          searchChange={this.onSearchChange}
        ></SearchBar>
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
