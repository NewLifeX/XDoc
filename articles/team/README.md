# 认识团队

[新生命团队简史](./brief-history-of-team.html)

<div id="team-members">
  <div class="team">
    <h2 id="the-core-team">
      核心团队
    </h2>
    <p v-if="errorGettingLocation" class="tip">
      未成功获取您的位置。
    </p>
    <p>
      这里展示其中部分团队成员的信息。
    </p>
    <p v-if="userPosition" class="success">
      核心团队成员已经按照跟你的距离排序。
    </p>
    <vuer-profile
      v-for="profile in sortedTeam"
      :key="profile.github"
      :profile="profile"
      :title-visible="titleVisible"
    ></vuer-profile>
  </div>
  <div class="team">
    <h2 id="community-partners">
      社区伙伴
    </h2>
    <p v-if="errorGettingLocation" class="tip">
      未成功获取您的位置。
    </p>
    <p>
      社区成员让这里变得更加丰富多彩，有必要在此特别提及。
    </p>
    <p v-if="userPosition" class="success">
      社区伙伴们已经按照跟你的距离排序。
    </p>
    <vuer-profile
      v-for="profile in sortedPartners"
      :key="profile.github"
      :profile="profile"
      :title-visible="titleVisible"
    ></vuer-profile>
  </div>
</div>

<script>
import '../.vuepress/public/styles/team.css'
import cityCoordsFor from '../.vuepress/public/data/cityCoordsFor.js'
import teamData from '../.vuepress/public/data/team.js'
import shuffle from '../.vuepress/public/methods/shuffle.js'

let team =  teamData.team
let partners =  teamData.partners

  export default {
    data () {
        return {
            team: team,
            partners: shuffle(partners),
            geolocationSupported: false,
            isSorting: false,
            errorGettingLocation: false,
            userPosition: null,
            useMiles: false,
            konami: {
              position: 0,
              code: [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
            }
      }
    },
    computed: {
      sortedTeam: function () {
        return this.sortVuersByDistance(this.team)
      },
      sortedPartners: function () {
        return this.sortVuersByDistance(this.partners)
      },
      titleVisible: function () {
        return this.konami.code.length === this.konami.position
      }
    },
    created: function () {
      var nav = window.navigator
      if ('geolocation' in nav) {
        this.geolocationSupported = true
        var imperialLanguageCodes = [
          'en-US', 'en-MY', 'en-MM', 'en-BU', 'en-LR', 'my', 'bu'
        ]
        if (imperialLanguageCodes.indexOf(nav.language) !== -1) {
          this.useMiles = true
        }
      }
      document.addEventListener('keydown', this.konamiKeydown)
    },
    beforeDestroy: function () {
      document.removeEventListener('keydown', this.konamiKeydown)
    },
    methods: {
      sortVuersByDistance: function (vuers) {
        var vm = this
        if (!vm.userPosition) return vuers
        var vuersWithDistances = vuers.map(function (vuer) {
          var cityCoords = cityCoordsFor[vuer.city]
          return Object.assign({}, vuer, {
            distanceInKm: getDistanceFromLatLonInKm(
              vm.userPosition.coords.latitude,
              vm.userPosition.coords.longitude,
              cityCoords[0],
              cityCoords[1]
            )
          })
        })
        vuersWithDistances.sort(function (a, b) {
          return (
            a.distanceInKm -
            b.distanceInKm
          )
        })
        return vuersWithDistances
      },
      konamiKeydown: function (event) {
        if (this.titleVisible) {
          return
        }

        if (event.keyCode !== this.konami.code[this.konami.position++]) {
          this.konami.position = 0
        }
      }
    }
  }



  /**
  * Calculates great-circle distances between the two points – that is, the shortest distance over the earth’s surface – using the Haversine formula.
  * @param {Number} lat1 The latitude of the 1st location.
  * @param {Number} lon1 The longitute of the 1st location.
  * @param {Number} lat2 The latitude of the 2nd location.
  * @param {Number} lon2 The longitute of the 2nd location.
  */
  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371 // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1)  // deg2rad below
    var dLon = deg2rad(lon2-lon1)
    var a =
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon/2) * Math.sin(dLon/2)
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    var d = R * c // Distance in km
    return d
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  function kmToMi (km) {
    return km * 0.62137
  }

  function roundDistance (num) {
    return Number(Math.ceil(num).toPrecision(2))
  }
</script>
