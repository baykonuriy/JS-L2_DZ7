const App = new Vue({
    el: '#app',
    data: {
        products: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
        cards:[],
        bascetCards:[],
        bascetCardView:[],
        totallPrice: 0
    },
    methods:{
        async addCardToBascetBack(data){
            const res = await fetch('/api/user-product',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const productInBascet = await res.json()
            console.log('back',productInBascet)
        },
        addCardToBascet(card){
            console.log(card)
            card.amount = 0
            this.bascetCards.push(card)
            if (this.bascetCards.length == 1) {
                this.bascetCards[0].amount = 1;
            }
            if (this.bascetCards.length > 1) {
                for (let i = 0; i < this.bascetCards.length; i++) {
                    if (card.product_name == this.bascetCards[i].product_name) {
                        this.bascetCards[i].amount = this.bascetCards[i].amount + 1;
                    }
                }
            }
            this.bascetCardView = [...new Set(this.bascetCards)];
            for(let key in this.bascetCards){
                this.totallPrice += this.bascetCards[key].price 
            }
            this.addCardToBascetBack(card)
            console.log('front total',this.bascetCards)
            console.log('front view',this.bascetCardView)
        },
       async removeCard(id){
            await fetch(`/api/user-product/${id}`, {method: 'DELETE'})
            this.bascetCards = this.bascetCards.filter(c => c.id_product != id)
            this.bascetCardView = [...new Set(this.bascetCards)];
            if(this.bascetCards.length == 0){
                this.totallPrice = 0
            }
            else{
                this.totallPrice = 0
                for(let key in this.bascetCards){
                    this.totallPrice += this.bascetCards[key].price
                }
            }
            
            console.log('front total',this.bascetCards)
            console.log('front view',this.bascetCardView)
        }
    },
    async mounted(){
        const res = await fetch('/api/product')
        this.cards = await res.json()
    },

    components:{
        'show-case-card': ShowCaseCard,
        'nav-header': NavHeader,
        'basket-in-nav': BasketInNav,
        'bascet-in-nav-card': BascetInNavCard
    }
   
})


