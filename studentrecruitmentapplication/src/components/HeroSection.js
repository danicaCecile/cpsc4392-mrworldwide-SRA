import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>UA LITTLE ROCK</h1>
      <p>Student Recruitment Application</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          linkTo='/createAccount'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;