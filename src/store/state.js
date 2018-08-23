import {playMode} from 'common/js/config'

const state = {
  singer: {},
  // 歌手数据
  playing: false,
  // 是否播放
  fullScreen: false,
  // 播放器显示状态
  playlist: [],
  // 播放列表
  sequenceList: [],
  // 顺序列表
  mode: playMode.sequence,
  // 播放模式
  currentIndex: -1,
  // 播放索引
  disc: {},
  // 歌单数据
  topList: {}
  // 排行榜歌曲数据
}

export default state
