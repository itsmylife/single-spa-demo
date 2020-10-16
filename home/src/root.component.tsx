import React from "react";
import { loggedInUserPromise } from "@isimsek/mf-util";

export default function Root(props) {
  React.useEffect(() => {
    console.log("-----------------------------");
    loggedInUserPromise("ismail");
    console.log("-----------------------------");
  }, []);

  return (
    <div className="jumbotron">
      <h1 className="display-4">Hello, world!</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
}
