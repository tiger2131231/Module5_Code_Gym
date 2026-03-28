
import React from 'react'
import './App.css'
import bai2 from "./bai2.jsx";
import bai3 from "./bai3.jsx";
//bai1
function Bai1() {
  const cityList = React.createElement(
      'ul',
      { className: 'city-list' },
      React.createElement('li', null, 'Hà Nội (HN)'),
      React.createElement('li', null, 'Hải Phòng (HP)'),
      React.createElement('li', null, 'Đà Nẵng (DN)'),
      React.createElement('li', null, 'Thành phố Hồ Chí Minh (HCM)'),
      React.createElement('li', null, 'Cần Thơ')
  )
  return (
      <>
        <h1>Bai 1</h1>
        {cityList}
        <h1>Bai 2</h1>
        {bai2()}
        <h1>Bai 3</h1>
        {bai3()}
      </>
  )
}

export default Bai1