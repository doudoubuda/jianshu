import styled  from 'styled-components'
import logePic from '../../static/logo.jpg'

export const HeaderWrapper =  styled.div`
  height: 58px;
  border-bottom: 1px solid #f0f0f0
`

export const Logo =  styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  height: 58px;
  width: 100px;
  background: url(${logePic});
  background-size: contain
`