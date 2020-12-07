import React, { PureComponent } from 'react'
import { WriterWrapper} from '../style'

export default class Writer extends PureComponent {
  render() {
    return (
      <div>
        <WriterWrapper>
         <img className="writerImg" src="./assets/code.png" alt=""/>
         <div className="info">
           <div className="title">下载简书手机App </div>
           <div className="content">随时随地发现和创作内容</div>
         </div>
        </WriterWrapper>
      </div>
    )
  }
}
