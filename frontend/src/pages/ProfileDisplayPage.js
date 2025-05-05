import React, { useEffect, useState } from "react";
import "../css/Profile.css";

const ProfileDisplayPage = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/skills");
        const data = await res.json();

        if (Array.isArray(data) && data.length > 0) {
          // Mock additional fields if not provided by the API
          const profile = {
            ...data[0],
            aboutMe: data[0].aboutMe || "I’m a passionate developer with 5 years of experience in web development, looking to share my skills and learn new ones!",
            skillsOffered: data[0].skillsOffered || [
              { name: "Web Development", level: "Expert" },
              { name: "Graphic Design", level: "Beginner" }
            ],
            skillsWanted: data[0].skillsWanted || [
              { name: "Data Science", level: "Beginner" },
              { name: "Digital Marketing", level: "Intermediate" }
            ],
            availability: data[0].availability || "Mon-Fri, 9 AM - 5 PM, Remote",
            swapRequests: data[0].swapRequests || [
              { id: 1, skill: "Web Development", requestedBy: "John Doe", status: "Pending", type: "outgoing" },
              { id: 2, skill: "Graphic Design", offeredBy: "Jane Smith", status: "Accepted", type: "incoming" }
            ]
          };
          setProfileData(profile);
        } else {
          console.log("No profiles found.");
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };

    fetchProfile();
  }, []);

  if (!profileData) {
    return React.createElement(
      "div",
      { className: "dashboard-container" },
      React.createElement("p", null, "Loading profile...")
    );
  }

  return React.createElement(
    "div",
    { className: "dashboard-container" },
    // Top Navigation Bar
    React.createElement(
      "header",
      { className: "top-nav" },
      React.createElement("div", { className: "logo" }, "Skill Swap"),
      React.createElement("div", { className: "profile-icon" }, "👤")
    ),

    React.createElement(
      "div",
      { className: "dashboard-layout" },
      // Sidebar Menu
      React.createElement(
        "aside",
        { className: "sidebar-menu" },
        React.createElement(
          "ul",
          null,
          React.createElement("li", null, "Home"),
          React.createElement("li", null, "My Profile"),
          React.createElement("li", null, "Explore Skills"),
          React.createElement("li", null, "My Skill Requests"),
          React.createElement("li", null, "Messages"),
          React.createElement("li", null, "Settings"),
          React.createElement("li", null, "Log Out")
        )
      ),

      // Main Content Area
      React.createElement(
        "main",
        { className: "main-content" },
        // Profile Header
        React.createElement(
          "section",
          { className: "profile-header" },
          React.createElement("img", {
            src: "https://via.placeholder.com/150",
            alt: "Profile Avatar",
            className: "profile-avatar"
          }),
          React.createElement(
            "div",
            { className: "about-me" },
            React.createElement("h2", null, "About Me"),
            React.createElement("p", null, profileData.aboutMe)
          ),
          React.createElement(
            "div",
            { className: "profile-header-info" },
            React.createElement("h1", null, profileData.fullName),
            React.createElement("p", { className: "profile-tagline" }, "Full-Stack Developer | Skill Enthusiast")
          )
        ),


        // Skills Offered
        React.createElement(
          "section",
          { className: "skills-offered" },
          React.createElement("h2", null, "Skills Offered"),
          React.createElement(
            "ul",
            null,
            profileData.skillsOffered.map(skill =>
              React.createElement(
                "li",
                { key: skill.name },
                skill.name + " (" + skill.level + ")"
              )
            )
          )
        ),

        // Skills Wanted
        React.createElement(
          "section",
          { className: "skills-wanted" },
          React.createElement("h2", null, "Skills Wanted"),
          React.createElement(
            "ul",
            null,
            profileData.skillsWanted.map(skill =>
              React.createElement(
                "li",
                { key: skill.name },
                skill.name + " (" + skill.level + ")"
              )
            )
          )
        ),

        // Availability and Location
        React.createElement(
          "section",
          { className: "availability-location" },
          React.createElement(
            "div",
            { className: "availability" },
            React.createElement("h2", null, "Availability"),
            React.createElement("p", null, profileData.availability)
          ),
          React.createElement(
            "div",
            { className: "location" },
            React.createElement("h2", null, "Location"),
            React.createElement("p", null, profileData.location || "Remote")
          )
        ),

        // Swap Requests
        React.createElement(
          "section",
          { className: "swap-requests" },
          React.createElement("h2", null, "Swap Requests"),
          React.createElement(
            "div",
            { className: "requests-container" },
            React.createElement(
              "div",
              { className: "requests-outgoing" },
              React.createElement("h3", null, "Outgoing Requests"),
              profileData.swapRequests
                .filter(req => req.type === "outgoing")
                .map(req =>
                  React.createElement(
                    "div",
                    { key: req.id, className: "request-card" },
                    React.createElement("p", null, "Skill: " + req.skill),
                    React.createElement("p", null, "Requested By: " + req.requestedBy),
                    React.createElement("p", null, "Status: " + req.status)
                  )
                )
            ),
            React.createElement(
              "div",
              { className: "requests-incoming" },
              React.createElement("h3", null, "Incoming Requests"),
              profileData.swapRequests
                .filter(req => req.type === "incoming")
                .map(req =>
                  React.createElement(
                    "div",
                    { key: req.id, className: "request-card" },
                    React.createElement("p", null, "Skill: " + req.skill),
                    React.createElement("p", null, "Offered By: " + req.offeredBy),
                    React.createElement("p", null, "Status: " + req.status)
                  )
                )
            )
          )
        ),

        // Contact/Chat, Social Links, and Edit Profile Button
        React.createElement(
          "section",
          { className: "contact-section" },
          React.createElement(
            "div",
            { className: "contact-buttons" },
            React.createElement("button", { className: "action-btn" }, "Message"),
            React.createElement(
              "div",
              { className: "social-links" },
              React.createElement(
                "a",
                { href: "https://github.com", target: "_blank", rel: "noopener noreferrer" },
                React.createElement("img", {
                  src: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
                  alt: "GitHub",
                  className: "social-icon"
                })
              ),
              React.createElement(
                "a",
                { href: "https://twitter.com", target: "_blank", rel: "noopener noreferrer" },
                React.createElement("img", {
                  src: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
                  alt: "Twitter",
                  className: "social-icon"
                })
              ),
              React.createElement(
                "a",
                { href: "https://linkedin.com", target: "_blank", rel: "noopener noreferrer" },
                React.createElement("img", {
                  src: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
                  alt: "LinkedIn",
                  className: "social-icon"
                })
              )
            ),
            React.createElement(
              "button",
              { className: "edit-profile-btn" },
              "Edit Profile"
            )
          )
        )
      )
    ),

    // Footer
    React.createElement(
      "footer",
      { className: "footer" },
      React.createElement(
        "ul",
        null,
        React.createElement("li", null, React.createElement("a", { href: "/about" }, "About")),
        React.createElement("li", null, React.createElement("a", { href: "/help" }, "Help")),
        React.createElement("li", null, React.createElement("a", { href: "/terms" }, "Terms & Privacy"))
      ),
      React.createElement("div", { className: "social-media-icons" }, "Facebook | Twitter | LinkedIn")
    )
  );
};

export default ProfileDisplayPage;