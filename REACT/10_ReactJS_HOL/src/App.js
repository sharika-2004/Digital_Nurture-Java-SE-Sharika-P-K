import "./App.css";
import office from "./office.jpg";

function App() {

  const officeList = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
      Image: office
    }
  ];

  return (
    <div className="App">

      <h1>Office Space , at Affordable Range</h1>

      {
        officeList.map((item, index) => {

          const rentStyle = {
            color: item.Rent <= 60000 ? "red" : "green"
          };

          return (

            <div className="office-card" key={index}>

              <img
                src={item.Image}
                alt="Office Space"
                className="office-image"
              />

              <h2>Name: {item.Name}</h2>

              <h3 style={rentStyle}>
                Rent: Rs. {item.Rent}
              </h3>

              <h3>
                Address: {item.Address}
              </h3>

            </div>

          );

        })
      }

    </div>
  );
}

export default App;