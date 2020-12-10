import styled  from 'styled-components'

export const LoginWrapper =  styled.div`
  box-sizing: border-box;
  width: 400px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 50px 50px 30px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  align-items: center;
  margin-top: 100px;
  .login-content {
    width: 100%;
  }
  .title {
    font-weight: 700;
    color: #ea6f5a;
    padding-bottom: 30px;
    text-align: center;
  }
  .title-panel {
    border-bottom: 2px solid #ea6f5a;
  }
  .title-padding {
    padding: 10px;
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .content {
    width: 100%;
  }
  .content input {
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 12px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
  }
  .login button {
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #187cb7;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
  }
  .login button:hover {
    background: #3194d0;
  }
`

