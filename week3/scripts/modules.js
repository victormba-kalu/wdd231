import byuiCourse from './course.mjs';

import { setSectionSelection } from './sections.mjs';
// Note that the function is encased in squiggly brackets because it is a named export. The brackets are not required for a single import, but recommended for clarity. This function is not the default export of the module. It could be converted to a default export in the module, but it is not necessary.

import { setTitle, renderSections } from "./output.mjs";
document.querySelector("#enrollStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum);
  renderSections(byuiCourse.sections);
});
document.querySelector("#dropStudent").addEventListener("click", function () {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  byuiCourse.changeEnrollment(sectionNum, false);
  renderSections(byuiCourse.sections);
});

setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);