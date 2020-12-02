import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: ''
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: ''
    },
    {
      id: 3,
      title: '简书电影',
      imgUrl: ''
    },
    {
      id: 4,
      title: '读书',
      imgUrl: ''
    },
    {
      id: 5,
      title: '摄影',
      imgUrl: ''
    },
    {
      id: 6,
      title: '历史',
      imgUrl: ''
    },
    {
      id: 7,
      title: '科技',
      imgUrl: ''
    },
    {
      id: 8,
      title: '游戏',
      imgUrl: ''
    },
  ],
  articleList:[
    {
      id: 1,
      title: '你的言行，就是你灵魂的模样',
      imgUrl: '',
      desc: '01 一个人的言行，正是赋予生活的样子，请记住：没有人有义务通过连自己都不在意的言行，去发现优秀的内在。 宋朝曾发生过一件特别有意思的事。 话说...'
    },
    {
      id: 1,
      title: '你的言行，就是你灵魂的模样',
      imgUrl: '',
      desc: '01 一个人的言行，正是赋予生活的样子，请记住：没有人有义务通过连自己都不在意的言行，去发现优秀的内在。 宋朝曾发生过一件特别有意思的事。 话说...'
    },
    {
      id: 1,
      title: '你的言行，就是你灵魂的模样',
      imgUrl: '',
      desc: '01 一个人的言行，正是赋予生活的样子，请记住：没有人有义务通过连自己都不在意的言行，去发现优秀的内在。 宋朝曾发生过一件特别有意思的事。 话说...'
    },

  ],
  recommendList: [
    {
      id: 1,
      title: '',
      imgUrl: './assets/change.png',
    },
    {
      id: 2,
      title: '',
      imgUrl: './assets/keep.png',
    },
    {
      id: 3,
      title: '',
      imgUrl: './assets/power.png',
    },
    {
      id: 4,
      title: '',
      imgUrl: './assets/vip.png',
    },
  ]
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=defaultState, action) => {
  switch(action.type){    
    default:
      return state
  }

}