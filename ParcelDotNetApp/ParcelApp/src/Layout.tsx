import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/Header";
import "./styles.scss";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="d-flex">
      <div className="d-flex flex-column flex-fill">
        <div>
          <Header />
        </div>
        <div className="m-2">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
