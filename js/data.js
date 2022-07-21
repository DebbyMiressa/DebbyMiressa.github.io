/* eslint-disable linebreak-style */
const ProjectData = {
  show: {
    name: 'Gym App',
    featuredImage: 'images/gymfitimg.png',
    featuredImage2: 'images/gymfitmodal.png',
    featuredImage3: 'images/gymfit.png',
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    description: 'A daily workout planning tool used by athletes and sport enthusiasts.',
    linktoliveversion: '',
    linktosource: '',
  },
  show2: {
    name: 'Digishop',
    featuredImage: 'images/gymfitimg.png',
    featuredImage2: 'images/digitalshopmodal.jpg',
    featuredImage3: 'images/digitalshopbanner.jpg',
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Ruby on rails',
    },
    description: 'An online retail store to buy, sell, rent or even advertize your products.',
    linktoliveversion: '',
    linktosource: '',
  },
  show3: {
    name: 'Cloud Music',
    featuredImage: 'images/cloudmusicimg.png',
    featuredImage2: 'images/cloudmusicmodal.jpg',
    featuredImage3: 'images/cloudmusicbanner.png',
    technologies: {
      tech1: 'CSS',
      tech2: 'HTML',
      tech3: 'Javascript',
    },
    description: 'A collection of local and international music all in one.',
    linktoliveversion: '',
    linktosource: '',
  },
  show4: {
    name: 'Project 4',
    featuredImage: 'images/gymfitimg.png',
    featuredImage2: 'images/gymfitmodal.png',
    featuredImage3: 'images/digitalshopbanner.png',
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
    featuredImage3: 'images/digitalshopbanner.jpg',
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
    featuredImage3: 'images/digitalshopbanner.png',
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
    featuredImage3: 'images/digitalshopbanner.png',
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

const all = document.querySelector('.all');
const recentWorks = document.createElement('section');
recentWorks.id = 'recentworks';
recentWorks.className = 'recentworks';

function dataLoader() {
  const name = new Array(7);
  const description = new Array(7);
  const technologies = new Array(7);
  const banner = new Array(7);
  Object.values(ProjectData).forEach((val, i) => {
    name[i] = val.name;
    description[i] = val.description;
    technologies[i] = val.technologies;
    banner[i] = val.featuredImage3;
  });
  recentWorks.innerHTML = `
                           <div class="topp">
                             <div class="zero">
                               <h1 class="recent">My Recent Works</h1>
                               <div class="vector">
                                 <img src="images/Vector.png" alt="line" />
                               </div>
                               <div class="deskline">
                                 <img class="expander" src="images/deskline.png" alt="deskline" />
                               </div>
                               <div class="gymfit">
                                 <img id="gymfitimg" src="${banner[0]}" alt="gymfit" />
                               </div>
                             </div>

                             <div class="one">
                               <h2 class="stories">${name[0]}</h2>
                               <p class="passage">${description[0]}</p>
                               <ul class="tags">
                                 <li>${technologies[0].tech1}</li>
                                 <li>${technologies[0].tech2}</li>
                                 <li>${technologies[0].tech3}</li>
                               </ul>
                               <button id="show" class="button cbtn">See Project</button>
                             </div>
                           </div>
                           <div class="recentworkscontainer">
                             <div class="two" style="background-image: url(${banner[1]}); background-repeat: no-repeat;
                             background-position-x: 24px;
                             width: 352px;
                             height: 386px;
                             margin-bottom: 24px;">
                               <h2 class="stories2">${name[1]}</h2>
                               <p class="passage2">${description[1]}</p>
                               <ul class="tags2">
                                 <li>${technologies[1].tech1}</li>
                                 <li>${technologies[1].tech2}</li>
                                 <li>${technologies[1].tech3}</li>
                               </ul>
                               <button id="show2" class="button cbtn">See Project</button>
                             </div>
                             <div class="three" style="background-image: url(${banner[2]}); background-repeat: no-repeat;
                             background-position-x: 24px;
                             width: 369px;
                             
                             margin-bottom: 24px;">
                               <h2 class="stories3">${name[2]}</h2>
                               <p class="passage3">${description[2]}</p>
                               <ul class="tags3">
                                 <li>${technologies[2].tech1}</li>
                                 <li>${technologies[2].tech2}</li>
                                 <li>${technologies[2].tech3}</li>
                               </ul>
                               <button id="show3" class="button cbtn">See Project</button>
                             </div>
                             <div class="four">
                               <h2 class="stories4">${name[3]}</h2>
                               <p class="passage4">${description[3]}</p>
                               <ul class="tags4">
                                 <li>${technologies[3].tech1}</li>
                                 <li>${technologies[3].tech2}</li>
                                 <li>${technologies[3].tech3}</li>
                               </ul>
                               <button id="show4" class="button cbtn">See Project</button>
                             </div>
                             <div class="five">
                               <h2 class="stories5">${name[4]}</h2>
                               <p class="passage5">${description[4]}</p>
                               <ul class="tags5">
                                 <li>${technologies[4].tech1}</li>
                                 <li>${technologies[4].tech2}</li>
                                 <li>${technologies[4].tech3}</li>
                               </ul>
                               <button id="show5" class="button cbtn">See Project</button>
                             </div>
                             <div class="six">
                               <h2 class="stories6">${name[5]}</h2>
                               <p class="passage6">${description[5]}</p>
                               <ul class="tags6">
                                 <li>${technologies[5].tech1}</li>
                                 <li>${technologies[5].tech2}</li>
                                 <li>${technologies[5].tech3}</li>
                               </ul>
                               <button id="show6" class="button cbtn">See Project</button>
                             </div>
                             <div class="seven">
                               <h2 class="stories7">${name[6]}</h2>
                               <p class="passage7">${description[6]}</p>
                               <ul class="tags7">
                                 <li>${technologies[6].tech1}</li>
                                 <li>${technologies[6].tech2}</li>
                                 <li>${technologies[6].tech3}</li>
                               </ul>
                               <button id="show7" class="button cbtn">See Project</button>
                             </div>
                           </div>
                          `;
  all.insertBefore(recentWorks, document.getElementsByClassName('about')[0]);
  recentWorks.getBoundingClientRect();
}

window.addEventListener('load', dataLoader);

document.addEventListener('DOMContentLoaded', () => {
  const sectionModal = document.createElement('section');
  sectionModal.id = 'modal';
  sectionModal.className = 'modal';

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
  all.addEventListener('click', (e) => {
    let i = '';
    if (e.target.classList.contains('cbtn')) {
      if (e.target.id === 'show') {
        i = 0;
      } else if (e.target.id === 'show2') {
        i = 1;
      } else if (e.target.id === 'show3') {
        i = 2;
      } else if (e.target.id === 'show4') {
        i = 3;
      } else if (e.target.id === 'show5') {
        i = 4;
      } else if (e.target.id === 'show6') {
        i = 5;
      } else if (e.target.id === 'show7') {
        i = 6;
      }
      openModal(i);
    }
  });
});
