import { HeroPage } from "../pages";
import { Link } from "react-router-dom";

const CharactersByHero=({alter_ego,characters})=>{
  return(alter_ego===characters)?<></>:<p>{characters}</p>;
}

export const HeroCard = ({hero}) => {
  const {id,superhero,publisher,alter_ego,first_appearance,characters}=hero; 
  const heroImage =`assets/heroes/heroes/${hero.id}.jpg`;
  /* const charactersByHero = (<p>{characters}</p>); */
  
  
  return (
    <>
      <div className="col animate__animated animate__fadeIn">
        <div className="card mt-2">

          <div className="row no-gutters">

            <div className="col-4">
              <img src={heroImage} className="card-img" alt={superhero} />
            </div>

            <div className="col-8">

              <div className="card-body">

                <h5 className="card-title">{superhero}</h5>
                <p className="card-text">{alter_ego}</p>

                {/* {
                                ( alter_ego !== characters ) && charactesByHero
                                ( alter_ego !== characters ) && <p>{ characters }</p>
                            } */}
                <CharactersByHero characters={characters} alter_ego={alter_ego} />

                <p className="card-text">
                  <small className="text-muted">{first_appearance}</small>
                </p>

                <Link to={`/hero/${id}`}>
                 See More..
                </Link>


              </div>

            </div>


          </div>

        </div>
      </div>
  </>
  )
}
