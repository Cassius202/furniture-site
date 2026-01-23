import ReviewSlider from "../minor-components/ReviewSlider"

const Reviews = () => {
  return (
    <section id='reviews' className="section">
      <h1 className='title'>What Our{" "}<span className="highlight">Clients Say</span></h1>
      <p className="subtitle">Don't just take our word for it. Here's what our satisfied customers have to say about their experience with our furniture and interior design services.</p>
        <ReviewSlider />
    </section>
  )
}

export default Reviews