import { Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

const Favourites = () => {
  const favouritesContent = useSelector(state => state.favourites.content);
  const dispatch = useDispatch();

  return (
    <Row>
      <Col sm={12}>
        <ul style={{ listStyle: "none" }}>
          {favouritesContent.map((job, i) => (
            <li key={i} className="my-4"><Button variant="danger" onClick={() => {dispatch({ type: "REMOVE_TO_FAV", payload: i });}}>DELETE</Button><a href={job.url}>{job.title}</a></li>
          ))}
        </ul>
      </Col>
    </Row>
  );
};

export default Favourites;