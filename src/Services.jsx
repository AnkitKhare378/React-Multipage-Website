import React from 'react'
import { useGlobalContext } from './context';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from './styles/Button';

const Services = () => {
  const {services} = useGlobalContext();
  console.log(services);
  
  return ( 
  <Wrapper classname='section'>
    <h2 className='common-heading'>Our Services</h2>
    <div className='container grid grid-three-column'>
      {services.map((curElem) => {
            const {id, name, image, description} = curElem;
            return(
              <div key={id} className='card'>
                <figure>
                  <img src={image} alt={name} />
                </figure>
                <div className='card-data'>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <NavLink to="/service">
                     <Button>Read More</Button> 
                  </NavLink>
                </div>  
              </div>
            ) 
        })}
    </div>
  </Wrapper>
  );
}

const Wrapper = styled.section``;

export default Services;