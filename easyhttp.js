/**
 * Easy HTTP Library 
 * Library for making HTTP requests
 * 
 * @version 2.0.1
 * @author nixdie
 * @license MIT
 * 
 **/

class EasyHTTP {
  // Make an HTTP GET Request  
  get(url){
    return new Promise((resolve, reject) => {
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP POST Request
  post(url){
    return new Promise((resolve, reject) => {
      fetch(url,{
        method: 'POST',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }
  // Make an HTTP Put Request
  put(url){
    return new Promise((resolve, reject) => {
      fetch(url,{
        method: 'PUT',
        headers:{
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  // Make an HTTP DELETE Request
  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url,{
        method: 'DELETE',
        headers:{
          'Content-type': 'application/json'
        },
      })
      .then(res => res.json())
      .then(() => resolve('Resourse Deleted...'))
      .catch(err => reject(err));
    });
  }
}




