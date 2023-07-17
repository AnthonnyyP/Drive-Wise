import Client from './api'

export const GetMaintenance = async () => {
  try {
    const res = await Client.get('/maintenance')
    return res.data
  } catch (error) {
    throw error
  }
}
