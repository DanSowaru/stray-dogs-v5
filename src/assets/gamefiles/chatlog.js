/* eslint-disable prefer-const */
/* eslint-disable no-tabs */

let chatlog = [
  {
    id: 1,
    name: 'Magpie Latte',
    portraitUrl: 'fembir18.png',
    lastMessage:
    'Hey boss, I got news on that case. If we run now we may be able to capture the dogs!'
  },
  {
    id: 2,
    name: 'Mona Macax',
    portraitUrl: 'femmon19.png',
    lastMessage:
    "Sir, I've encountered a few problems in our mission and I would like you to inform me about what path should I choose next, If you don't mind! Besides, you have to decide soon about that matter with the robots and the credits we are about to receive"
  }
]

export function updateChatlog (dogName, portraitUrl, lastMessage) {
  if (!isExistingDog(dogName)) {
    let newId = generateNewId()
    chatlog.push({ id: newId, name: dogName, portraitUrl: portraitUrl, lastMessage: lastMessage })
  } else {
    alert('dog already exists')
    // TODO: update existing chatlog
  }
}

function isExistingDog (dogName) {
  let newDogResult = chatlog.some(chatbox => chatbox.name === dogName)
  console.log('isExistingDog? :: ' + newDogResult)
  return newDogResult
}

function generateNewId () {
  let highestId = 0
  for (let chatbox of chatlog) {
    if (highestId < chatbox.id) highestId = chatbox.id
  }
  highestId++
  return highestId
}

export { chatlog }
