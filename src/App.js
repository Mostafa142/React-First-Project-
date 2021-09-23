import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import TopSales from './components/TopSales';
import About from './components/About';
import Responsive from './components/Responsive';
import Shop from './components/shop';
import Footer from './components/Footer';
import CounterContext from './components/CounterContext';
import { faLaptop, faTabletAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faPhone, faMapMarkedAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
function App() {
  const cardss = [
    { id: "1", title: "Laptop", awesome: faLaptop, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil pariatur, corrupti nisi tempora ipsam nesciunt?" },
    { id: "2", title: "Tablet", awesome: faTabletAlt, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil pariatur, corrupti nisi tempora ipsam nesciunt?" },
    { id: "3", title: "Mobile", awesome: faMobileAlt, desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nihil pariatur, corrupti nisi tempora ipsam nesciunt?" }
  ]
  const lists = [
    {
      id: 1,
      title: "Sports Store",
      icon1: faMapMarkedAlt,
      icon2: faPhone,
      icon3: faEnvelope,
      tex1: "  123 Consectetur at ligula 10660",
      tex2: "  010-020-0340",
      tex3: "  Mostafafathi705@gmail.com",
    },
    {
      id: 2,
      title: "Products",
      tex1: "Luxury",
      tex2: "Sport Wear",
      tex3: "Men's Shoes",
      tex4: "Women's Shoes",
      tex5: "Gym Accessories",
      tex6: "Sport Shoes"
    },
    {
      id: 3,
      title: "Further Info",
      tex1: "Home",
      tex2: "About Us",
      tex3: "Shop Location",
      tex4: "FAQs",
      tex5: "Contact",
    }
  ]
  return (
    <>
      <CounterContext>
        <Navbar />
        <Carousel />
        <TopSales />
        <Shop />
      </CounterContext>
      <Responsive fcard={cardss} />
      <About />
      <Footer flists={lists} />
    </>
  );
}

export default App;
