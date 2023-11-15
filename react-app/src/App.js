// Importing necessary modules
import axios from "axios";
import React, { useState, useEffect } from "react";

// Functional component named App, taking props as an argument
const App = (props) => {
  // Define state variable APIlist and its setter function using the useState hook
  const [APIlist, setAPIlist] = useState();

  // Use the useEffect hook to perform an action on component mount
  useEffect(() => {
    // Define the API endpoint URL
    let url = "https://api.publicapis.org/entries?category=Animals";

    // Make an asynchronous GET request using axios
    axios({
      method: "get",
      url: url,
      responseType: "json",
    })
      .then((resp) => {
        // Extract the list of entries from the response
        let listOfEntries = resp.data.entries;
        // Convert the object into an array of key-value pairs
        let listOfEntriesAsArray = Object.entries(listOfEntries);
        let i = 1;

        //
        <tr key={i++}>
          {/* Change from <a> to <td> for table data cell */}
          <td key={i++} style={{ color: "red", border: "1px solid black" }}>
            {entryDetail[1]["API"]}
          </td>
          {/* Change from <a> to <td> for table data cell */}
          <td key={i++} style={{ color: "red", border: "1px solid black" }}>
            {entryDetail[1]["Link"]}
          </td>
        </tr>;
        //

        // Map through the array to create a list of JSX elements
        let entryDetails = listOfEntriesAsArray.map((entryDetail) => {
          return (
            // Each list item contains a link to the API and its name
            <li key={i++}>
              <a href={entryDetail[1]["Link"]} target="_blank" rel="noreferrer">
                {entryDetail[1]["API"]}
              </a>
            </li>
          );
        });

        // Set the state variable APIlist with the generated list of entries
        setAPIlist(entryDetails);
      })
      .catch((err) => {
        // Log any errors that occur during the API request
        console.log(err.toString());
      });
  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount

  // Define a style object for the text color and font size based on props
  const colorStyle = { color: props["color"], fontSize: props["size"] };

  // Render the component with a title, an empty line, and the list of APIs
  return (
    <div>
      <h2>APIs List</h2>
      <br />

      <div style={colorStyle}>
        <ul>{APIlist}</ul>
      </div>
    </div>
  );
};

// Export the App component as the default export for the module
export default App;
