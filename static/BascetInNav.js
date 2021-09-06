const BasketInNav = {
    template:
        `<section class="nav-bacet">
            <div class="nav-bacet__card nav-bacet__card_header">
                <div class="nav-bacet__card__item nav-bacet__card__item_img-wrp">
                    <p>Product Name</p>
                </div>
                <div class="nav-bacet__card__item nav-bacet__card__item_amount">
                    <p>Amount</p>
                </div>
                <div class="nav-bacet__card__item nav-bacet__card__item_price">
                    <p>Price</p>
                </div>
                <div class="nav-bacet__card__item nav-bacet__card__item_total">
                    <p>Total price</p>
                </div>
            </div>
            <div class="nav-bascet__container">
                <bascet-in-nav-card
                    v-for="(card, idx) in $root.bascetCardView"
                    :cardss="$root.bascetCards"
                    :key="idx"
                    :amount="card.amount"
                    :name="card.product_name"
                    :price="card.price"
                    :id="card.id_product">
                </bascet-in-nav-card>
            </div>
            <div class="nav-bacet__footer">
                <div class="nav-bacet__footer__item nav-bacet__footer__item_header">
                    <p>Total purchase amount</p>
                </div>
                <div class="nav-bacet__footer__item nav-bacet__footer__item_amo">
                    <p>{{ $root.totallPrice }}</p>
                </div>
            </div>
        </section>
        `,
        methods:{
          
        },
        components:{
            'bascet-in-nav-card': BascetInNavCard
        }
}