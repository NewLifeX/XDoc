  /**
   * Shuffles array in place.
   * @param {Array} a items The array containing the items.
   */
  function shuffle(a) {
      a = a.concat([])
      if (window.location.hostname === 'localhost') {
          return a
      }
      var j, x, i
      for (i = a.length; i; i--) {
          j = Math.floor(Math.random() * i)
          x = a[i - 1]
          a[i - 1] = a[j]
          a[j] = x
      }
      return a
  }

  export default shuffle