import Client from './api'

export const GetListings = async () => {
  try {
    const res = await Client.get('/listings')
    return res.data
  } catch (error) {
    throw error
  }
}
