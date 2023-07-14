import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Categories.css';

export default function Categories() {
  const navigate=useNavigate();
  return (
    <>
    <div className='categories'>
    <div className='cat-card' onClick={()=>{navigate("/tv")}}>Televisions</div>
    <div className='cat-card' onClick={()=>{navigate("/mp")}}>Mobile Phones</div>
    <div className='cat-card' onClick={()=>{navigate("/cl")}}>Clothes</div>
    <div className='cat-card' onClick={()=>{navigate("/lt")}}>Laptops</div>
    <div className='cat-card' onClick={()=>{navigate("/sp")}}>Sports</div>
    <div className='cat-card' onClick={()=>{navigate("/mi")}}>Musical Instruments</div>
    <div className='cat-card' onClick={()=>{navigate("/ft")}}>Furniture's</div>
    <div className='cat-card' onClick={()=>{navigate("/bk")}}>Bikes</div>
    </div>
    </>
  )
}
