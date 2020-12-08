import styled  from 'styled-components'

export const DetailWrapper =  styled.div`
  width: 1000px;
  margin: 0 auto;
  padding:0 32px 32px 32px;
  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: rgb(249,249,249);
  }
  .title {
    font-size: 30px;
    font-weight: 700;
    word-break: break-word;
    margin-bottom: .5em;
  }
  .img{
    max-width: 100%;
    width: auto;
    height: auto;
    vertical-align: middle;
    border: 0;
    margin: 20px 0;
  }
  .tips {
    padding: 20px;
    background-color: #fafafa;
    border-left: 6px solid #e6e6e6;
    word-break: break-word;
    font-size: 16px;
    font-weight: normal;
    line-height: 30px;
    margin: 0 0 20px;
  }
  .detail {
    margin-bottom: 20px;
    word-break: break-word;
    font-weight: 400;
    line-height: 1.8;
  }
`
export const DetailLeft =  styled.div`
  width: 730px;
  padding: 32px 32px 32px 32px;
  margin-right: 20px;
  background: #fff;
`
export const DetailRight =  styled.div`
  width: 260px;
  padding: 22px;
  background: #fff;
  .recommend {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding-left: 12px;
    border-left: 4px solid #ec7259;
    font-size: 18px;
    font-weight: 500;
    height: 20px;
    line-height: 20px;
  }
  .rec-panel {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .count {
    font-size: 12px;
    color: #969696;
  }
`

