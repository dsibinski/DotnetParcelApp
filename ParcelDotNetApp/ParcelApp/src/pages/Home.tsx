import { createRoot } from "react-dom/client";
import LandingPage from "../components/LandingPage";
import Layout from "../Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <LandingPage />
      </Layout>
    </div>
  );
};

export const showHomePage = (domElementId: string) => {
  const container = document.getElementById(domElementId);
  const root = createRoot(container!);
  root.render(<Home />);
};
