import shuffle from '../methods/shuffle.js'
import teamData from './teamData.js';
var team = [{
  name: '大石头',
  title: '我不相信神话，我只相信汗水！我不相信命运，我只相信双手！',
  city: 'ShangHai, China',
  languages: null, //['zh', 'en'],
  github: 'nnhy',
  twitter: null,
  work: {
    role: 'Software Engineer',
    org: 'ZTO',
    orgUrl: 'https://www.zto.com/'
  },
  reposOfficial: [
    'NewLifeX/*'
  ],
  reposPersonal: [
    'BigData'
  ],
  links: [
    'https://nnhy.cnblogs.com'
  ]
}]

team = team.concat(shuffle(teamData))

var partners = [
]

export default {
  team,
  partners
}