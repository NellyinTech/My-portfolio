// Fetching the JSON data for projects
fetch("package.json")
  .then((response) => response.json()) // Convert the response into a JSON object
  .then((data) => {
    console.log("Fetched data:", data);

    // Target the container where the projects will be displayed
    let projectsContainer = document.querySelector("#projects-list");

    // Clear existing content in the container before appending new data
    projectsContainer.innerHTML = "";

    // Loop through each project and create HTML content for each
    data.projects.forEach((project) => {
      // Create a new div element for each project
      let projectItem = document.createElement("div");
      projectItem.classList.add("project-card");

      // Set the inner HTML of the created div with project details
      projectItem.innerHTML = `
        <img src="${project.image}" alt="${project.name}" class="project-image">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" class="btn">View Project</a>
      `;

      // Append the newly created project card to the projects container
      projectsContainer.appendChild(projectItem);
    });
  })
  .catch((error) => {
    console.error("Error loading JSON:", error); // Error handling in case the fetch fails
  });
