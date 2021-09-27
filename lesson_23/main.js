const promise = new Promise(function(resolve, reject){
  setTimeout(() => {
    const backEndData = {
      server: 'aws',
      port: 2000,
      status: 'working'
    }
    console.log('Preparing data...', backEndData)
    resolve(backEndData)
  }, 3000)
})

promise.then(clientData => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Send data...', clientData)
      resolve(clientData)
    }, 3000)
  })
}).then(modifiedData => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      modifiedData.status = 'Error'
      console.log('Modified data...', modifiedData)
      resolve(modifiedData)
    }, 3000)
  })
}).then(sendData => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Send modified data to server...')
      reject(sendData)
    }, 3000)
  })
}).catch(err => {
  console.log('Error! ', err)
}).finally(() => {
  console.log('Work is finished!')
})