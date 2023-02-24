"use strict"

export default {
    searchByPage() {
        //! ПОИСК ПО СТРАНИЦЕ
        const searchInput = document.querySelector('#search-input');
        searchInput.addEventListener("input", searchPage);

        function searchPage() {
            //? Получаем значение из текстового поля
            let searchText = searchInput.value.trim();

            if (searchText !== '') {
                //? Ищем все элементы на странице, содержащие введенное пользователем слово
                let allElements = document.body.getElementsByTagName('*');
                for (let i = 0; i < allElements.length; i++) {
                    let eachElement = allElements[i];
                    if (eachElement.textContent.search(searchText) !== -1) {
                        eachElement.style.backgroundColor = 'yellow'; // Можно выделить найденный элемент желтым цветом
                        console.log(eachElement);
                    }
                }
            }
        }
    }
}