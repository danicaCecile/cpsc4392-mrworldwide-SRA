import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <image src={'./splashphoto.jpg'} alt='UA LITTLE ROCK'/>
      <h1>UA LITTLE ROCK</h1>
      <p>Student Recruitment Application</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          linkTo='/createAccount'
        >
          Help recruit students!
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;