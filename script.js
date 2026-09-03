const projectData = {
  "sar-drone": {
    kicker: "PROJECT 01 · UAV · MECHANICAL DESIGN",
    title: "Autonomous Search & Rescue System — Drone",
    description: "Mechanical design of the multirotor platform with lightweight construction, functionality, component integration and structural layout treated as primary design constraints.",
    role: "Mechanical Design Engineer",
    tools: "SolidWorks · ANSYS Mechanical · UAV Integration",
    focus: "Lightweight construction · component integration · structural layout",
    images: ["sar-drone-1.png","sar-drone-2.png","sar-drone-3.png","sar-drone-4.png"],
    links: [{label:"Flight Test",url:"https://drive.google.com/file/d/17MwAqT2XjVeArJpXNbskLxzj9TOFybo4/view?usp=sharing"}]
  },
  "fixed-wing": {
    kicker: "PROJECT 02 · UAV · DESIGN & MANUFACTURING",
    title: "Autonomous Search & Rescue System — Fixed Wing",
    description: "Design and manufacturing contribution to the fixed-wing UAV platform developed for the Autonomous Search and Rescue System. The work strengthened mission-oriented UAV development and manufacturing experience.",
    role: "Design & Manufacturing",
    tools: "Aircraft Design · UAV Manufacturing",
    focus: "Fixed-wing development · mission-oriented engineering",
    images: ["fixed-wing-1.png","fixed-wing-2.png","fixed-wing-3.png"],
    links: [{label:"Flight Video",url:"https://drive.google.com/file/d/1Dst21CEV_VQ2138wjOCrvWR2N_RvbiA0/view?usp=drive_link"}]
  },
  "recon": {
    kicker: "PROJECT 03 · UAV · DEVELOPMENT",
    title: "Surveillance & Reconnaissance UAV",
    description: "A practical UAV platform designed and developed for observation, monitoring and field reconnaissance missions, with emphasis on aircraft design, structural development and mission-oriented engineering.",
    role: "UAV Design & Development",
    tools: "CAD · Structural Development · UAV Systems",
    focus: "Observation · monitoring · reconnaissance",
    images: ["recon-1.png","recon-2.png","recon-3.png"],
    links: []
  },
  "add4bio": {
    kicker: "PROJECT 04 · BIOMEDICAL · VISUALIZATION",
    title: "Surgical Animation & Titanium Post-Processing | Add4Bio",
    description: "Surgical animations were created to demonstrate the procedure pathway to doctors. Manufactured titanium parts were also post-processed through sanding and polishing. A non-realistic skull model was used in the animation to preserve patient confidentiality.",
    role: "Animation & Post-Process Specialist",
    tools: "Blender · Titanium / PLA post-processing",
    focus: "Technical visualization · production support · confidentiality-conscious modeling",
    images: ["add4bio-2.png","add4bio-1.png"],
    links: [{label:"Animation",url:"https://drive.google.com/file/d/1lwTRTaTRgxjQrZy5YiQNYSRVtY6TXzoA/view?usp=sharing"}]
  },
  "trailer": {
    kicker: "PROJECT 05 · R&D · TEST ENGINEERING",
    title: "Trailer Rear-Impact Test System | Makist",
    description: "Safety-focused engineering project for evaluating a patented energy-absorbing system mounted at the rear of truck trailers. A dedicated steering control and release mechanism were developed for a driverless test vehicle used in controlled impact testing.",
    role: "Project Team Member",
    tools: "Mechanical Design · Test Engineering · Mechanisms",
    focus: "Steering control · release mechanism · controlled impact testing",
    images: ["trailer-2.png","trailer-1.png","trailer-3.png"],
    links: [
      {label:"Animation",url:"https://drive.google.com/file/d/1AyhXZOs5cs_khmsVVZgIwvatC7x_9OZz/view?usp=drive_link"},
      {label:"Steering Mechanism",url:"https://drive.google.com/file/d/12B3bhrQgenIoRDQSNuhQv-RmbC7CgpRv/view?usp=sharing"},
      {label:"Release Mechanism",url:"https://drive.google.com/file/d/1v1I8I8BQmwvE9tUdviTFeW_IJYNSuw09/view?usp=sharing"}
    ]
  },
  "cfd": {
    kicker: "PROJECT 06 · CFD · FEA · XFLR5",
    title: "CFD & Structural Analysis — TEKNOFEST Combat UAV",
    description: "Aerodynamic and structural analyses of a UAV test prototype using ANSYS Fluent, ANSYS Mechanical and XFLR5. The work examined airflow behavior, aerodynamic performance and structural response under relevant loading conditions.",
    role: "Simulation & Analysis",
    tools: "ANSYS Fluent · ANSYS Mechanical · XFLR5",
    focus: "CFD · aerodynamic performance · structural response",
    images: ["cfd-4.png","cfd-2.png","cfd-3.png","cfd-1.png","cfd-5.png","cfd-6.png"],
    links: []
  },
  "topology": {
    kicker: "PROJECT 07 · TOPOLOGY · STRUCTURAL DESIGN",
    title: "Structural Analysis & Manufacturing of a Topology-Inspired UAV Frame",
    description: "A lightweight UAV frame was developed from an initial geometry, evaluated structurally, verified and moved to manufacturing. The project deepened interest in natural, organic topologies and topology-driven lightweight engineering with nTop.",
    role: "Structural Design & Manufacturing",
    tools: "nTop · ANSYS Mechanical · Additive Manufacturing",
    focus: "Lightweighting · structural validation · organic topology",
    images: ["topology-2.png","topology-1.png","topology-3.png","topology-4.png","topology-5.png"],
    links: [{label:"Flight Video",url:"https://drive.google.com/file/d/1uGzx5fhoAD6E_A0OULFPFZuTqRD93bFw/view?usp=sharing"}]
  }
};

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const progressBar = document.querySelector('.scroll-progress span');
const reveals = [...document.querySelectorAll('.reveal')];
const navLinks = [...document.querySelectorAll('.nav-links a')];
const sections = [...document.querySelectorAll('main section[id]')];

