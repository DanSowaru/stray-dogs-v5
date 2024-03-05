/* eslint-disable no-unused-vars */
export class Dog {
  dogName = 'Unknown name'

  dogId = '0'

  dogPortrait = 'unknown'

  dogPersonality = {
    good: 0,
    evil: 0,
    smart: 0,
    dumb: 0
  }

  dogSkills = {
    piloting: 0,
    pistols: 0,
    rifles: 0,
    strategy: 0,
    charisma: 0,
    leadership: 0
  }

  dogMessages = []
  dogLastMessage = ''
  dogUnreadMessages = 0

  constructor (dogName, dogPortrait, dogPersonalityGood, dogPersonalityEvil, dogPersonalitySmart, dogPersonalityDumb, dogSkillPiloting, dogSkillPistols, dogSkillRifles, dogSkillStrategy, dogSkillCharisma, dogSkillLeadership) {
    this.dogName = dogName
    this.dogPortrait = dogPortrait
    this.dogPersonalityGood = dogPersonalityGood
    this.dogPersonalityEvil = dogPersonalityEvil
    this.dogPersonalitySmart = dogPersonalitySmart
    this.dogPersonalityDumb = dogPersonalityDumb
    this.dogSkillPiloting = dogSkillPiloting
    this.dogSkillPistols = dogSkillPistols
    this.dogSkillRifles = dogSkillRifles
    this.dogSkillStrategy = dogSkillStrategy
    this.dogSkillCharisma = dogSkillCharisma
    this.dogSkillLeadership = dogSkillLeadership
  }

  newMessage (message) {
    const currentTime = new Date()
    const dogName = this.dogName
    this.dogMessages.push({ dogName, message, currentTime })
    this.dogLastMessage = message
    this.dogUnreadMessages++
  }

  newPlayerReply (message) {
    const currentTime = new Date()
    const player = 'player'
    this.dogMessages.push({ player, message, currentTime })
    this.dogLastMessage = message
    // TODO: Use the first parameter of the dogMessages objects to determine styling and identification of individual chat replies
  }

  // TODO: Implement Unread Messages counter that resets after Chatblock clicking
}
