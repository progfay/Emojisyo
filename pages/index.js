import React from 'react'
import Head from '../components/head'

export default () => (
  <React.Fragment>
    <Head />
    <div className='container'>
      <input type='text' />
      <div className='item-list'>
        <div className='item' />
        <div className='item' />
        <div className='item' />
        <div className='item' />
        <div className='item' />
      </div>
    </div>
    <style jsx>{`
      .container {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      .item-list {
        width: 80vw;
        border: solid 1px black;
      }

      .item {
        width: 100%;
        height: 80px;
      }

      .item:not(:last-child) {
        border-bottom: solid 1px gray;
      }
    `}</style>
  </React.Fragment>
)
