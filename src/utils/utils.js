  // Download Json Data
  downloadJson () {
    const data = JSON.stringify(this.chatlog, null, 2)
    const fileName = 'data.json'
    const file = new Blob([data], { type: 'application/json' })

    // Create a temporary download link
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', fileName)
    document.body.appendChild(link)

    // Trigger the download
    link.click()

    // Clean up
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  // Upload Json Data
  handleFileUpload (event) {
    const file = event.target.files[0]
    if (!file) {
      return
    }
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const jsonData = JSON.parse(e.target.result)
        // Now you can use jsonData in your component
        this.processJsonData(jsonData)
      } catch (error) {
        console.error('Error parsing JSON', error)
      }
    }
    reader.readAsText(file)
  }
  processJsonData (data) {
    this.currentJsonObject = data //change to the Json to be updated
    console.log(data)
  }
