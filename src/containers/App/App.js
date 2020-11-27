import { Box, responsiveFontSizes, ThemeProvider } from "@material-ui/core";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {
  Header,
  ExchangeMainContainer,
  AccountContainer,
  Dangnhap,
  HomeContainer,
  TableLoansContainer,
} from "../../pages/PageContainers/index";
import theme from "../../common/Theme/index";
import configureStore from "../../redux/configureStore";
import { FooterContainer } from "../../pages/PageContainers";
import { Contact, GlobalLoading, Introduce } from "../../pages/PageComponents";
const store = configureStore();

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Box style={{ height: 80 }}></Box>
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/dangnhap" component={Dangnhap} />
            <Route path="/dangkivay" component={TableLoansContainer} />
            <Route path="/gioithieu" component={Introduce} />
            <Route path="/lienhe" component={Contact} />
            <Route path="/sangiaodich" component={ExchangeMainContainer} />
            <Route path="/taikhoan" component={AccountContainer} />
          </Switch>
          <FooterContainer />
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <GlobalLoading />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
}
export default App;
