import {
  Button,
  Container,
  Dialog,
  DialogContent,

} from "@material-ui/core";
import React from "react";

function ChangeInformationComponent() {
  return (
    <Container>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        style={{ width: "100%" }}
      >
        Thay đổi thông tin
      </Button>
      {/* <SettingsIcon /> */}

      <Dialog open={false}>
        <Container>
          <DialogContent>construction</DialogContent>
        </Container>
        <Button variant="contained" style={{ marginRight: 10 }}>
          Quay lại
        </Button>
      </Dialog>
    </Container>
  );
}

export default ChangeInformationComponent;
