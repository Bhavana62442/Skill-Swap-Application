import React, { useState } from 'react';
import "../css/Explore.css";

// Sample Data for Skills (to simulate skills available on the platform)
const sampleSkills = [
  { id: 1, skill: 'Web Development', user: 'John Doe', location: 'New York', rating: 5, category: 'Programming', level: 'Intermediate', description: 'Building websites and web applications.' },
  { id: 2, skill: 'Photoshop', user: 'Jane Smith', location: 'California', rating: 4, category: 'Design', level: 'Advanced', description: 'Creating graphic designs and photo manipulation.' },
  { id: 3, skill: 'Digital Marketing', user: 'Alice Brown', location: 'London', rating: 4, category: 'Marketing', level: 'Beginner', description: 'Marketing through digital channels.' },
  { id: 4, skill: 'Data Analysis', user: 'Mark Johnson', location: 'Remote', rating: 5, category: 'Data Science', level: 'Advanced', description: 'Analyzing and interpreting complex data.' },
];

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [skills, setSkills] = useState(sampleSkills);
  const [showMore, setShowMore] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryFilter = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleLocationFilter = (e) => {
    setSelectedLocation(e.target.value);
  };

  const handleRatingFilter = (e) => {
    setSelectedRating(e.target.value);
  };

  const handleLevelFilter = (e) => {
    setSelectedLevel(e.target.value);
  };

  const handleSendRequest = (skill) => {
    alert(`Request sent for skill: ${skill.skill} by ${skill.user}`);
  };

  const filterSkills = () => {
    return skills.filter(skill => 
      skill.skill.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory ? skill.category === selectedCategory : true) &&
      (selectedLocation ? skill.location === selectedLocation : true) &&
      (selectedRating ? skill.rating >= selectedRating : true) &&
      (selectedLevel ? skill.level === selectedLevel : true)
    );
  };

  const loadMoreSkills = () => {
    setShowMore(!showMore);
  };

  const displayedSkills = showMore ? filterSkills() : filterSkills().slice(0, 3);

  return (
    <div className="explore-skills-page">
      <h1>Explore Skills</h1>
      
      {/* Search and Filter Section */}
      <div className="search-filter-section">
        <input
          type="text"
          placeholder="Search skills..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <div className="filters">
          <select onChange={handleCategoryFilter}>
            <option value="">Select Category</option>
            <option value="Programming">Programming</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Data Science">Data Science</option>
          </select>

          <select onChange={handleLocationFilter}>
            <option value="">Select Location</option>
            <option value="New York">New York</option>
            <option value="California">California</option>
            <option value="London">London</option>
            <option value="Remote">Remote</option>
          </select>

          <select onChange={handleRatingFilter}>
            <option value="">Select Rating</option>
            <option value="4">4 stars and above</option>
            <option value="5">5 stars only</option>
          </select>

          <select onChange={handleLevelFilter}>
            <option value="">Select Skill Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      {/* Skills List Section */}
      <div className="skills-list-section">
        {displayedSkills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <h3>{skill.skill}</h3>
            <p><strong>User:</strong> {skill.user}</p>
            <p><strong>Location:</strong> {skill.location}</p>
            <p><strong>Rating:</strong> {'⭐'.repeat(skill.rating)}</p>
            <p><strong>Category:</strong> {skill.category}</p>
            <p><strong>Level:</strong> {skill.level}</p>
            <p><strong>Description:</strong> {skill.description}</p>
            <button onClick={() => handleSendRequest(skill)}>Send Skill Request</button>
          </div>
        ))}
      </div>

      {/* Pagination / Load More */}
      <div className="pagination">
        <button onClick={loadMoreSkills}>
          {showMore ? 'Show Less' : 'Load More'}
        </button>
      </div>
    </div>
  );
};

export default Explore;
