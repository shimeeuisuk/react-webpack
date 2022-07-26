import React from "react";
import { hot } from "react-hot-loader/root";

const App = () => {
  return (
    <>
      <div className="container">
        App + Webpack + Babel + Hot
        <h1>Main Component Start!</h1>
        <h2>webpack watch test</h2>
      </div>
    </>
  );
};

export default hot(App);
