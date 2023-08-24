import { Ui } from "./ui.module.js"

export class Details {
    constructor(id){
        document.getElementById('btnClose').addEventListener('click', ()=>{
            document.getElementById('details').classList.add('d-none')
            document.getElementById('games').classList.remove('d-none')
        })
        this.loadong  = document.querySelector('.loading')
        this.getDetails(id)
    }

    async getDetails(id){
        this.loadong.classList.remove('d-none')
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '97779eaeadmshcdbc539f9ae83a8p1bb96djsne9040f1b2cdb',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }
            const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}` , options)
            const response = await api.json()
            this.loadong.classList.add('d-none')

            console.log(response);
            new Ui().displayDetails(response)
    }
}
