/**
 * DEVMINI DULARI - PORTFOLIO INTERACTIVITY & SCRIPTS
 * Handles project filtering, modal views, typewriter effect,
 * canvas background, skills tabs, theme switching, and contact handling.
 */

// Portfolio project dataset
const portfolioProjects = [
  {
    id: "memorydot-erp",
    title: "MemoryDot ERP System",
    category: "client",
    categoryLabel: "Client Project",
    icon: "fa-solid fa-network-wired",
    shortDesc: "A custom ERP system built for MemoryDot to handle inventory tracking, client billing, and cross-departmental operations.",
    fullDesc: "Developed an enterprise resource planning tool for MemoryDot to streamline day-to-day business operations. The application handles procurement tracking, real-time inventory adjustments, client billing, and user permissions connected to a structured MySQL database.",
    techStack: ["Java", "MySQL", "Role-Based Auth", "Reporting Engine", "JDBC"],
    features: [
      "Role-based access permissions (Admin, Manager, Staff)",
      "Automated stock level tracking and invoice generation",
      "Relational MySQL database schema with data consistency",
      "Summary reporting for business and inventory tracking"
    ],
    highlights: "Designed to direct client requirements for dependable day-to-day operations."
  },
  {
    id: "neolife-website",
    title: "Neolife Software Solutions Official Website",
    category: "client",
    categoryLabel: "Client Project",
    icon: "fa-solid fa-globe",
    shortDesc: "The official corporate website for Neolife Software Solutions, showcasing services, portfolio items, and client inquiries.",
    fullDesc: "Designed and developed the company website for Neolife Software Solutions. Built with clean HTML5, CSS3, and JavaScript, focusing on fast page load times, responsive mobile layouts, and an intuitive customer contact flow.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX"],
    features: [
      "Service catalog and interactive portfolio showcase",
      "Client inquiry and contact form with validation",
      "Fully responsive across all screen sizes and mobile viewports",
      "Smooth CSS transitions and modern visual identity"
    ],
    highlights: "Delivered a clean, responsive digital web presence for the company."
  },
  {
    id: "pamasrilanka",
    title: "PamaSriLanka Web Platform",
    category: "client",
    categoryLabel: "Client Project",
    icon: "fa-solid fa-briefcase",
    shortDesc: "Commercial client website developed for PamaSriLanka with product showcases, catalog browsing, and customer inquiries.",
    fullDesc: "Built a commercial web presence for PamaSriLanka to showcase their product catalog online. The platform includes product category filters, high-resolution galleries, and direct contact channels for prospective buyers.",
    techStack: ["HTML5", "CSS3", "JavaScript", "MySQL", "UI Design"],
    features: [
      "Categorized product gallery with image showcases",
      "Direct customer inquiry and contact form",
      "Mobile-friendly navigation and clean typography",
      "Structured product organization and details view"
    ],
    highlights: "Created an intuitive online catalog to handle direct customer inquiries."
  },
  {
    id: "class-predictor",
    title: "Degree Eligibility & Class Predictor System",
    category: "data-pred",
    categoryLabel: "Predictive & Stats",
    icon: "fa-solid fa-graduation-cap",
    shortDesc: "An academic tool calculating GPA projections and predicting degree class eligibility using statistical grading logic.",
    fullDesc: "Combining statistical concepts and web development, this system allows university undergraduates to evaluate their academic standing. It performs credit-weighted GPA calculations, checks course requirements against degree regulations, and projects future grades needed to achieve target degree classifications.",
    techStack: ["JavaScript", "HTML5", "CSS3", "Statistical Logic", "GPA Algorithm"],
    features: [
      "Weighted GPA calculation based on academic course credits",
      "Degree eligibility checks against university academic criteria",
      "Target class simulator calculating required future exam grades",
      "Clear breakdown of academic performance trends"
    ],
    highlights: "Practical application connecting statistical scoring rules with university degree requirements."
  },
  {
    id: "vimanago",
    title: "VimanaGo - Flight Booking Web System",
    category: "web",
    categoryLabel: "Web Application",
    icon: "fa-solid fa-plane-departure",
    shortDesc: "Flight reservation web application featuring route searching, seat selection, booking workflows, and passenger management.",
    fullDesc: "An end-to-end flight booking web application where travelers can search flights by origin, destination, and departure dates, choose seating classes, fill in passenger details, and receive an instant booking confirmation.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Booking Logic", "Local Storage"],
    features: [
      "Interactive departure/arrival search with airport selection",
      "Multi-passenger ticketing and seat class options (Economy & Business)",
      "Dynamic price calculations factoring in baggage and taxes",
      "Flight summary view and digital boarding pass layout"
    ],
    highlights: "Designed with a focus on intuitive multi-step booking workflows."
  },
  {
    id: "beautyshop",
    title: "BeautyShop E-Commerce Web Store",
    category: "web",
    categoryLabel: "Web & E-Commerce",
    icon: "fa-solid fa-bag-shopping",
    shortDesc: "Online cosmetics and skincare store featuring product browsing, shopping cart functionality, and MySQL database integration.",
    fullDesc: "An e-commerce website designed for beauty and skincare retail. Users can filter items by category (skincare, makeup, haircare), add items to a persistent cart, and navigate through a structured checkout flow.",
    techStack: ["HTML5", "CSS3", "JavaScript", "MySQL", "Session Storage"],
    features: [
      "Shopping cart with quantity updates and order total calculation",
      "Product categorization and keyword search filters",
      "Relational database structure for inventory and orders",
      "Clean, responsive product catalog layout"
    ],
    highlights: "Full implementation of core retail workflows from catalog to checkout."
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking Management Desktop Application",
    category: "desktop",
    categoryLabel: "Desktop / Java",
    icon: "fa-solid fa-hotel",
    shortDesc: "Desktop hotel management software engineered in Java and MySQL for reservation scheduling, room availability, and billing.",
    fullDesc: "An enterprise desktop application developed in Java Swing with JDBC connectivity to MySQL. Built for hotel front-desk staff to manage reservations, check-in and check-out workflows, room availability, and invoice generation.",
    techStack: ["Java", "Java Swing", "MySQL", "JDBC", "OOP Architecture"],
    features: [
      "Room allocation overview showing occupied, vacant, and maintenance states",
      "Automated guest billing calculation with itemized service charges",
      "Transactional database operations ensuring booking consistency",
      "Searchable guest registry and receipt generation"
    ],
    highlights: "Built using Object-Oriented design patterns and structured database normalization."
  },
  {
    id: "autoglam",
    title: "AutoGlam Car Wash Management System",
    category: "desktop",
    categoryLabel: "Desktop / Java",
    icon: "fa-solid fa-car-side",
    shortDesc: "Desktop service management solution built with Java and MySQL to organize car wash scheduling, service bays, and billing.",
    fullDesc: "AutoGlam helps car wash service centers track vehicle queue statuses, manage service packages (exterior wash, full interior detailing, waxing), assign service staff, and generate daily revenue summaries.",
    techStack: ["Java", "Java Swing", "MySQL", "JDBC", "Database Design"],
    features: [
      "Vehicle queue tracker showing service progression in real time",
      "Service package selection with customizable add-ons and pricing",
      "Customer and vehicle service records",
      "Daily and monthly billing summaries for business accounting"
    ],
    highlights: "Streamlined operational records into an organized desktop database workflow."
  },
  {
    id: "period-tracker",
    title: "Period & Menstrual Cycle Tracking App",
    category: "mobile-iot",
    categoryLabel: "Health & Stats",
    icon: "fa-solid fa-heart-pulse",
    shortDesc: "Privacy-focused cycle tracking application built in TypeScript, using statistical rolling averages to estimate cycle phases.",
    fullDesc: "A client-side health tracking tool that estimates upcoming cycles, ovulation days, and fertile windows using rolling statistical averages based on historical log entries. All data is stored locally on the user's device for privacy.",
    techStack: ["TypeScript", "Statistical Estimation", "Local Storage", "CSS3", "HTML5"],
    features: [
      "Rolling average calculation for cycle lengths and phase predictions",
      "Visual calendar highlighting predicted cycle days and fertile windows",
      "Symptom and mood logging to observe personal health patterns",
      "100% offline, privacy-first client-side data storage"
    ],
    highlights: "Practical implementation of TypeScript type safety combined with statistical rolling estimation."
  },
  {
    id: "shoe-mart",
    title: "Shoe Mart Web E-Commerce Platform",
    category: "web",
    categoryLabel: "Java Web / E-Commerce",
    icon: "fa-solid fa-shoe-prints",
    shortDesc: "Java-based web store for footwear retail with size and color selection, customer cart management, and MySQL database.",
    fullDesc: "Developed using Java Servlets, JSP, and MySQL following the MVC design pattern. The platform includes product catalogs with size availability, session-based cart management, and administrative screens for product updates.",
    techStack: ["Java Web", "Servlets & JSP", "MySQL", "MVC Pattern", "HTML/CSS"],
    features: [
      "Footwear catalog with size availability and variant filtering",
      "Session-based cart management and customer checkout",
      "Admin section to add, update, and manage inventory items",
      "Relational database schema with referential integrity"
    ],
    highlights: "Applied Java MVC architecture and servlet-based web engineering."
  },
  {
    id: "zeyora-perfume",
    title: "Zeyora Perfume E-Commerce Store",
    category: "web",
    categoryLabel: "Java Web / E-Commerce",
    icon: "fa-solid fa-spray-can-sparkles",
    shortDesc: "Fragrance e-commerce web platform built with Java Web and MySQL, featuring scent-family categorization and clean cart flow.",
    fullDesc: "An online store for perfumes and fragrances built with a Java web backend and MySQL. Products are categorized by scent notes (floral, woody, citrus) to help users browse according to their preferences, backed by session-based shopping cart handling.",
    techStack: ["Java Web", "Servlets & JSP", "MySQL", "HTML5", "Modern CSS"],
    features: [
      "Scent-note categorization and fragrance search filters",
      "Interactive product details view and customer reviews",
      "Cart calculation, shipping estimations, and checkout flow",
      "Structured database tables for perfume inventory and orders"
    ],
    highlights: "Clean visual presentation paired with structured Java Web backend logic."
  },
  {
    id: "floralanka",
    title: "FloraLanka - Android Flower Delivery App",
    category: "mobile-iot",
    categoryLabel: "Android Mobile",
    icon: "fa-solid fa-seedling",
    shortDesc: "Native Android mobile app for browsing floral arrangements, personalizing greetings, and placing flower delivery orders.",
    fullDesc: "Built in Android Studio using Java and XML layouts. The application allows users to browse flower collections, attach custom greeting card messages, select delivery dates, and store orders locally using SQLite.",
    techStack: ["Android Studio", "Java", "Android XML", "SQLite", "Mobile UI"],
    features: [
      "RecyclerView-based product catalogs with search and categories",
      "Order configuration with personalized greeting messages and date picker",
      "Local SQLite storage for offline caching and saved items",
      "Clean Android user interface following Material Design practices"
    ],
    highlights: "Hands-on experience with native Android architecture, activities, and local databases."
  },
  {
    id: "lms-system",
    title: "Learning Management System (LMS)",
    category: "desktop",
    categoryLabel: "Enterprise / Java",
    icon: "fa-solid fa-book-open-reader",
    shortDesc: "Multi-role academic management system built in Java and MySQL for course administration, student enrollment, and grading.",
    fullDesc: "Designed to handle institutional academic workflows. Features separated roles for Administrators, Lecturers, and Students. Supports course registration, grade entry, timetable schedules, and student progress reports.",
    techStack: ["Java", "OOP", "MySQL", "Role-Based Access", "JDBC"],
    features: [
      "Role-based authentication for admins, instructors, and students",
      "Module registration and student grading management",
      "Academic report generation and performance tracking",
      "Normalized relational database structure"
    ],
    highlights: "Structured enterprise Java desktop application managing multi-role workflows."
  },
  {
    id: "event-management",
    title: "Event Management & Ticketing System",
    category: "desktop",
    categoryLabel: "Desktop / C#",
    icon: "fa-solid fa-calendar-check",
    shortDesc: "Desktop event management application built with C# and .NET for scheduling events, managing attendee registrations, and issuing tickets.",
    fullDesc: "Developed in C# using .NET and SQL database connectivity. Planners can manage event schedules, attendee lists, ticket allocations, and review financial summaries of ticket sales.",
    techStack: ["C#", ".NET", "SQL / Database", "Windows Forms", "LINQ"],
    features: [
      "Event schedule planning and venue capacity management",
      "Attendee registration with unique ticket ID generation",
      "Session conflict detection for speakers and halls",
      "Revenue reports and registration statistics"
    ],
    highlights: "Built with C# and .NET Windows Forms with relational database integration."
  },
  {
    id: "wally-robot",
    title: "Wally-Robot: Autonomous Robotic Car",
    category: "mobile-iot",
    categoryLabel: "Robotics & IoT",
    icon: "fa-solid fa-robot",
    shortDesc: "Obstacle-avoiding robotic vehicle built with Arduino C/C++, ultrasonic sensors, servo steering, and motor driver control.",
    fullDesc: "An embedded hardware project using an Arduino microcontroller and an HC-SR04 ultrasonic sensor mounted on a servo motor. The robot continuously scans forward and side angles for obstacles, determines the clearest path, and commands DC motors to steer around obstacles.",
    techStack: ["Arduino C/C++", "Ultrasonic Sensor", "Servo Motor", "Motor Drivers", "Embedded Logic"],
    features: [
      "Real-time obstacle distance measurement using ultrasonic pulses",
      "180-degree sweep scanning for path evaluation",
      "Differential motor control for smooth turning and maneuvering",
      "Standalone battery-powered chassis with onboard voltage regulation"
    ],
    highlights: "Hands-on experience in embedded C++ programming, sensor telemetry, and hardware integration."
  }
];

