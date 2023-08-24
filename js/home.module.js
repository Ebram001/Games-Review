import { Details } from "./detail.module.js";
import { Ui } from "./ui.module.js";

export class Home {
    constructor(){
        document.querySelectorAll(".nav-link").forEach((link) => {
            link.addEventListener('click', ()=> {
                this.callingApiCat(link)
                const category = link.getAttribute("data-category")
                this.getGames(category)
            });
        });
        this.loading =document.querySelector('.loading')
        this.details =document.getElementById('details')
        this.games =document.getElementById('games')
        this.ui = new Ui
        this.getGames('mmorpg')
    }

     callingApiCat(link) {
        document.querySelector(".navbar-nav .active").classList.remove('active');
        link.classList.add('active');
    }


    async getGames(cat){
        this.loading.classList.remove("d-none")
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '97779eaeadmshcdbc539f9ae83a8p1bb96djsne9040f1b2cdb',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
        const api = await fetch (`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}` , options)
        const response = await api.json()
        this.loading.classList.add("d-none")
        console.log(response);
        this.ui.displayGames(response);
        document.querySelectorAll('.card').forEach((card) => {
            card.addEventListener('click', ()=> {
                this.details.classList.remove('d-none');
                this.games.classList.add('d-none');
                this.detailsSetion = new Details(card.dataset.id);
            })
        })
    }
}