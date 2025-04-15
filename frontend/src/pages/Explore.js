// ExploreSkillsPage.js
import React from 'react';
import '../css/Explore.css';

const skills = [
  {
    id: 1,
    name: 'John Doe',
    photo: 'https://via.placeholder.com/100',
    skillOffered: 'Web Design',
    skillWanted: 'Data Analysis',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Sarah Lee',
    photo: 'https://via.placeholder.com/100',
    skillOffered: 'Digital Marketing',
    skillWanted: 'UI/UX Design',
    rating: 5,
  },
];

const ExploreSkillsPage = () => {
  return (
    <div className="explore-container">
      <aside className="filters-sidebar">
        <h2>Filters</h2>
        <label>
          <input type="checkbox" /> Skill Offered
        </label>
        <label>
          <input type="checkbox" /> Skill Wanted
        </label>
        <label>
          <input type="checkbox" /> Online
        </label>
        <label>
          <input type="checkbox" /> In-Person
        </label>
        <label>
          <input type="checkbox" /> High Rating
        </label>
      </aside>

      <main className="explore-main">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search by skill, category, or location..."
          />
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <img src={skill.photo} alt={skill.name} />
              <h3>{skill.name}</h3>
              <p><strong>Offers:</strong> {skill.skillOffered}</p>
              <p><strong>Wants to Learn:</strong> {skill.skillWanted}</p>
              <p className="rating">⭐ {skill.rating}</p>
              <button className="swap-btn">Request Swap</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ExploreSkillsPage;
