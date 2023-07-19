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

export const UpdateReview = async (reviewId, data) => {
  try {
    const res = await Client.put(`/reviews/${reviewId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteReview = async (reviewId, listingId) => {
  try {
    const res = await Client.delete(`/reviews/${reviewId}/${listingId}`)
    return res.data
  } catch (error) {
    throw error
  }
}