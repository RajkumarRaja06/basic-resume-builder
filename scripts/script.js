'use strict';
const usernameEl = document.getElementById('username');
const userTitleEl = document.getElementById('userTitle');
const userExperienceEl = document.getElementById('userExperience');
const userAcademicDetailsEl = document.getElementById('userAcademicDetails');
const userSkillsEl = document.getElementById('userSkills');
const userProjectsEl = document.getElementById('userProjects');
const userContactEl = document.getElementById('userContact');
const emailEl = document.getElementById('email');
const formButtonEl = document.querySelector('.form-btn');

let formData;

const init = () => {
  let data = JSON.parse(localStorage.getItem('formData'));
  if (data !== null) {
    setData(data);
    return;
  }
};

formButtonEl.addEventListener('click', () => {
  formData = {
    name: usernameEl.value,
    title: userTitleEl.value,
    experience: userExperienceEl.value,
    academicDetails: userAcademicDetailsEl.value,
    skills: userSkillsEl.value,
    projects: userProjectsEl.value,
    contact: userContactEl.value,
    email: emailEl.value,
  };
  localStorage.setItem('formData', formData);
  localStorage.setItem('formData', JSON.stringify(formData));
});

const setData = (data) => {
  const {
    name,
    title,
    experience,
    academicDetails,
    skills,
    projects,
    contact,
    email,
  } = { ...data };

  usernameEl.value = name;
  userTitleEl.value = title;
  userExperienceEl.value = experience;
  userAcademicDetailsEl.value = academicDetails;
  userSkillsEl.value = skills;
  userProjectsEl.value = projects;
  userContactEl.value = contact;
  emailEl.value = email;
};

const Delete = () => {
  localStorage.clear();
  location.reload();
};

init();
