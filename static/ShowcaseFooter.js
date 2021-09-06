Vue.component('showcase-footer', {
    template:
        `
        <footer class="pagination">
            <div class="pagination__wrapper">
                <button class="pagination-button">
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.99414 2L3.99414 7L8.99414 12L7.99414 14L0.994141 7L7.99414 0L8.99414 2Z"
                            fill="black" />
                    </svg>
                </button>
                <ul class="pagination-list">
                    <li class="pagination-list__item pagination-list__item_checked"><a href="#">1</a></li>
                    <li class="pagination-list__item"><a href="#">2</a></li>
                    <li class="pagination-list__item"><a href="#">3</a></li>
                    <li class="pagination-list__item"><a href="#">4</a></li>
                    <li class="pagination-list__item"><a href="#">5</a></li>
                    <li class="pagination-list__item"><a href="#">6</a></li>
                    <li class="pagination-list__item"><a href="#">...</a></li>
                    <li class="pagination-list__item"><a href="#">20</a></li>
                </ul>
                <button class="pagination-button">
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.994141 12L5.99414 7L0.994141 2L1.99414 0L8.99414 7L1.99414 14L0.994141 12Z"
                            fill="black" />
                    </svg>
                </button>
            </div>
        </footer>
        `
})