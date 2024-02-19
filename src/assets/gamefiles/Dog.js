/* eslint-disable no-unused-vars */
class Dog {
  dogName = 'Unknown name'

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
  unreadMessages = 0

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
    this.dogMessages.push(message)
    this.dogLastMessage = message
    this.unreadMessages++
  }

  // TODO: Implement Unread Messages counter that resets after Chatblock clicking
}

export var jackRabbit = new Dog(
  'Jack Rabbit',
  'femrab2',
  86,
  10,
  76,
  8,
  90,
  18,
  4,
  48,
  60,
  21
)

jackRabbit.newMessage('This is a method generated message!')
