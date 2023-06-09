import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import Info from './components/info.jsx';
import './style/style.css'

export default function App() {


  return (
    <>
      <Card className=' m-auto cartao'>
        <img style={{ width: '100%', padding: '9px'}}
          alt="Sample"
          src="https://raw.githubusercontent.com/EvertonCordeiro1994/APIpokemon/main/src/img/Pok%C3%A9dex_logo.png"
        />
        <CardBody>
          <Info />

        </CardBody>
      </Card>
    </>
  )
};
