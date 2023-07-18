import Client from './api'

export const MakeReview = async (id, data) => {
  try {
    const res = await Client.post(`/reviews/listings/${id}/reviews`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetReview = async (id, data) => {
  try {
    const res = await Client.post(`/reviews/listings/${id}/reviews`, data)
    return res.data
  } catch (error) {
    throw error
  }
}