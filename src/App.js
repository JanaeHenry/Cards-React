import "./styles.css";
//import card1
import Card from "./components/Card";
import Card2 from "./components/Card2";
import cardsArr from "./data";
// console.log(cardsArr)

const cards = cardsArr.map((ele, idx) => {
  return (
    <Card
      key={idx}
      {...ele}// spread operator can be used instead of below 
      // title={ele.title}
      // url={ele.url}
      // img={ele.img}
      // text={ele.text}
    />
  );
});

// console.log(cards);

export default function App() {
  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {cards}
        {/* <Card1 />
        <Card2 /> */}
      </section>
    </div>
  );
}