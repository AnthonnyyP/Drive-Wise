import Client from './api'

export const GetListing= async () => {
  try {
    const res = await Client.get('/listings/:id')
    return res.data
  } catch (error) {
    throw error
  }
}
