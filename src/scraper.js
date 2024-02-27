

async function scraper () {
    const response = await fetch('https://dragonball.guru/characters/')
    const data = await response.text()
    const dataBody = data.substring(data.indexOf('<div class="character-pic">'))

    const allCharacterDivs = dataBody.split('<div class="character-pic">').slice(1)

    const allImages = []

    allCharacterDivs.map((div) => {
      const startingIndex = div.search(/src=/) + 5
      const endingIndex = div.search(/class=/) - 2
      const src = div.substring(startingIndex, endingIndex)
      allImages.push(src)
    })
    return allImages
}

module.exports = {
    scraper
}
