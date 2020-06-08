import React, { Component } from 'react';
import { Uploader } from '../style'
import { connect } from 'react-redux';
class Upload extends Component {
  render(){
    const { QRcode } = this.props
    return (
      <Uploader>
        <img 
          src={QRcode} 
          alt="下载简书二维码"
          ></img>
        <div>
          <p className="title">下载简书手机App ></p>
          <p className="desc">随时随地发现和创作内容</p>
        </div>
      </Uploader>
    )
  }
}

const mapstate = (state) => ({
  QRcode: state.get('home').get("QRcode")
})
export default connect(mapstate, null)(Upload)