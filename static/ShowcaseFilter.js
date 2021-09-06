
Vue.component('showcase-filter', {
    template:
        `
        <header class="filter">
            <div class="filter__main">
                <div class="option-select">
                    <input id="mfilter" type="checkbox" class="option-select-choff">
                    <label for="mfilter" class="option-select-lable">
                        <span>filter</span>
                    </label>
                    <div class="option-select-list">
                        <div class="filter__main__list-wrapper opened-wrapper">
                            <ul class="filter__main__list opened-filter filter__main__list_category">
                                <li class="filter__main__list__item select-item">CATEGORY</li>
                                <li class="filter__main__list__item">Accessories</li>
                                <li class="filter__main__list__item">Bags</li>
                                <li class="filter__main__list__item">Denim</li>
                                <li class="filter__main__list__item">Hoodies & Sweatshirts</li>
                                <li class="filter__main__list__item">Jackets & Coats</li>
                                <li class="filter__main__list__item">Polos</li>
                                <li class="filter__main__list__item">Shirts</li>
                                <li class="filter__main__list__item">Shoes</li>
                                <li class="filter__main__list__item">Sweaters & Knits</li>
                                <li class="filter__main__list__item">T-Shirts</li>
                                <li class="filter__main__list__item">Tanks</li>
                            </ul>
                            <ul class="filter__main__list closed-filter filter__main__list_brands">
                                <li class="filter__main__list__item select-item">brends</li>
                                <li class="filter__main__list__item">Accessories</li>
                                <li class="filter__main__list__item">Bags</li>
                                <li class="filter__main__list__item">Denim</li>
                                <li class="filter__main__list__item">Hoodies & Sweatshirts</li>
                                <li class="filter__main__list__item">Jackets & Coats</li>
                                <li class="filter__main__list__item">Polos</li>
                                <li class="filter__main__list__item">Shirts</li>
                                <li class="filter__main__list__item">Shoes</li>
                                <li class="filter__main__list__item">Sweaters & Knits</li>
                                <li class="filter__main__list__item">T-Shirts</li>
                                <li class="filter__main__list__item">Tanks</li>
                            </ul>
                            <ul class="filter__main__list closed-filter filter__main__list_designers">
                                <li class="filter__main__list__item select-item">designers</li>
                                <li class="filter__main__list__item">Accessories</li>
                                <li class="filter__main__list__item">Bags</li>
                                <li class="filter__main__list__item">Denim</li>
                                <li class="filter__main__list__item">Hoodies & Sweatshirts</li>
                                <li class="filter__main__list__item">Jackets & Coats</li>
                                <li class="filter__main__list__item">Polos</li>
                                <li class="filter__main__list__item">Shirts</li>
                                <li class="filter__main__list__item">Shoes</li>
                                <li class="filter__main__list__item">Sweaters & Knits</li>
                                <li class="filter__main__list__item">T-Shirts</li>
                                <li class="filter__main__list__item">Tanks</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
            <div class="filter__second">
                <div class="option-select">
                    <label for="ch-color" class="option-select-lable">
                        <span>TRENDING NOW</span>
                    </label>
                    <input id="ch-color" type="checkbox" class="option-select-choff">
                    <div class="option-select-list">
                        <div class="checkbox">
                            <input type="checkbox" id="red" name="red" checked>
                            <label class="checkbox-label" for="red">xs</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" id="green" name="green">
                            <label class="checkbox-label" for="green">xs</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" id="black" name="black">
                            <label class="checkbox-label" for="black">xs</label>
                        </div>
                    </div>
                </div>
                <div class="option-select">
                    <label for="ch-size" class="option-select-lable">
                        <span>SIZE</span>
                    </label>
                    <input id="ch-size" type="checkbox" class="option-select-choff">
                    <div class="option-select-list">
                        <div class="checkbox">
                            <input type="checkbox" id="red-blue" name="red-blue" checked>
                            <label class="checkbox-label" for="red-blue">xs</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" id="green-red" name="green-red">
                            <label class="checkbox-label" for="green-red">xs</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" id="black-yellow" name="black-yellow">
                            <label class="checkbox-label" for="black-yellow">xs</label>
                        </div>
                    </div>
                </div>
                <div class="option-select">
                    <label for="ch-quanti" class="option-select-lable">
                        <span>PRICE</span>
                    </label>
                    <input id="ch-quanti" type="checkbox" class="option-select-choff">
                    <div class="option-select-list">
                        <div class="checkbox">
                            <input type="checkbox" id="red-orange" name="red-orange" checked>
                            <label class="checkbox-label" for="red-orange">xs</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" id="green-white" name="green-white">
                            <label class="checkbox-label" for="green-white">xs</label>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" id="black-blue" name="black-blue">
                            <label class="checkbox-label" for="black-blue">xs</label>
                        </div>
                    </div>
                </div>

            </div>
        </header>
        `
})