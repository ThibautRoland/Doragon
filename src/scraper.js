

async function scraper () {
    const response = await fetch('https://dragonball.guru/characters/')
    const data = await response.text()
    const dataBody = data.substring(data.indexOf('<div class="character-pic">'))

    const allCharacterDivs = dataBody.split('<div class="character-pic">').slice(1)

    const allImages = []

    allCharacterDivs.map(async (div) => {
      const startingIndexImg = div.search(/src=/) + 5
      const endingIndexImg = div.search(/class=/) - 2
      const src = div.substring(startingIndexImg, endingIndexImg)

      const startingIndexName = div.search(/<h2>/) + 4
      const endingIndexName = div.search(/<\/h2>/)
      const name = div.substring(startingIndexName, endingIndexName)
      const race = await characterDetailsScraper(name[0].toLowerCase() + name.substring(1))
      
      allImages.push({
        img: src,
        name: name,
        race: race
      })
    })
    return allImages
}

async function characterDetailsScraper (name) {
  const response = await fetch(`https://dragonball.guru/${name}`)
  const wholePage = await response.text()
  const fightRecordTable = wholePage.substring(wholePage.indexOf('<div class="fight-record-table">'))
  const allDivs = fightRecordTable.split('<tr')
  const startingIndex = allDivs[9].indexOf('<td>') + 4
  const endingIndex = allDivs[9].indexOf('</td>')
  // allDivs[4]
  const race = allDivs[9].substring(startingIndex, endingIndex)
  console.log(race)
  console.log(startingIndex, endingIndex)
  return race
}

module.exports = {
    scraper,
    characterDetailsScraper
}
