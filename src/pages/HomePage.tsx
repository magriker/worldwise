// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import { PageNav } from "../components/PageNav";
import { AppNav } from "../components/AppNav";

export function HomePage() {
  return (
    <div>
      <PageNav></PageNav>
      <AppNav></AppNav>
      <h1>WorldWise</h1>
      <Link to="/app">Go to app</Link>
    </div>
  );
}
