

export default function myPlugin (socket) {
  return store => {
    store.subscribe((mutation,state) => {
      console.log(mutation,state)
      console.log('うみょーん')
    })
  }
}