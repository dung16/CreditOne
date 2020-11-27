import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetch_List_Account } from "../../actions";
import { ExchangeMainComponent } from "../../pages/PageComponents/index";

function ExchangeMainContainer() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state);
  useEffect(() => {
    dispatch(fetch_List_Account());
  }, [dispatch])
  return (
    <Fragment>
      <ExchangeMainComponent
      list_account={counter.list_account}
      />
    </Fragment>
  );
}

export default ExchangeMainContainer;
