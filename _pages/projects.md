---
layout: about
title: Portfolio
permalink: /
horizontal: false
social: true
---

Hi! I'm Eugenia, a Computer Science and Engineering student at the University of Michigan. Here's a collection of projects I've worked on, from game development and 3D art to hackathons and ML research.

---

<div class="projects">
{% assign sorted_projects = site.projects | sort: "importance" %}
{% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
{% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>
