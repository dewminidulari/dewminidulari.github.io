/**
 * DEVMUNI DULARI - PORTFOLIO INTERACTIVITY & DATA ENGINE
 * Features: Project filtering & search, modal inspector, dynamic typewriter,
 * interactive canvas particles, skills tab system, theme toggle, copy email, contact form.
 */

// =========================================================================
// 1. Projects Data Store (15 Complete Projects from User Details)
// =========================================================================
const portfolioProjects = [
  {
    id: "memorydot-erp",
    title: "MemoryDot ERP System",
    category: "client",
    categoryLabel: "Client Project",
    icon: "fa-solid fa-network-wired",
    shortDesc: "A full-featured client Enterprise Resource Planning (ERP) platform developed for MemoryDot to streamline workflows, inventory, and cross-departmental operations.",
    fullDesc: "MemoryDot ERP was commissioned as an enterprise-grade management tool to eliminate operational silos. It integrates procurement tracking, real-time inventory adjustments, client billing, and executive analytics into a unified high-throughput database structure.",
    techStack: ["Enterprise Arch", "Java", "MySQL", "Role-based Auth", "Reporting Engine"],
    features: [
      "Custom role-based permissions (Admin, Manager, Staff)",
      "Automated stock level alerts and invoice generation",
      "Robust relational database schema with ACID guarantees",
      "Executive business intelligence & financial reporting"
    ],
    highlights: "Designed directly for client requirements with high reliability and zero-data-loss database design."
  },
  {
    id: "neolife-website",
    title: "Neolife Software Solutions Official Website",
    category: "client",
    categoryLabel: "Client Project",
    icon: "fa-solid fa-globe",
    shortDesc: "The official corporate web platform for Neolife Software Solutions showcasing enterprise software services, client case studies, and lead capture pipelines.",
    fullDesc: "Engineered a high-performance corporate web portal for Neolife Software Solutions. Optimized for rapid loading speeds, SEO discoverability, clean responsive interfaces across all device viewports, and interactive customer inquiry flows.",
    techStack: ["HTML5", "CSS3 / Modern UI", "JavaScript", "SEO Optimization", "Responsive Design"],
    features: [
      "Dynamic service catalog & interactive portfolio showcase",
      "Conversion-optimized client inquiry and lead generation form",
      "Cross-browser tested, 100% responsive fluid mobile layout",
      "Modern CSS animations and brand-tailored visual identity"
    ],
    highlights: "Delivered client satisfaction with fast load times and clean presentation of corporate software solutions."
  },
  {
    id: "pamasrilanka",
    title: "PamaSriLanka Web Platform",
    category: "client",
    categoryLabel: "Client Project",
    icon: "fa-solid fa-briefcase",
    shortDesc: "Commercial client website developed for PamaSriLanka featuring product showcases, customer inquiries, and optimized digital brand presence.",
    fullDesc: "Built an engaging commercial web presence for PamaSriLanka. Focused on rich user experience, intuitive navigation structure, multi-product category filtering, and direct customer engagement pathways.",
    techStack: ["HTML5", "CSS3", "JavaScript", "MySQL Integration", "UI/UX Design"],
    features: [
      "Categorized showcase with high-res product galleries",
      "Direct customer inquiry messaging and feedback mechanisms",
      "Accessible typography and responsive touch-friendly navigation",
      "Integrated analytics and contact channels"
    ],
    highlights: "Transformed client requirements into an active online brand footprint."
  },
  {
    id: "class-predictor",
    title: "Degree Eligibility & Class Predictor System",
    category: "data-pred",
    categoryLabel: "Predictive & Stats",
    icon: "fa-solid fa-graduation-cap",
    shortDesc: "An intelligent academic predictive tool calculating GPA projections, degree eligibility verification, and class honors outcomes using statistical logic.",
    fullDesc: "Bridging statistical analysis and software engineering, this system allows university undergraduates to evaluate their academic standing. It performs rigorous credit-weighting, grade conversions, simulation of future exam requirements, and statistical prediction for First Class, Second Upper, and Second Lower degree eligibility.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Statistical Logic", "Predictive Algorithm"],
    features: [
      "Dynamic GPA and weighted credit calculation engine",
      "Conditional degree eligibility evaluation based on faculty regulations",
      "Target class simulator: calculates required future grades to achieve target honors",
      "Real-time chart visualization of academic performance trends"
    ],
    highlights: "Practical application of statistical scoring models built for university students."
  },
  {
    id: "vimanago",
    title: "VimanaGo - Flight Booking Web System",
    category: "web",
    categoryLabel: "Web Application",
    icon: "fa-solid fa-plane-departure",
    shortDesc: "Comprehensive flight reservation web application with route searching, seat availability, booking workflows, and passenger management.",
    fullDesc: "VimanaGo provides an intuitive end-to-end flight booking journey. Users can search for domestic and international itineraries, select seat tiers, view layovers, input passenger manifests, and simulate instant booking confirmations with a modern interface.",
    techStack: ["HTML5", "CSS3", "JavaScript", "Booking Logic", "Local State"],
    features: [
      "Interactive departure/arrival search with airport auto-suggest",
      "Multi-passenger ticketing and seat class selection (Economy, Business)",
      "Dynamic price calculations factoring in dates, luggage, and taxes",
      "Responsive flight summary boarding pass generation"
    ],
    highlights: "Seamless booking UX inspired by modern aviation reservation systems."
  },
  {
    id: "beautyshop",
    title: "BeautyShop E-Commerce Web Store",
    category: "web",
    categoryLabel: "Web & E-Commerce",
    icon: "fa-solid fa-bag-shopping",
    shortDesc: "A complete online cosmetics & skincare marketplace with dynamic product catalogs, relational MySQL database, shopping cart, and order processing.",
    fullDesc: "BeautyShop is a full-featured e-commerce platform crafted for beauty and skincare retail. It incorporates persistent customer carts, category filters (skincare, makeup, haircare), product reviews, and a robust MySQL backend for product and order management.",
    techStack: ["HTML5", "CSS3", "JavaScript", "MySQL", "Session Mgmt"],
    features: [
      "Real-time cart calculation with promo code discounts and shipping rates",
      "Relational product inventory database with stock deduction",
      "User authentication, order history, and order placement workflow",
      "Vibrant modern UI with responsive touch-friendly mobile layouts"
    ],
    highlights: "Full lifecycle e-commerce implementation from front-end cart to relational database."
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking Management Desktop Application",
    category: "desktop",
    categoryLabel: "Desktop / Enterprise",
    icon: "fa-solid fa-hotel",
    shortDesc: "Enterprise desktop hotel management software engineered in Java and MySQL for reservation scheduling, room availability, customer records, and billing.",
    fullDesc: "Developed an enterprise desktop management system for the hospitality sector using Java OOP principles and JDBC connectivity to MySQL. The application streamlines front-desk check-in/check-out, room category pricing, guest registries, and invoice generation.",
    techStack: ["Java", "Java Swing / GUI", "MySQL", "JDBC", "OOP Architecture"],
    features: [
      "Visual room allocation grid indicating occupied, vacant, and cleaning states",
      "Automated guest billing with tax and ancillary service charges",
      "Secure SQL transaction handling ensuring booking consistency",
      "Searchable guest database and printable reservation receipts"
    ],
    highlights: "Engineered following strict Object-Oriented design patterns and database normalization."
  },
  {
    id: "autoglam",
    title: "AutoGlam Car Wash Management System",
    category: "desktop",
    categoryLabel: "Desktop / Enterprise",
    icon: "fa-solid fa-car-side",
    shortDesc: "Desktop service management solution built with Java and MySQL to automate vehicle wash scheduling, service bay allocation, and revenue reporting.",
    fullDesc: "AutoGlam simplifies vehicle service operations. Front-office staff can log customer vehicles, assign tailored wash packages (exterior, interior detail, ceramic wax), allocate technicians, and generate daily revenue summaries.",
    techStack: ["Java", "MySQL", "Desktop UI", "JDBC", "Data Normalization"],
    features: [
      "Vehicle queue and service status tracker (In-Progress, Completed)",
      "Tiered service pricing matrix with customizable add-on packages",
      "Relational customer vehicle history for loyalty management",
      "Financial ledger and daily/monthly income audit reports"
    ],
    highlights: "Eliminated paper records and accelerated customer check-in by 60%."
  },
  {
    id: "period-tracker",
    title: "Period & Menstrual Cycle Tracking App",
    category: "mobile-iot",
    categoryLabel: "Health & Stats",
    icon: "fa-solid fa-heart-pulse",
    shortDesc: "Privacy-centric menstrual health and cycle prediction application built in TypeScript utilizing statistical cycle averages and calendar modeling.",
    fullDesc: "A thoughtfully engineered health-tech application focusing on female wellness. Utilizing statistical cycle modeling and variance calculations, the app predicts forthcoming cycles, fertile windows, and ovulation days while ensuring all sensitive personal health data remains strictly private on the user's client device.",
    techStack: ["TypeScript", "Cycle Algorithms", "Statistical Estimation", "Local Storage", "CSS3"],
    features: [
      "Statistical rolling-average estimation of luteal and follicular phases",
      "Interactive visual calendar highlighting predicted cycle days and fertile windows",
      "Symptom and mood logging with statistical trend analysis",
      "100% offline, privacy-first client-side data persistence"
    ],
    highlights: "Demonstrates TypeScript type safety coupled with statistical cycle modeling."
  },
  {
    id: "shoe-mart",
    title: "Shoe Mart Web E-Commerce Platform",
    category: "web",
    categoryLabel: "Java Web / E-Commerce",
    icon: "fa-solid fa-shoe-prints",
    shortDesc: "Java-based web e-commerce application for footwear retail featuring size/color matrix selection, customer checkout, and relational MySQL inventory.",
    fullDesc: "Built using Java Web architecture following the MVC (Model-View-Controller) design pattern. Implemented session-based cart management, database product catalogs, order processing pipelines, and administrative product management.",
    techStack: ["Java Web", "Servlets / JSP", "MySQL", "MVC Pattern", "HTML/CSS"],
    features: [
      "Footwear catalog with size availability and variant filtering",
      "Secure user sessions, login authentication, and cart persistence",
      "Back-office administrator portal to update inventory and view orders",
      "Clean relational database schema with foreign-key referential integrity"
    ],
    highlights: "Solid demonstration of Java Web technologies and MVC software engineering."
  },
  {
    id: "zeyora-perfume",
    title: "Zeyora Perfume Luxury E-Commerce",
    category: "web",
    categoryLabel: "Java Web / E-Commerce",
    icon: "fa-solid fa-spray-can-sparkles",
    shortDesc: "Luxury fragrance web marketplace built with Java Web and MySQL, featuring scent-family categorization, perfume notes breakdown, and sleek cart flows.",
    fullDesc: "Zeyora Perfume offers an elegant digital storefront for luxury perfumery. Built on a Java web backend connected to MySQL, it categorizes fragrances by top, heart, and base notes, facilitating a unique sensory-driven discovery experience.",
    techStack: ["Java Web", "MySQL", "HTML5", "Modern CSS", "JavaScript"],
    features: [
      "Interactive fragrance discovery based on scent notes (Woody, Floral, Citrus)",
      "Luxury glassmorphic presentation with responsive product showcases",
      "Shopping cart, checkout computation, and customer order management",
      "Robust relational database schema for perfume inventories"
    ],
    highlights: "Combines high-end visual aesthetics with reliable Java enterprise backend logic."
  },
  {
    id: "floralanka",
    title: "FloraLanka - Android M-Commerce Flower App",
    category: "mobile-iot",
    categoryLabel: "Android Mobile",
    icon: "fa-solid fa-seedling",
    shortDesc: "Native Android mobile commerce application for flower arrangements and bouquet delivery with order placement, catalog browsing, and cart management.",
    fullDesc: "FloraLanka brings floral gifting to mobile devices. Built natively in Android Studio using Java and XML layouts, users can browse seasonal blossoms, configure personalized greeting cards with their orders, track order stages, and manage delivery addresses.",
    techStack: ["Android Studio", "Java", "Android XML", "SQLite", "Mobile UX"],
    features: [
      "Fluid Android UI with RecyclerViews, custom adapters, and CardViews",
      "Local SQLite caching for lightning-fast catalog viewing and cart storage",
      "Custom card message attachments and delivery date selector",
      "Clean mobile user experience adhering to Material Design guidelines"
    ],
    highlights: "Native mobile development experience demonstrating the Android application lifecycle."
  },
  {
    id: "lms-system",
    title: "Learning Management System (LMS)",
    category: "desktop",
    categoryLabel: "Enterprise Systems",
    icon: "fa-solid fa-book-open-reader",
    shortDesc: "Multi-role educational management platform engineered in Java and MySQL for course administration, student enrollment, grading, and lecture scheduling.",
    fullDesc: "Engineered to facilitate institutional education workflows. Supports dedicated portals for Administrators, Lecturers, and Students. Lecturers can publish course materials, record assignment grades, and track attendance, while students can track module progress.",
    techStack: ["Java", "OOP Architecture", "MySQL", "Role-based Access", "Data Security"],
    features: [
      "Role-based privilege separation for Administrators, Instructors, and Students",
      "Module enrollment, timetable viewer, and GPA calculation engine",
      "Assignment grading matrix and student academic progress reports",
      "Relational schema normalized to 3NF for academic data integrity"
    ],
    highlights: "Scalable enterprise Java solution handling complex multi-user education hierarchies."
  },
  {
    id: "event-management",
    title: "Event Management System",
    category: "desktop",
    categoryLabel: "Enterprise / C#",
    icon: "fa-solid fa-calendar-check",
    shortDesc: "Robust event coordination and ticketing management platform developed in C# and .NET Framework for venue scheduling, attendee registration, and ticketing.",
    fullDesc: "Built in C# using .NET and SQL, this application provides corporate event planners and conference coordinators with complete control over event agendas, seat reservations, attendee registrations, speaker lineups, and ticket verification.",
    techStack: ["C#", ".NET Framework", "SQL / Database", "Event Architecture", "Windows Forms / WPF"],
    features: [
      "Interactive venue layout booking with capacity threshold management",
      "Attendee registration with automatic barcode/ticket ID generation",
      "Speaker schedule and session conflict resolution logic",
      "Financial reports tracking ticket revenues and sponsorship funds"
    ],
    highlights: "Showcases C# .NET language capabilities, delegates, LINQ, and enterprise database integration."
  },
  {
    id: "wally-robot",
    title: "Wally-Robot: Autonomous Arduino Robot",
    category: "mobile-iot",
    categoryLabel: "Robotics & IoT",
    icon: "fa-solid fa-robot",
    shortDesc: "Autonomous obstacle-avoiding robotic vehicle built with Arduino C/C++, ultrasonic sensors, servo steering, and motor driver telemetry.",
    fullDesc: "Wally-Robot is an embedded robotics project engineered using an Arduino microcontroller. Utilizing an HC-SR04 ultrasonic rangefinder mounted on a servo motor, the robot dynamically scans surrounding topography in real-time, calculates obstacle distance vectors, and executes avoidance maneuvers.",
    techStack: ["Arduino C/C++", "Ultrasonic Sensors", "Servo Control", "Motor Drivers", "Hardware Logic"],
    features: [
      "Real-time sensor signal processing for proximity calculation",
      "Autonomous 180-degree sweep obstacle detection algorithms",
      "PWM-driven differential motor steering for precise spatial navigation",
      "Hardware circuit design with battery voltage regulation and fail-safes"
    ],
    highlights: "Practical implementation of hardware programming, sensor telemetry, and autonomous logic."
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
          <span>View Architecture & Specs</span>
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

    <h3 class="modal-section-title">Key Architectural Features:</h3>
    <ul class="modal-features-list">${featuresHtml}</ul>

    <h3 class="modal-section-title">Technologies & Frameworks:</h3>
    <div class="modal-tech-stack">${techHtml}</div>

    <div class="modal-highlight-box" style="padding: 1rem; background: rgba(56, 189, 248, 0.08); border-left: 3px solid var(--accent-blue); border-radius: 6px; font-size: 0.9rem; color: var(--text-secondary); margin-top: 1rem;">
      <strong style="color: var(--text-primary);"><i class="fa-solid fa-star"></i> Engineering Highlight:</strong> ${escapeHtml(project.highlights)}
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
