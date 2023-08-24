import { Card } from "react-bootstrap";
import { Pet } from "../models/Pet";
import "../components/PetCard.css";
import { Link } from "react-router-dom";

interface PetCardProps {
  pet: Pet;
}

export function PetCard(props: PetCardProps) {
  return (
    <Card>
      <Card.Img variant="top" src={`img/${props.pet.image}`}></Card.Img>

      <Card.Body>
        <Card.Title>
          {props.pet.name} ({props.pet.breed})
        </Card.Title>
        {props.pet.description}
      </Card.Body>
      <Card.Footer>
        <button className="btn btn-primary">Insult Me!</button>
        <Link
          to={`/details/${props.pet.id}`}
          className="btn btn-secondary m1-2"
        >
          Details
        </Link>
      </Card.Footer>
    </Card>
  );
}
