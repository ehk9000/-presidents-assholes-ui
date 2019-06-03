import React from 'react';

const PresDetails = (props) => {
  let {
    number, president, birth_year, death_year,
     took_office,left_office, party} = props;
  return (
    <article>
      <ul>
        <li>Number: {number}</li>
        <li>Name: {president}</li>
        <li>Born: {birth_year}</li>
        <li>Died: {death_year}</li>
        <li>Took office: {took_office}</li>
        <li>Left office: {left_office}</li>
        <li>Party: {party}</li>
      </ul>
    </article>
  )
}

export default PresDetails;