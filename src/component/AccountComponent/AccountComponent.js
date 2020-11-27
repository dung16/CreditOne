import React, { useState } from "react";
import PropTypes from "prop-types";
import { Box, Container, Tab, Tabs } from "@material-ui/core";
import InformationAccountContainer from "../../containers/AccountContainer/InformationAccountContainer/InformationAccountContainer";
import { TableAddMoneyContainer, TableManageContainer } from "../../pages/PageContainers";
import { ALL_COLOR } from "../../common/Theme/color";
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box pt={3} pb={3}>
          {children}
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function AccountComponent() {
  const [value, setValue] = useState(0);
  return (
    <Box pt={6} bgcolor={ALL_COLOR.gray_7}>
      <Container>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <Tabs
            value={value}
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
            focused="false"
          >
            <Tab
              style={{ fontSize: 14 }}
              label="THÔNG TIN CHUNG"
              onClick={() => setValue(0)}
            />
            <Tab
              style={{ fontSize: 14 }}
              label="QUẢN LÝ ĐƠN VAY"
              onClick={() => setValue(1)}
            />
            <Tab
              style={{ fontSize: 14 }}
              label="NẠP TIỀN"
              onClick={() => setValue(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0} key={0}>
          <InformationAccountContainer />
        </TabPanel>
        <TabPanel value={value} index={1} key={1}>
          <TableManageContainer />
        </TabPanel>
        <TabPanel value={value} index={2} key={2}>
            <TableAddMoneyContainer/>
        </TabPanel>
      </Container>
    </Box>
  );
}

export default AccountComponent;
