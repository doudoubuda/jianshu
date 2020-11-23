import styled  from 'styled-components'
import logePic from '../../static/logo.jpg'

export const HeaderWrapper =  styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0
`

export const Logo =  styled.a`
  position: absolute;
  top: 0;
  left: 0;
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
  .iconfont {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 15px;
    background: green
  }
`

export const NavSearch = styled.input.attrs ({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  padding: 0 20px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  font-size: 14px;
  background: #eee;
  &::placeholder {
    color: #999
  }
`


export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
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
