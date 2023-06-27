import React from 'react'

const AsideMenuContent = (props) => {
    const {pic} = props
  return (
    <div className='item-container'>
        <div className="aside-left">
            <img src={pic} alt="" />
        </div>
        <div className="aside-right">
            <div className="aside-right-top">
                <h3>Lorem Ipsum</h3>
            </div>
            <div className="aside-right-bottom">
                <p>A minute read</p>
                <p>Today</p>
            </div>
        </div>
    </div>
  )
}

export default AsideMenuContent