import classes from "./Item.module.css";
import Card from "react-bootstrap/Card";

import { useContext } from "react";

const Item = (props) => {
  return (
    <Card className={classes.Card}>
      <Card.Body>
        <Card.Header as="h3">
          {props.icon}
          <> </>
          {props.header}
        </Card.Header>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text>{props.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Item;
