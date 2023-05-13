'use strict';
//! DEPRECATED
export default {
  searchByPage() {
    //   const searchInput = document.querySelector('#search-input');
    //   searchInput.addEventListener('input', searchPage);

    //   function searchPage() {
    //     let searchText = searchInput.value.trim().toLowerCase();

    //     if (searchText !== '') {
    //       let allElements = document.body.querySelectorAll('*');

    //       allElements.forEach((eachElement) => {
    //         const foundText = eachElement.textContent.search(searchText) !== -1;
    //         console.log(foundText);

    //         if (foundText) {
    //           eachElement.style.color = 'yellow';
    //         }
    //       });
    //     }
    //   }
    const allElements = document.body.querySelectorAll('*');

    // console.log(allElements);
    
    allElements.forEach((eachElement) => {
      let testText = eachElement.innerText
        .split('\n')
        .join('')
        .toLowerCase()
        .trim();

      // let testText2 = testText.join(' ');

      // console.log(typeof testText);
      
      // const foundText = eachElement.textContent.search(searchText) !== -1;
      // console.log(foundText);

      // if (foundText) {
      //   eachElement.style.color = 'yellow';
      // }
    });
    
  },
};
