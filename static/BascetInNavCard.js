const BascetInNavCard = {
    template:
        `
        <div class="nav-bacet__card">
            <div class="nav-bacet__card__item nav-bacet__card__item_img-wrp">
                <img src="img/products/img1.png" alt="">
                <p>{{ name }}</p>
            </div>
            <div class="nav-bacet__card__item nav-bacet__card__item_amount">
                <p>{{ amount }}</p>
            </div>
            <div class="nav-bacet__card__item nav-bacet__card__item_price">
                <p>{{ price }}</p>
            </div>
            <div class="nav-bacet__card__item nav-bacet__card__item_total">
                <p>{{ price * amount }}</p>
            </div>
            <button class="nav-bacet__card__button"
                @click="$root.removeCard(id)"></button>
        </div>
        `,

        props:['name', 'price', 'id', 'cardss', 'amount'],
        data(){
            return{
            }
        },
        computed:{
         
        },
        methods:{
           
        }
}