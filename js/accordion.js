"use strict"

export default {
    accordion() {
        //! ACCORDION
        const allArticles = document.querySelectorAll('.article');

        for (let eachArticle of allArticles) {
            const exactParagraph = eachArticle.querySelector('.article__paragraph');
            const exactParagraphFullText = exactParagraph.innerHTML;
            const exactParagraphShortText = exactParagraph.innerHTML.slice(0, 21) + '...';
            let exactShowMore = eachArticle.querySelector('.show-more');

            exactParagraph.innerHTML = exactParagraphShortText;
            eachArticle.addEventListener("click", openAccordion, { capture: true })

            function openAccordion(event) {
                if (!eachArticle.classList.contains('_active')) {
                    eachArticle.classList.add('_active');
                } else {
                    eachArticle.classList.remove('_active');
                }

                if (!eachArticle.classList.contains('_active')) {
                    exactParagraph.innerHTML = exactParagraphShortText;
                    exactShowMore.textContent = "Show more"
                } else if (eachArticle.classList.contains('_active')) {
                    exactParagraph.innerHTML = exactParagraphFullText;
                    exactShowMore.textContent = "Show less"
                }
            }
        }

        let subArticleShowMore = document.querySelector('.sub-article__show-more');
        const subArticleDescription = document.querySelector('.sub-article-video-description');
        const subParagraph = document.querySelector('.sub-article-video__paragraph');
        const subParagraphFullText = subParagraph.innerHTML;
        const subParagraphShortText = subParagraph.innerHTML.slice(0, 21) + '...';

        if (window.innerWidth <= 1050) {
            subParagraph.innerHTML = subParagraphShortText;
        }

        subArticleShowMore.addEventListener("click", openSubArticle, { capture: true })

        function openSubArticle(event) {
            subArticleDescription.classList.toggle('_active');
            if (!subArticleDescription.classList.contains('_active')) {
                subParagraph.innerHTML = subParagraphShortText;
                subArticleShowMore.textContent = "Show more";
            } else if (subArticleDescription.classList.contains('_active')) {
                subParagraph.innerHTML = subParagraphFullText;
                subArticleShowMore.textContent = "Show less";
            }
        }
    }
}