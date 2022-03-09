import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Switcher from './components/Switcher';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  return (
    <div className="App">
        <Container>
            <Row>
                <Switcher />
            </Row>
        </Container>
    </div>
  );
}

export default App;
