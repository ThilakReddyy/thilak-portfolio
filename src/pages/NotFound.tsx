import { ArrowUpRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="not-found">
      <a href="/" className="wordmark" aria-label="Thilak Reddy, back to home">
        thilak<span>.</span>
      </a>

      <div>
        <p>Error 404 · page not found</p>
        <h1>This one isn&apos;t built yet.</h1>
        <a className="button button-primary" href="/">
          Back to the portfolio
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default NotFound;
