import { useState } from "react"

const useFetch = (baseUrl) => {
  const [loading, setLoading] = useState(true)

  const get = (url) => {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false)
            return reject(data)
          }
          setLoading(false)
          resolve(data)
        })
        .catch((error) => {
          setLoading(false)
          reject(error)
        })
    })
  }

  const post = (url, body) => {
    return new Promise((resolve, reject) => {
      fetch(baseUrl + url, {
        ...{
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            setLoading(false)
            return reject(data)
          }
          setLoading(false)
          resolve(data)
        })
        .catch((error) => {
          setLoading(false)
          reject(error)
        })
    })
  }

  return { get, post, loading }
}

export default useFetch
