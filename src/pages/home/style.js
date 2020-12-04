import styled  from 'styled-components'

export const HomeWrapper =  styled.div`
  width: 960px;
  margin: 0 auto;
`
export const HomeLeft =  styled.div`
  width: 625px;
  float: left;
  margin-left: 15px;
  padding-top: 20px;
`
export const HomeRight =  styled.div`
  width: 250px;
  float: right;
`

export const TopicWrapper =  styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const TopicItem =  styled.div`
  border: 1px solid #dcdcdc;
  display: flex;
  align-items: center;
  background: #d7d7d7;
  color: #000;
  border-radius: 4px;
  margin-right: 10px;
  margin-bottom: 15px;
  .topicImg {
    width: 32px;
    height: 32px;
    margin-right: 10px
  }
  .topicContent {
    padding: 5px 10px 5px 0;
    font-size: 14px;
  }
`
export const ListWrapper =  styled.div`

`
export const ListItem =  styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  margin-bottom: 15px;
  .ListImg {
    width: 150px;
    height: 100px;
  }
  .article {
    width: calc(100% - 160px);
  }
  .arcticle-content {
    line-height: 24px;
    font-size: 13px;
    color: #999;
    margin: 0 0 8px;
  }
  .title {
    -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    line-height: 27px;
    margin: -7px 0 4px;
    font-size: 16px;
    font-weight: bold;
  }
  .tips {
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
  }
`

export const RecommendWrapper =  styled.div`
  width: 100%;
  margin-top: 20px;
`
export const RecommendItem =  styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 15px;
  .recommendImg {
    width: 100%;
    height: 100%
  }
`
export const WriterWrapper =  styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 85px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  .writerImg {
    height: 60px;
    width: 60px;
  }
  .info {
    padding-left: 10px;
  }
  .title {
    font-size: 15px;
    color: #333;
  }
  .content {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`

export const LoadMore =  styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer
`

export const BackTop =  styled.div`
  position: fixed;
  right: 100px;
  bottom: 50px;
  border: 1px solid #dcdcdc;
  background-color: #fff;
  font-size: 12px;
  color: #333;
  transition: .1s ease-in;
`
