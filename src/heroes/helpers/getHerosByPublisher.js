import { heroes } from "../Data/heros";

export const getHerosByPublisher=(publisher)=>{
    const validPublishers = ['DC Comics','Marvel Comics'];
    if(!validPublishers.includes(publisher)){
        throw new Error(`${publisher} is not a valid publisher`);
    }
    return heroes.filter((hero)=>publisher===hero.publisher)

}