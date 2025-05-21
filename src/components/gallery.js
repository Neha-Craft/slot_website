import Head from "next/head"
import Image from "next/image"

export default function Gallery() {
  const images = [
    "/gallery1.jpg",
    "/gallery2.jpg",
    "/gallery3.jpg",
    "/gallery4.jpg",
    "/gallery5.jpg",
    "/gallery6.avif",
  ]

  return (
    <>
      <Head>
        <title>Restaurant Gallery | Shree RADHA Madhavam Resort</title>
        <meta
          name="description"
          content="Explore our multi-cuisine restaurant through beautiful images."
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        />
      </Head>

      <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold mb-3"> Gallery</h1>
          <p className="text-muted">
            A glimpse into the ambiance, flavors, and hospitality we offer.
          </p>
        </div>

        <div className="row g-4">
          {images.map((src, index) => (
            <div key={index} className="col-sm-6 col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="ratio ratio-4x3">
                  <Image
                    src={src}
                    alt={`Restaurant Image ${index + 1}`}
                    fill
                    className="rounded object-fit-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 2}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