if ('IntersectionObserver' in window && !reduceMotion) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  reveals.forEach(el => observer.observe(el));
} else {
  reveals.forEach(el => el.classList.add('is-visible'));
}

window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;

  let active = 'home';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 180) active = section.id;
  });
  navLinks.forEach(link => link.classList.toggle('is-active', link.getAttribute('href') === `#${active}`));
}, { passive: true });

const menuButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const open = !navMenu.classList.contains('is-open');
  navMenu.classList.toggle('is-open', open);
  menuButton.classList.toggle('is-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});
navLinks.forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('is-open');
  menuButton.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}));

const hero = document.querySelector('.hero');
const spotlight = document.querySelector('.hero-spotlight');
if (!reduceMotion) {
  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    spotlight.style.left = `${event.clientX - rect.left}px`;
    spotlight.style.top = `${event.clientY - rect.top}px`;
  });
}

const counters = [...document.querySelectorAll('[data-count]')];
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.count);
    if (reduceMotion) { el.textContent = target; return; }
    const start = performance.now();
    const duration = 850;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: .7 });
counters.forEach(el => counterObserver.observe(el));

const magneticButtons = [...document.querySelectorAll('.magnetic')];
if (!reduceMotion) {
  magneticButtons.forEach(button => {
    button.addEventListener('pointermove', (event) => {
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * .08;
      const y = (event.clientY - rect.top - rect.height / 2) * .12;
      button.style.transform = `translate(${x}px, ${y}px)`;
    });
    button.addEventListener('pointerleave', () => button.style.transform = '');
  });
}

const filters = [...document.querySelectorAll('.filter')];
const cards = [...document.querySelectorAll('.project-card')];
filters.forEach(filterButton => {
  filterButton.addEventListener('click', () => {
    filters.forEach(btn => btn.classList.remove('is-active'));
    filterButton.classList.add('is-active');
    const filter = filterButton.dataset.filter;
    cards.forEach(card => {
      const categories = card.dataset.category.split(' ');
      card.classList.toggle('is-hidden', filter !== 'all' && !categories.includes(filter));
    });
  });
});

if (!reduceMotion && window.matchMedia('(pointer:fine)').matches) {
  cards.forEach(card => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.transform = `perspective(900px) rotateX(${y * -2.2}deg) rotateY(${x * 2.2}deg) translateY(-7px)`;
    });
    card.addEventListener('pointerleave', () => card.style.transform = '');
  });
}

const modal = document.querySelector('#project-modal');
const modalTitle = document.querySelector('#modal-title');
const modalKicker = document.querySelector('#modal-kicker');
const modalDescription = document.querySelector('#modal-description');
const modalFacts = document.querySelector('#modal-facts');
const modalGallery = document.querySelector('#modal-gallery');
const modalLinks = document.querySelector('#modal-links');

function openProject(key) {
  const data = projectData[key];
  if (!data) return;
  modalKicker.textContent = data.kicker;
  modalTitle.textContent = data.title;
  modalDescription.textContent = data.description;
  modalFacts.innerHTML = `
    <div><strong>ROLE</strong><span>${data.role}</span></div>
    <div><strong>TOOLS</strong><span>${data.tools}</span></div>
    <div><strong>FOCUS</strong><span>${data.focus}</span></div>`;
  modalGallery.innerHTML = data.images.map((img, i) => `<img src="assets/images/${img}" alt="${data.title} — image ${i + 1}" loading="lazy">`).join('');
  modalLinks.innerHTML = data.links.map(link => `<a href="${link.url}" target="_blank" rel="noopener">${link.label} ↗</a>`).join('');
  modal.showModal();
  document.body.style.overflow = 'hidden';
  modalGallery.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => img.classList.toggle('image-lightbox'));
  });
}

function closeModal() {
  modalGallery.querySelectorAll('.image-lightbox').forEach(img => img.classList.remove('image-lightbox'));
  modal.close();
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-project]').forEach(el => {
  el.addEventListener('click', () => openProject(el.dataset.project));
  if (el.classList.contains('project-card')) {
    el.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProject(el.dataset.project);
      }
    });
  }
});

document.querySelector('.modal-close').addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});
modal.addEventListener('close', () => { document.body.style.overflow = ''; });

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const zoomed = document.querySelector('.image-lightbox');
    if (zoomed) zoomed.classList.remove('image-lightbox');
  }
});
