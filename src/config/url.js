export const _url = {
    server: "https://localhost:7012/",
    apiAmenity: "Amenities/getList" 
}

const timeOutNumber= 30;

export const timeout = (promise) => {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      reject(new Error("timeout"))
    }, timeOutNumber * 1000)
    promise.then(resolve, reject)
  })
}