// =========================================================================
// 2. DOM Initialization & Event Listeners
// =========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initAmbientCanvas();
  initTheme();
  initTypewriter();
  initNavigation();
  initMetrics();
  initSkillsTabs();
  renderProjects(portfolioProjects);
  initProjectControls();
  initProjectModal();
  initResumeModal();
  initContactForm();
  initCopyButtons();
  initScrollProgress();
  initYear();
});

// =========================================================================
// 3. Ambient Dynamic Particle Canvas
// =========================================================================
function initAmbientCanvas() {
  const canvas = document.getElementById("ambient-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 22000), 55);

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.8 + 0.8;
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0) this.x = width;
      if (this.x > width) this.x = 0;
      if (this.y < 0) this.y = height;
      if (this.y > height) this.y = 0;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(56, 189, 248, ${this.alpha})`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting lines between close particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(168, 85, 247, ${0.15 * (1 - dist / 110)})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(render);
  }

  render();
}

// =========================================================================
// 4. Typewriter Effect
// =========================================================================
function initTypewriter() {
  const typedEl = document.getElementById("typed-text");
  if (!typedEl) return;

const roles = [
    "Software Development",
    "Web Application Development",
    "Mobile Application Development",
    "Full-Stack Development",
    "Java & PHP Programming",
    "Spring Boot & REST APIs",
    "Database Design & Management",
    "Data Analysis & Statistics",
    "Cybersecurity Fundamentals"
];

  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIdx];

    if (isDeleting) {
      typedEl.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      typingSpeed = 45;
    } else {
      typedEl.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      typingSpeed = 90;
    }

    if (!isDeleting && charIdx === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at full word
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typingSpeed = 400; // Pause before typing next word
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// =========================================================================
// 5. Theme Switcher (Dark / Light Mode)
// =========================================================================
function initTheme() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const html = document.documentElement;

  // Check saved theme or default to dark
  const savedTheme = localStorage.getItem("devmini_portfolio_theme") || "dark";
  html.setAttribute("data-theme", savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const currentTheme = html.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("devmini_portfolio_theme", newTheme);
      showToast(`Switched to ${newTheme} theme mode`);
    });
  }
}

// =========================================================================
// 6. Navigation, Sticky Header & Mobile Drawer
// =========================================================================
function initNavigation() {
  const header = document.getElementById("main-header");
  const mobileToggle = document.getElementById("mobile-toggle-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");
  const drawerBackdrop = document.getElementById("drawer-backdrop");
  const mobileClose = document.getElementById("mobile-close-btn");
  const drawerLinks = document.querySelectorAll(".drawer-link");
  const backToTopBtn = document.getElementById("back-to-top-btn");

  // Sticky header shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header?.classList.add("scrolled");
    } else {
      header?.classList.remove("scrolled");
    }
  });

  // Mobile Drawer Toggle
  function openDrawer() {
    mobileDrawer?.classList.add("open");
    drawerBackdrop?.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    mobileDrawer?.classList.remove("open");
    drawerBackdrop?.classList.remove("active");
    document.body.style.overflow = "";
  }

  mobileToggle?.addEventListener("click", openDrawer);
  mobileClose?.addEventListener("click", closeDrawer);
  drawerBackdrop?.addEventListener("click", closeDrawer);

  drawerLinks.forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });

  // Back to top button
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
}

// =========================================================================
// 7. Scroll Progress Bar
// =========================================================================
function initScrollProgress() {
  const progressBar = document.getElementById("scroll-progress");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  });
}

// =========================================================================
// 8. Animated Metrics Counter
// =========================================================================
function initMetrics() {
  const metricNumbers = document.querySelectorAll(".metric-number[data-count]");
  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        metricNumbers.forEach((el) => {
          const target = parseInt(el.getAttribute("data-count"), 10);
          let count = 0;
          const stepTime = Math.max(Math.floor(1200 / target), 30);
          const timer = setInterval(() => {
            count++;
            el.textContent = `${count}+`;
            if (count >= target) {
              clearInterval(timer);
              el.textContent = `${target}+`;
            }
          }, stepTime);
        });
      }
    },
    { threshold: 0.5 }
  );

  const strip = document.querySelector(".hero-metrics-strip");
  if (strip) observer.observe(strip);
}

// =========================================================================
// 9. Skills Category Tabs
// =========================================================================
function initSkillsTabs() {
  const tabButtons = document.querySelectorAll(".skill-tab-btn");
  const tabPanes = document.querySelectorAll(".skills-pane");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");

      tabButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      tabPanes.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add("active");
    });
  });
}

// =========================================================================
// 10. Projects Rendering & Filter Engine
// =========================================================================
function renderProjects(projectsList) {
  const grid = document.getElementById("projects-grid");
  const noProjectsMsg = document.getElementById("no-projects-message");
  if (!grid) return;

  grid.innerHTML = "";

  if (projectsList.length === 0) {
    if (noProjectsMsg) noProjectsMsg.style.display = "block";
    return;
  }

  if (noProjectsMsg) noProjectsMsg.style.display = "none";

  projectsList.forEach((project) => {
    const card = document.createElement("article");
    card.className = `project-card ${project.category}`;
    card.setAttribute("data-id", project.id);

    const tagsHtml = project.techStack
      .map((tech) => `<span class="tech-tag">${escapeHtml(tech)}</span>`)
      .join("");

    card.innerHTML = `
      <div class="project-card-header">
        <div class="project-icon-box">
          <i class="${project.icon}"></i>
        </div>
        <span class="project-cat-badge">${escapeHtml(project.categoryLabel)}</span>
      </div>
      <h3 class="project-title">${escapeHtml(project.title)}</h3>
      <p class="project-desc">${escapeHtml(project.shortDesc)}</p>
      <div class="project-tech-tags">${tagsHtml}</div>
      <div class="project-card-footer">
        <button class="project-detail-btn" data-project-id="${project.id}">
          <span>View Project Details</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `;

    grid.appendChild(card);
  });

  // Attach click listener for detail buttons
  document.querySelectorAll(".project-detail-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const pId = btn.getAttribute("data-project-id");
      openProjectModal(pId);
    });
  });
}

function initProjectControls() {
  const filterPills = document.querySelectorAll(".filter-pill");
  const searchInput = document.getElementById("project-search-input");
  const resetBtn = document.getElementById("reset-filter-btn");

  let activeFilter = "all";
  let searchQuery = "";

  function applyFilterAndSearch() {
    let filtered = portfolioProjects;

    // Filter by Category
    if (activeFilter !== "all") {
      filtered = filtered.filter((p) => p.category === activeFilter);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      filtered = filtered.filter((p) => {
        const inTitle = p.title.toLowerCase().includes(q);
        const inDesc = p.shortDesc.toLowerCase().includes(q);
        const inTech = p.techStack.some((t) => t.toLowerCase().includes(q));
        return inTitle || inDesc || inTech;
      });
    }

    renderProjects(filtered);
  }

  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      activeFilter = pill.getAttribute("data-filter");
      applyFilterAndSearch();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      applyFilterAndSearch();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      activeFilter = "all";
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      filterPills.forEach((p) => {
        p.classList.toggle("active", p.getAttribute("data-filter") === "all");
      });
      applyFilterAndSearch();
    });
  }
}

// =========================================================================
// 11. Project Details Modal
// =========================================================================
function initProjectModal() {
  const modalBackdrop = document.getElementById("project-modal-backdrop");
  const closeBtn = document.getElementById("modal-close-btn");

  function closeModal() {
    modalBackdrop?.classList.remove("open");
    document.body.style.overflow = "";
  }

  closeBtn?.addEventListener("click", closeModal);
  modalBackdrop?.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalBackdrop?.classList.contains("open")) {
      closeModal();
    }
  });
}

function openProjectModal(projectId) {
  const project = portfolioProjects.find((p) => p.id === projectId);
  if (!project) return;

  const modalBackdrop = document.getElementById("project-modal-backdrop");
  const contentEl = document.getElementById("modal-project-content");
  if (!modalBackdrop || !contentEl) return;

  const featuresHtml = project.features
    .map((f) => `<li><i class="fa-solid fa-check"></i> <span>${escapeHtml(f)}</span></li>`)
    .join("");

  const techHtml = project.techStack
    .map((t) => `<span class="tech-tag">${escapeHtml(t)}</span>`)
    .join("");

  contentEl.innerHTML = `
    <span class="modal-project-badge">${escapeHtml(project.categoryLabel)}</span>
    <h2 class="modal-project-title" id="modal-project-title">${escapeHtml(project.title)}</h2>
    <p class="modal-project-desc">${escapeHtml(project.fullDesc)}</p>

    <h3 class="modal-section-title">Key Features</h3>
    <ul class="modal-features-list">${featuresHtml}</ul>

    <h3 class="modal-section-title">Technologies Used</h3>
    <div class="modal-tech-stack">${techHtml}</div>

    <div class="modal-highlight-box" style="padding: 1rem; background: rgba(56, 189, 248, 0.08); border-left: 3px solid var(--accent-blue); border-radius: 6px; font-size: 0.9rem; color: var(--text-secondary); margin-top: 1.25rem;">
      <strong style="color: var(--text-primary);"><i class="fa-solid fa-lightbulb"></i> Project Note:</strong> ${escapeHtml(project.highlights)}
    </div>
  `;

  modalBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

// =========================================================================
// 12. Resume / CV Overview Modal & Print Handler
// =========================================================================
function initResumeModal() {
  const resumeModalBackdrop = document.getElementById("resume-modal-backdrop");
  const openBtns = [
    document.getElementById("resume-open-btn"),
    document.getElementById("hero-resume-btn"),
    document.getElementById("drawer-resume-btn"),
    document.getElementById("contact-banner-resume-btn")
  ];
  const closeBtn = document.getElementById("resume-modal-close-btn");
  const printBtn = document.getElementById("print-resume-btn");

  function openResume() {
    resumeModalBackdrop?.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeResume() {
    resumeModalBackdrop?.classList.remove("open");
    document.body.style.overflow = "";
  }

  openBtns.forEach((btn) => btn?.addEventListener("click", openResume));
  closeBtn?.addEventListener("click", closeResume);

  resumeModalBackdrop?.addEventListener("click", (e) => {
    if (e.target === resumeModalBackdrop) closeResume();
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && resumeModalBackdrop?.classList.contains("open")) {
      closeResume();
    }
  });

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }
}

// =========================================================================
// 13. Interactive Contact Form Handler
// =========================================================================
function initContactForm() {
  const form = document.getElementById("portfolio-contact-form");
  const alertEl = document.getElementById("form-status-alert");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("contact-name");
    const emailInput = document.getElementById("contact-email");
    const subjectInput = document.getElementById("contact-subject");
    const messageInput = document.getElementById("contact-message");

    let isValid = true;

    // Reset error states
    document.querySelectorAll(".form-group").forEach((g) => g.classList.remove("has-error"));

    // Name validation
    if (!nameInput.value.trim()) {
      nameInput.closest(".form-group").classList.add("has-error");
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailInput.closest(".form-group").classList.add("has-error");
      isValid = false;
    }

    // Subject validation
    if (!subjectInput.value.trim()) {
      subjectInput.closest(".form-group").classList.add("has-error");
      isValid = false;
    }

    // Message validation
    if (!messageInput.value.trim()) {
      messageInput.closest(".form-group").classList.add("has-error");
      isValid = false;
    }

    if (!isValid) return;

    // Construct direct mailto fallback link and notify user
    const submitBtn = document.getElementById("contact-submit-btn");
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Preparing message...`;

    setTimeout(() => {
      if (alertEl) {
        alertEl.className = "form-status-alert success";
        alertEl.style.display = "block";
        alertEl.innerHTML = `
          <strong>Thank you, ${escapeHtml(nameInput.value)}!</strong><br>
          Your message has been composed. Launching your email client to send directly to <em>dularidewmini@gmail.com</em>...
        `;
      }

      showToast("Message composed! Opening your email app...");

      // Trigger mailto with pre-filled content
      const subject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value.trim()}`);
      const body = encodeURIComponent(
        `Hi Devmini,\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
      );
      window.location.href = `mailto:dularidewmini@gmail.com?subject=${subject}&body=${body}`;

      submitBtn.disabled = false;
      submitBtn.innerHTML = `<i class="fa-solid fa-check"></i> Sent!`;
      form.reset();

      setTimeout(() => {
        submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> <span>Send Another Message</span>`;
      }, 4000);
    }, 600);
  });
}

// =========================================================================
// 14. Email Clipboard Copy & Toast Feedback
// =========================================================================
function initCopyButtons() {
  const quickCopyBtn = document.getElementById("quick-copy-email-btn");
  const copyInlineBtns = document.querySelectorAll(".copy-inline-btn");

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied "${text}" to clipboard!`);
      });
    } else {
      // Fallback
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
        showToast(`Copied "${text}" to clipboard!`);
      } catch (err) {
        showToast(`Email: ${text}`);
      }
      document.body.removeChild(textArea);
    }
  }

  if (quickCopyBtn) {
    quickCopyBtn.addEventListener("click", () => {
      copyText("dularidewmini@gmail.com");
    });
  }

  copyInlineBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const textToCopy = btn.getAttribute("data-copy") || "dularidewmini@gmail.com";
      copyText(textToCopy);
    });
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  const msgEl = document.getElementById("toast-message");
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add("show");

  clearTimeout(window.__toastTimeout);
  window.__toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// =========================================================================
// 15. Dynamic Year Updater
// =========================================================================
function initYear() {
  const yearEl = document.getElementById("current-year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Helper: Escape HTML strings
function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
