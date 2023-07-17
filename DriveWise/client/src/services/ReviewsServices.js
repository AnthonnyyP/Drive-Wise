import Client from './api'

export const MakeReview = async (data) => {
  try {
    const res = await Client.post('/listings/:id/reviews', data)
    return res.data
  } catch (error) {
    throw error
  }
}

