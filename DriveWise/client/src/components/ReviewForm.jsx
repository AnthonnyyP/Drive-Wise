const ReviewForm = () => {
  return(
    <div>
      <form id="add-review-form" method="POST" action="/reviews">
        <label>Rating:</label>
            <select name="rating">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5" selected>5</option>
            </select>
        <label>Comment:</label>
          <textarea name="comment"></textarea>
      </form>
      <br/>
      <button>
        Submit
      </button>
    </div>
  )
}

export default ReviewForm