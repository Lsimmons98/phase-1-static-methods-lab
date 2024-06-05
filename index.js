class Formatter {
  static capitalize(string){
    const firstLetter = string.charAt(0).toUpperCase()
    const stringMinusFirst = string.slice(1)
    return firstLetter + stringMinusFirst
  }

  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9-'\s]/g, '')
  }

  static titleize(string){
    const smallWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const words = string.toLowerCase().split(' ');

    const titleizedWords = words.map((word, index) => {
      if (index === 0 || !smallWords.includes(word)) {
        return this.capitalize(word);
      } else {
        return word;
      }
    })
    return titleizedWords.join(' ')
  }
}



Formatter.capitalize('yoyo')
