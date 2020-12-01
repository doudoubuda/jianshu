import styled  from 'styled-components'
import logePic from '../../static/logo.jpg'

export const HeaderWrapper =  styled.div`
  height: 56px;
  min-width: 768px;
  max-width: 1440px;
  margin: 0 auto;
  border-bottom: 1px solid #f0f0f0
`

export const Logo =  styled.a`
  position: absolute;
  top: 0;
  display: block;
  height: 56px;
  width: 100px;
  background: url(${logePic});
  background-size: contain
`

export const Nav =  styled.div`
  width: 960px;
  padding-right: 70px;
  box-sizing: border-box;
  height: 100%;
  margin: 0 auto;
`

export const NavItem =  styled.div`
  line-height: 58px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left
  }
  &.right {
    float: right;
    color: #969696;
    .iconfont {
      font-size: 24px;
    }
  }

  &.active {
    color: #ea6f5a
  }
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .slide-enter {
    transition: all .3s ease-out;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit {
    transition: all .3s ease-out;
  }
  .slide-exit-active{
    width: 160px;
  }
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`

export const NavSearch = styled.input.attrs ({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  padding:0 35px 0 20px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  font-size: 14px;
  background: #eee;
  color: #777;
  &::placeholder {
    color: #999
  }
  &.focused {
    width: 240px
  }
`


export const Addition = styled.div`
  position: absolute;
  top: 0;
  height: 56px;
  padding-left: 50px
`

export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  font-size: 14px;
  border: 1px solid #ec6149;
  &.reg {
    color: #ec6149
  }
  &.writting {
    background: #ec6149;
    color: #fff
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 240px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgb(0,0,0,.2)
`
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  color: #969696;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const SearchInfoSwitch = styled.div`
 .iconfont {
  position: relative;
  line-height：inherit;
  right: 0;
  font-size: 12px;
  bottom: 0
 }
 .spin {
   display: inline-block;
   transition: all .3s ease-in;
   transform-origin: center center;
 }
`

export const SearchInfoList = styled.div`
  font-size: 12px
`
export const SearchInfoItem = styled.a`
  display: inline-block;
  line-height: 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 5px;
  font-size: 12px;
  border: 1px solid #ddd;
  color: #787878;
  border-radius: 3px;
`
