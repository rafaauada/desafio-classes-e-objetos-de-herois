class hero{
    constructor(herosName , herosAge , herosClass , herosAttack , enemy = "inimigo"){
        this.herosName = herosName;
        this.herosAge = herosAge;
        this.herosClass = herosClass;
        this.herosAttack = herosAttack;
        this.enemy = enemy;
    }

    herosInfo(){

    }

    singleFight(){
        console.log(`Enquanto andava pela floresta, o ${this.herosClass} ${this.herosName} encontrou um ${this.enemy} e percebeu que precisaria utilizar as suas habilidades de ${this.herosClass} para derrotá-lo!`)
        console.log(`Sendo assim, ${this.herosName} rapidamente o atacou com ${this.herosAttack}, um ataque extremamente efetivo e certeiro, derrotando o ${this.enemy} e podendo seguir pela floresta sombria...`)
    }

    groupFight(){

    }
}

let wizard = new hero ("Blizzard","697","mago","magia glacial","centauro")

wizard.singleFight()