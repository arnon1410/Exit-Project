export const getData = async function(url, axios) {
    let response = await axios.get(url)
    return {
      data: response.data.data,
      included: response.data.included
    }
  }
  
  export const postData = async function(url, axios) {
    let response = await axios.post(url)
    return {
      data: response.data.data,
      included: response.data.included
    }
  }
  
  export const editMutation = function(storeData, item) {
    // This works, but doesn't seem the optimal way.
    // Putting it into a utility so I can fix them all at once when I discover a better way
    let storeItem = storeData.find(i => i.id == item.id)
    let index = storeData.indexOf(storeItem)
    storeData.splice(index, 1, item)
  }