import { useEffect, useState } from "react";
import { Pet } from "../models/Pet";
import { useParams } from "react-router-dom";
import { getPetById } from "../services/petService";

export function PetAdoptionForm() {
  const [pet, setPet] = useState<Pet | null>(null);

  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      getPetById(Number(id)).then((pet) => {
        setPet(pet);
      });
    }
  }, [id]);
}
