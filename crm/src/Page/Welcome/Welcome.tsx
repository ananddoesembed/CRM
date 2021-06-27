import { Jumbotron, Button } from "react-bootstrap";
import { Login } from "../../Components/Login/Login";
import './Welcome.css'
export default function Welcome() {
  return (
      <Jumbotron className="bg">
        <Login/>
      </Jumbotron>
  );
}
