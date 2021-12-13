import React, { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showCartHandler = () => {
    setModalIsShown(true);
  }

  const hideCartHandler = () => {
    setModalIsShown(false);
  }

  return (
    <Fragment>
      {modalIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
    </Fragment>
  );
}

export default App;
