import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import Info from './components/info.jsx';
import './style/style.css'

export default function App() {


  return (
    <>
      <Card className=' m-auto cartao'>
        <img style={{ width: '90%', padding: '9px'}}
          alt="logo Pokedex"
          src="https://raw.githubusercontent.com/EvertonCordeiro1994/APIpokemon/main/src/img/Pok%C3%A9dex_logo.png"
        />
        <CardBody className='mb-5'>
          <Info />

        </CardBody>
      </Card>
    </>
  )
};
