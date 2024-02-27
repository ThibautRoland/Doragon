

async function scraper () {
    const response = await fetch('https://dragonball.guru/characters/')
    const data = await response.text()
    const dataBody = data.substring(data.indexOf('<div class="character-pic">'))

    const allCharacterDivs = dataBody.split('<div class="character-pic">').slice(1)

    const allImages = []

    allCharacterDivs.map((div) => {
      const startingIndexImg = div.search(/src=/) + 5
      const endingIndexImg = div.search(/class=/) - 2
      const src = div.substring(startingIndexImg, endingIndexImg)

      const startingIndexName = div.search(/<h2>/) + 4
      const endingIndexName = div.search(/<\/h2>/)
      const name = div.substring(startingIndexName, endingIndexName)
      console.log(name)
      allImages.push({
        img: src,
        name: name
      })
    })
    return allImages
}

module.exports = {
    scraper
}
