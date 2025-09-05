import Image from "next/image";
import { Layout } from "./components/layout";

const Home: React.FC = () => {
  return (
    <div>
      Bem Vindo!

      <button className="button">Button</button>

      <Layout/>
    </div>
  );

}

export default Home;
