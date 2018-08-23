<template>
  <transition name="slide">
    <music-list
      :songs="discSongs"
      :bgImage="bgImage"
      :title="title"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
import MusicList from 'components/music-list/music-list'
import {getDisc} from 'api/recommend'
import {ERR_OK} from 'api/config'
import {mapGetters} from 'vuex'
import {createSong} from 'common/js/song'

export default {
  components: {
    MusicList
  },
  data() {
    return {
      discSongs: [],
      songsLength: 0
    }
  },
  computed: {
    bgImage () {
      return this.disc.imgurl
    },
    title () {
      return this.disc.dissname
    },
    ...mapGetters([
      'disc'
    ])
  },
  created() {
    this._getDisc()
  },
  methods: {
    _getDisc() {
      if (!this.disc.dissid) {
        this.$router.push('/recommend')
        return
      }
      getDisc(this.disc.dissid).then((res) => {
        if (res.code === ERR_OK) {
          this.discSongs = this._normalizeSongs(res.cdlist[0].songlist)
        }
      }).catch((e) => {
        console.log(e)
      })
    },
    _normalizeSongs(list) {
      let ret = []
      list.forEach((musicData) => {
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
