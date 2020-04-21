const axios = require('axios')

class Github {
    static async getRepositories(repositorie) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repositorie}`)
            console.log(response.data);

        } catch(err) {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('fajzanetti/Rocketseat-Starter-Cursos');