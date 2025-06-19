import Header from "./components/HeaderComponent";
import "./App.css";
import { CardComponent } from "./components/CardComponent";
import FooterComponent from "./components/FooterComponent";
import data from "./data";

function App() {
  return (
    <>
      <Header />

      <div className="card-container">
        {data.map((item, idx) => (
          <CardComponent
            key={idx}
            img={item.img}
            headingText={item.headingText}
            bodyText={item.bodyText}
            cost={item.cost}
            discount={item.discount}
            rating={item.rating}
          />
        ))}
      </div>
      <FooterComponent />
    </>
  );
}

export default App;
