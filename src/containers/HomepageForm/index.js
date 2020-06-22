import React from 'react';
import {useForm} from "react-hook-form";
import './HomepageForm.style.css'

export const HomepageForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const saveUserInformations = user => console.log(user);

  return (
    <div className="form">
      <h1>Vous souhaitez nous renseigner quelque chose à vôtre propos ?</h1>
      <form onSubmit={handleSubmit(saveUserInformations)}>
        <label>Prénom</label>
        <input name="prenom" defaultValue="Hervé" ref={register({ required: true })} />
        {errors.prenom && <span>Attention, vous n'avez pas renseigné votre prénom</span>}

        <label>Nom</label>
        <input name="nom" defaultValue="Latrampe" ref={register({ required: true })} />
        {errors.nom && <span>Attention, vous n'avez pas renseigné votre nom</span>}

        <label>Age</label>
        <input name="age" type="number" defaultValue="42" ref={register({ required: true, min: 12, max: 120 })} />
        {errors.age && <span>Attention, vous n'avez pas renseigné votre age ou vous n'avez pas entre 12 et 120 ans.</span>}

        <input type="submit" className="submit-button"/>
      </form>
    </div>
  );
}
