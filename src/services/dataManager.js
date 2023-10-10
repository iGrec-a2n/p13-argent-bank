// export const serverBaseUrl = 'http://localhost:3001/api/v1'

/**
 * [async description]
 *
 * @param   {Object}  data  [data description]
 *
 * @return  {Promise.<Boolean|Object>} - false or {token: ""}
 */
async function loginSendData(data) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }
  const response = await fetch('http://localhost:3001/api/v1/user/login', requestOptions)
  const dataJson = await response.json()
  if (dataJson.status === 200) {
    return { token: dataJson.body.token }
  } else {
    console.log(dataJson.status);
    return false
  }
}

async function loadUserData(token) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    },
  }
  const response = await fetch('http://localhost:3001/api/v1/user/profile', requestOptions)
  const dataJson = await response.json()
  if (dataJson.status === 200) {
    // console.log(dataJson)
    const user = {
      firstName: dataJson.body.firstName,
      lastName: dataJson.body.lastName,
    }
    return user
  } else {
    console.log('false', dataJson)
  }
}

export { loginSendData, loadUserData }
