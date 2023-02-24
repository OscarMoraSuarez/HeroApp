import { heroes } from "../Data/heros";

export const getHeroById=(id)=>{
  return heroes.find(hero => hero.id === id);
}