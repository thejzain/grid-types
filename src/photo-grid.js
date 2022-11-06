import React, { Component } from 'react'
import './photo-grid_css.css'

export default class PhotoGrid extends Component {
  render() {
    return (
      <div className='photo-grid'>
        <div className='pcard-2x' id='one'>1</div>
        <div className='pcard' id='two'>2</div>
        <div className='pcard' id='three'>3</div>
        <div className='pcard' id='four'>4</div>
        <div className='pcard' id='five'>5</div>
        <div className='pcard-tall' id='six'>6</div>
        <div className='pcard' id='seven'>7</div>
        <div className='pcard' id='eight'>8</div>
        <div className='pcard' id='nine'>9</div>
        <div className='pcard-wide' id='ten'>10</div>
        <div className='pcard' id='eleven'>11</div>
        <div className='pcard' id='twelve'>12</div>
      </div>
    )
  }
}


