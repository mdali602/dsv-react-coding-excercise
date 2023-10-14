import React, { memo } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import makeStyles from "@mui/styles/makeStyles";
import { PartialUser } from "../../types/global.types";
import Row from "./Row";
import Col from "./Col";

const useStyles = makeStyles({
  alignRight: {
    justifyContent: "end"
  }
});

type UserProps = {
  user: PartialUser;
  handleRemove: (id: string) => void;
};

function UserCard(props: UserProps) {
  const {
    user: { userId, username, age, address, companyName },
    handleRemove
  } = props;
  const classes = useStyles();

  const fullAddress = `${address.street}, ${address.city}, ${address.zipcode}`;

  return (
    <Card sx={{ my: 0.5, minWidth: 275, textAlign: "left" }}>
      <CardContent>
        <Row>
          <Col text="Username: " color="text.secondary" />
          <Col text={username} />
        </Row>
        <Row>
          <Col text="Age: " color="text.secondary" />
          <Col text={age} />
        </Row>
        <Row>
          <Col text="address: " color="text.secondary" />
          <Col text={fullAddress} />
        </Row>
        <Row>
          <Col text="Company: " color="text.secondary" />
          <Col text={companyName} />
        </Row>
      </CardContent>
      <CardActions className={classes.alignRight}>
        <Button
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => handleRemove(userId)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default memo(UserCard);
