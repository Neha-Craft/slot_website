"use client"

import { useState } from "react"

export default function SearchModel() {
  const [isVisible, setIsVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleSearch = () => {
    setIsVisible(!isVisible)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Handle search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <div className={`search-model ${isVisible ? "d-block" : "d-none"}`}>
      <div className="h-100 d-flex align-items-center justify-content-center">
        <div className="search-close-switch" onClick={toggleSearch}>
          <i className="fa fa-times"></i>
        </div>
        <form className="search-model-form" onSubmit={handleSearch}>
          <input
            type="text"
            id="search-input"
            placeholder="Search here....."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </div>
    </div>
  )
}
