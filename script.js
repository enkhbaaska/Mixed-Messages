function generateRandomNumber(num) {
    return Math.floor(Math.random() * num)
}

const collectiveWisdom = {
    spiritanimal: ['parrot', 'tiger', 'dragon', 'eagle'],
    fortune: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go outside', 'talk to people', 'get a job', 'be funny']
}

let personalWisdom = []

for (let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)

    switch(prop) {
        case 'spiritanimal' :
            personalWisdom.push(`Your spirit animal is: "${collectiveWisdom[prop][optionIdx]}".`)
            break
        case 'fortune':
            personalWisdom.push(`You are having: "${collectiveWisdom[prop][optionIdx]}".`)
            break
        case 'advice':
            personalWisdom.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`)
            break
        default:
            personalWisdom.push(`There is not enough info.`)
        }
}

function formatWisdom(wisdom) {
    const formatted = personalWisdom.join('\n')
    console.log(formatted)
}

formatWisdom(personalWisdom);
