import { useEffect } from "react";
import { useLocation, useParams } from "react-router";

const ScrollToTop = (props) => {
    
  const location = useLocation();
  console.log(location.pathname)


  useEffect(() => {
    if (location.pathname == "/VizDAS") {
        window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{props.children}</>
};

export default ScrollToTop;