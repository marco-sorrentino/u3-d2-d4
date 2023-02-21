import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavAction } from "../redux/actions";

const Favourites = (data) => {
  const favList = useSelector((state) => state.favourite.content);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            {favList.map((el, i) => {
              return (
                <ListGroupItem key={i}>
                  <p>{el}</p>
                  <Button
                    onClick={() => dispatch(removeFromFavAction(el))}
                    variant="danger"
                  >
                    Remove
                  </Button>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
