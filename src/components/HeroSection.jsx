// import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import {Button} from "../styles/Button"
const HeroSection = () => {
  return (
    <Wrapper>
        <div className='container'>
            <div className='grid grid-two-column'>
                <div className='gero-section-data'>
                    <p className='intro-data'>Welcome to</p>
                    <h1>Vinayak Store</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quo obcaecati voluptate architecto animi, minus amet cupiditate praesentium pariatur aliquam.
                    </p>
                    <NavLink to="/">
                        <Button>
                            Shop Now
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    </Wrapper>
  )
}
const Wrapper =styled.section``;
export default HeroSection