export const _url = {
    server: "http://192.168.1.113:5000/",
    iconFolder: "user-content/icon/",

    //api
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