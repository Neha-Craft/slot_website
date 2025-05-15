export default function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Tremblant In Canada",
      category: "Travel Trip",
      date: "15th April, 2019",
      image: "/blog-1.jpg?height=300&width=400",
    },
    {
      id: 2,
      title: "Choosing A Static Caravan",
      category: "Camping",
      date: "15th April, 2019",
      image: "/blog-2.jpg?height=300&width=400",
    },
    {
      id: 3,
      title: "Copper Canyon",
      category: "Event",
      date: "21th April, 2019",
     image: "/blog-3.jpg?height=300&width=400",
    },
    {
      id: 4,
      title: "Trip To Iqaluit In Nunavut A Canadian Arctic City",
      category: "Event",
      date: "08th April, 2019",
      image: "/blog-4.jpg?height=300&width=800",
      wide: true,
    },
    {
      id: 5,
      title: "Traveling To Barcelona",
      category: "Travel",
      date: "12th April, 2019",
      image: "/blog-5.jpg?height=300&width=400",
    },
  ]

  return (
    <section className="blog-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <span>Hotel News</span>
              <h2>Our Blog & Event</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogPosts.slice(0, 3).map((post) => (
            <div key={post.id} className="col-lg-4">
              <div
                className="blog-item set-bg"
                style={{
                  backgroundImage: `url('${post.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bi-text">
                  <span className="b-tag">{post.category}</span>
                  <h4>
                    <a href="#">{post.title}</a>
                  </h4>
                  <div className="b-time">
                    <i className="fa fa-clock"></i> {post.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-8">
            <div
              className="blog-item small-size set-bg"
              style={{
                backgroundImage: `url('${blogPosts[3].image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bi-text">
                <span className="b-tag">{blogPosts[3].category}</span>
                <h4>
                  <a href="#">{blogPosts[3].title}</a>
                </h4>
                <div className="b-time">
                  <i className="fa fa-clock"></i> {blogPosts[3].date}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="blog-item small-size set-bg"
              style={{
                backgroundImage: `url('${blogPosts[4].image}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bi-text">
                <span className="b-tag">{blogPosts[4].category}</span>
                <h4>
                  <a href="#">{blogPosts[4].title}</a>
                </h4>
                <div className="b-time">
                  <i className="fa fa-clock"></i> {blogPosts[4].date}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
