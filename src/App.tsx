import "./App.scss";
import { CardGrid } from "./components/CardGrid/CardGrid";
import SectionImage from "./assets/section-image.jpg";
import { Banner } from "./components/Banner/Banner";
import { Navbar } from "./components/Navbar/Navbar";
import { Section } from "./components/Section/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Section
        image={SectionImage}
        buttonLabel="Botão"
        title="Seção"
      >
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sed, consequuntur, illum ab molestiae quas vero id fugit praesentium reprehenderit nostrum nihil? Autem voluptates soluta fuga explicabo! Magnam, suscipit facere.

        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt assumenda unde rerum et cupiditate dolor odio sunt cumque. Eligendi debitis quod fugiat eius. Asperiores quos accusamus, nemo fuga porro repellat!
        </p>
      </Section>
      <CardGrid />
      <Section image={SectionImage} imageFirst title="Botão">
      <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam sed, consequuntur, illum ab molestiae quas vero id fugit praesentium reprehenderit nostrum nihil? Autem voluptates soluta fuga explicabo! Magnam, suscipit facere.

        </p>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt assumenda unde rerum et cupiditate dolor odio sunt cumque. Eligendi debitis quod fugiat eius. Asperiores quos accusamus, nemo fuga porro repellat!
        </p>
      </Section>
    </div>
  );
}

export default App;
