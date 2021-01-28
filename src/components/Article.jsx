const defaultPic = 'https://mattdowney.co/wp-content/uploads/2021/01/goals-2021@2x-1024x576.jpg'
const defaultCategory = 'Business'
const defaultSummary = 'I recently published my 2020 Year  in Review, in which I briefly touched on my goals for the coming year.'
const defaultTitle = 'Goals for 2021'


const Article = ({ pic = defaultPic, category = defaultCategory, summary = defaultSummary, title = defaultTitle }) => {
    return (
      <article>
      <img src={pic} alt="Downy Blog pic"/>
      <div className="content">
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="summary">{summary}</p>
      </div>
    </article>
  )
}

export default Article