import {commonParams} from './config'
import axios from 'axios'

export function getLyric(mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    pcachetime: +new Date(),
    playform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    g_tk: 67232076,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getMusic(mid) {
  const url = '/api/getMusic'

  const data = Object.assign({}, commonParams, {
    // songmid: mid,
    // pcachetime: +new Date(),
    playform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    format: 'json',
    cid: 205361747,
    uin: 0,
    songmid: mid,
    filename: `C400${mid}.m4a`,
    guid: 3598100672
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
