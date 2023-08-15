/*class Witch {
    constructor(name, patron, house, colorEyes){
        this.name = name;
        this.patron = patron;
        this.house = house;
        this.colorEyes = colorEyes;
    }

    getName(){
        return `O nome do bruxo(a) é: ${this.name}`;
    }
    getHouse(){
        return `Ele(a) está na casa ${this.house}`;
    }
    getPatron(){
        return `Seu patrono é: ${this.patron}`;
    }
}


const witch1 = new Witch('Harry Potter', 'Deer', 'Grynffindor', 'Green');

console.log(witch1.getName());

class TypeWitch extends Witch {
    constructor(name, patron, house, colorEyes, typeWitch) {
        super(name, patron, house, colorEyes);
        this.typeWitch = typeWitch;
    }

    getTypeWitch() {
        if (this.typeWitch === 'p') {
            return "Este bruxo é sangue puro";
        }else if (this.typeWitch === 'M'){
            return "Este bruxo é Mestiço";
        }else{
            return "Este é um trouxa";
        }
    }
}

const Harry = new TypeWitch('Harry Potter', 'Cervo', 'Sonserina', 'Verde/Azul?', 'M');
console.log(Harry.getTypeWitch());
*/

class CamaraSecreta {
    constructor(name,pwd){
        this.name = name;
        let _pwd = pwd; //atributo privado.

        this.verfyPwd = (pwdInput) => {
            return pwdInput == _pwd; //True or false
        };
        this.accessChamber = () =>{
            let pwdInput = prompt("Digite a senha");
            if(this.verfyPwd(pwdInput)){
            console.log(`Bem-vindo a Camara Secreta ${this.name}`)
        } else{
            console.log("Acesso negado trouxa!")
        }
    };
}
}

const myAccess1 = new CamaraSecreta('Harry Potter', 'senha123');



myAccess1.name = 'HP';
myAccess1.pwd = '123';


myAccess1.accessChamber();

