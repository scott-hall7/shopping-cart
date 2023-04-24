import Grass from "../../assets/grass.png"
import Rain from "../../assets/rain.png"
import Bread from "../../assets/bread.png"
import Coffee from "../../assets/coffee.png"
import Gas from "../../assets/gas.png"
import Books from "../../assets/books.png"
import Fire from "../../assets/fire.png"
import Car from "../../assets/car.png"
import Success from "../../assets/success.png"

const products = [
    {name: "Fresh Cut Grass", img: `${Grass}`, cost: 10},
    {name: "Rain on Pavement", img: `${Rain}`, cost: 15},
    {name: "Baking Bread", img: `${Bread}`, cost: 10},
    {name: "Grinding Coffee", img: `${Coffee}`, cost: 20},
    {name: "Gasoline", img: `${Gas}`, cost: 5},
    {name: "Old Books", img: `${Books}`, cost: 10},
    {name: "Campfire", img: `${Fire}`, cost: 15},
    {name: "New Car Smell", img: `${Car}`, cost: 20},
    {name: "The Smell of Success", img: `${Success}`, cost: 50}
];

export default products;