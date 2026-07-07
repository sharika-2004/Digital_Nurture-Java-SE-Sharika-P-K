import {
  ListofPlayers,
  Scorebelow70,
  players,
} from "./ListofPlayers";

import {
  OddPlayers,
  EvenPlayers,
  IndianPlayers,
  ListofIndianPlayers,
} from "./IndianPlayers";

function App() {

  var flag = false;

  if (flag === true) {
    return (
      <div>

        <h1>List of Players</h1>

        <ListofPlayers />

        <hr />

        <h1>List of Players having Scores Less than 70</h1>

        <Scorebelow70 />

      </div>
    );
  }

  else {

    return (

      <div>

        <div>

          <h1>Indian Team</h1>

          <h2>Odd Players</h2>

          {OddPlayers([
            "Sachin",
            "Dhoni",
            "Virat",
            "Rohit",
            "Yuvraj",
            "Raina",
          ])}

          <hr />

          <h2>Even Players</h2>

          {EvenPlayers([
            "Sachin",
            "Dhoni",
            "Virat",
            "Rohit",
            "Yuvraj",
            "Raina",
          ])}

        </div>

        <hr />

        <div>

          <h1>List of Indian Players Merged:</h1>

          <ListofIndianPlayers IndianPlayers={IndianPlayers} />

        </div>

      </div>

    );

  }

}

export default App;
