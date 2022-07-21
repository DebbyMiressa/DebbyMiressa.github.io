/* eslint-disable linebreak-style */
const menu = document.querySelector('#menu');
const humberIcon = document.querySelector('.humber-icon');
const humber = document.querySelector('.humber');
const menuItem = document.querySelectorAll('.navigate');
const all = document.querySelector('.all');
const cbtn = document.querySelectorAll('.cbtn');

function activeHumber() {
  humber.classList.add('active-humber');
}

function disableHumber() {
  humber.classList.remove('active-humber');
}

menu.addEventListener('click', activeHumber);
humberIcon.addEventListener('click', disableHumber);

menuItem.forEach((item) => {
  item.addEventListener('click', disableHumber);
});

const sectionModal = document.createElement('section');
sectionModal.id = 'modal';
sectionModal.className = 'modal';

const ProjectData = {
  show: {
    name: 'Project 1',
    featuredImage: 'images/gymfitimg.png',
    featuredImage2: 'images/mobilemodal1.png',
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    description: 'This is a description for the project.',
    linktoliveversion: '',
    linktosource: '',
  },
  show2: {
    name: 'Project 2',
    featuredImage: 'images/gymfitimg.png',
    featuredImage2: 'images/mobilemodal1.png',
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Ruby on rails',
    },
    description: 'This is a description for the project.',
    linktoliveversion: '',
    linktosource: '',
  },
  show3: {
    name: 'Project 3',
    featuredImage: 'images/gymfitimg.png',
    featuredImage2: 'images/mobilemodal1.png',
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    description: 'This is a description for the project.',
    linktoliveversion: '',
    linktosource: '',
  },
  show4: {
    name: 'Project 4',
    featuredImage: 'images/gymfitimg.png',
    featuredImage2: 'images/mobilemodal1.png',
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    description: 'This is a description for the project.',
    linktoliveversion: '',
    linktosource: '',
  },
  show5: {
    name: 'Project 5',
    featuredImage: 'images/gymfitimg.png',
    featuredImage2: 'images/mobilemodal1.png',
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    description: 'This is a description for the project.',
    linktoliveversion: '',
    linktosource: '',
  },
  show6: {
    name: 'Project 6',
    featuredImage: 'images/gymfitimg.png',
    featuredImage2: 'images/mobilemodal1.png',
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    description: 'This is a description for the project.',
    linktoliveversion: '',
    linktosource: '',
  },
  show7: {
    name: 'Project 7',
    featuredImage: 'images/gymfitimg.png',
    featuredImage2: 'images/mobilemodal1.png',
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    description: 'This is a description for the project.',
    linktoliveversion: '',
    linktosource: '',
  },
};

function closeModal() {
  sectionModal.style.display = 'none';
  sectionModal.classList.remove('open');
  all.style.webkitFilter = 'blur(0)';
}

function openModal(index) {
  let name = '';
  let featuredImage = '';
  let featuredImage2 = '';
  let technologies = '';
  let description = '';
  let linktoliveversion = '';
  let linktosource = '';
  Object.values(ProjectData).forEach((val, i) => {
    if (i === index) {
      name = val.name;
      featuredImage = val.featuredImage;
      featuredImage2 = val.featuredImage2;
      technologies = val.technologies;
      description = val.description;
      linktoliveversion = val.linktoliveversion;
      linktosource = val.linktosource;
    }
  });
  sectionModal.innerHTML = `
                              <div class='inner'>
                                <div class='innerone'>
                                  <h1>${name}</h1>
                                  <div><img class="btn-close" id="xer" src="images/Disabled.png"></div>
                                </div>
                                <div class='innertwo'>
                                  <div><ul><li>${technologies.tech1}</li><li>${technologies.tech2}</li><li>${technologies.tech3}</li></ul></div>
                                  <div class='innerthree'>
                                    <div>
                                      <img id="featured" src="${featuredImage}" width="80%" height="auto" max-height="75%" alt="featured image">
                                      <img id="featured2" src="${featuredImage2}" alt="featured image">
                                    </div>
                                   <div>
                                      <p>${description}</p>
                                      <button id='btnone'><a href="${linktoliveversion}">See Live <img src="images/live.png"></a></button><button id='btntwo'><a href="${linktosource}">See Source <img src="images/source.png"></a></button>
                                    </div>
                                </div>
                              </div>
                            `;
  document.body.appendChild(sectionModal);
  sectionModal.getBoundingClientRect();
  sectionModal.style.display = 'flex';
  sectionModal.classList.add('open');
  all.style.webkitFilter = 'blur(2px)';
  const xer = document.querySelector('#xer');
  xer.addEventListener('click', closeModal);
}

cbtn.forEach((btn, index) => btn.addEventListener('click', (evt) => openModal(index, evt)));
