import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import FormComponent from "./components/FormComponent";
import Output from "./components/Output";

function App() {
  const [data, setData] = useState(false);
  const [error, setError] = useState(false);
  const [repositories, setRepositories] = useState(false);

  const handleSearch = (userName) => {
    const clientSecret = "WRITE HERE YOUR CLIENT SECRET";
    const clientId = "WRITE HERE YOUR CLIENT SECRET";
    async function fetchData() {
      const response = await fetch(
        `https://api.github.com/users/${userName}?client_id=${clientId}&client_secret=${clientSecret}&sort=created`
      );
      const jsonData = await response.json();
      if (jsonData.message) {
        setError(true);
        setData(false);
      } else {
        setData(jsonData);
        setError(false);
      }
      const url = jsonData.repos_url;
      handleRepoRequest(url);
    }
    fetchData();
  };

  const handleRepoRequest = (url) => {
    async function fetchData() {
      const response = await fetch(url);
      const jsonData = await response.json();
      setRepositories(jsonData);
    }
    fetchData();
  };

  return (
    <Container>
      <h1 className="text-center header mt-5 mb-4">
        Find GitHub profile by user's name
      </h1>
      <FormComponent handleSearch={handleSearch} />
      <Output data={data} error={error} repositories={repositories} />
    </Container>
  );
}

export default App;
