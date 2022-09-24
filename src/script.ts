import {Cerveja} from "./Cerveja"
import { Estoque } from "./estoque";


const cerveja: Cerveja = new Cerveja();

cerveja.guardarEstoque('Guardado com sucesso!');

const numeros: number[] = [];
const cervejas: Cerveja[] = [];

const cerveja1 = new Cerveja('Brahma');
const cerveja2 =new Cerveja('Itaipava');
const cerveja3 = new Cerveja('Skol');


cervejas.push(cerveja1,cerveja2,cerveja3);


