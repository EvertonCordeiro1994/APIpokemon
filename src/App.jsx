import { Card, CardBody} from 'reactstrap';
import Info from './components/info.jsx';
import './style/style.css'

export default function App() {

          
  return (
    <>
      <Card id='cartao' className=' m-auto mt-5' style={{ width: '40rem' }}>
        <div className='m-auto mt-3'>
          <img className='logo' src="https://raw.githubusercontent.com/EvertonCordeiro1994/APIpokemon/main/src/img/Pok%C3%A9dex_logo.png" alt="" />
        </div>
        
        <CardBody className='m-auto text-center'>
          <Info />
        </CardBody>
      </Card>
    </>
  )
};
