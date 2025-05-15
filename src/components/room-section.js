export default function RoomSection() {
  const rooms = [
    {
      id: 1,
      name: "Double Room",
      price: 199,
      image: "/room.jpg?height=600&width=300",
      size: "30 ft",
      capacity: "Max person 5",
      bed: "King Beds",
      services: "Wifi, Television, Bathroom,...",
    },
    {
      id: 2,
      name: "Premium King Room",
      price: 159,
      image: "/roomb2.jpg?height=600&width=300",
      size: "30 ft",
      capacity: "Max person 5",
      bed: "King Beds",
      services: "Wifi, Television, Bathroom,...",
    },
    {
      id: 3,
      name: "Deluxe Room",
      price: 198,
      image: "/roomb3.jpg?height=600&width=300",
      size: "30 ft",
      capacity: "Max person 5",
      bed: "King Beds",
      services: "Wifi, Television, Bathroom,...",
    },
    {
      id: 4,
      name: "Family Room",
      price: 299,
       image: "/roomb4.jpg?height=600&width=300",
      size: "30 ft",
      capacity: "Max person 5",
      bed: "King Beds",
      services: "Wifi, Television, Bathroom,...",
    },
  ]

  return (
    <section className="hp-room-section">
      <div className="container-fluid">
        <div className="hp-room-items">
          <div className="row">
            {rooms.map((room) => (
              <div key={room.id} className="col-lg-3 col-md-6">
                <div
                  className="hp-room-item set-bg"
                  style={{
                    backgroundImage: `url('${room.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="hr-text">
                    <h3>{room.name}</h3>
                    <h2>
                      ${room.price}
                      <span>/Pernight</span>
                    </h2>
                    <table>
                      <tbody>
                        <tr>
                          <td className="r-o">Size:</td>
                          <td>{room.size}</td>
                        </tr>
                        <tr>
                          <td className="r-o">Capacity:</td>
                          <td>{room.capacity}</td>
                        </tr>
                        <tr>
                          <td className="r-o">Bed:</td>
                          <td>{room.bed}</td>
                        </tr>
                        <tr>
                          <td className="r-o">Services:</td>
                          <td>{room.services}</td>
                        </tr>
                      </tbody>
                    </table>
                    <a href="#" className="primary-btn">
                      More Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
