import React from "react";
import { Link, useParams} from "react-router-dom";
import { infoData } from "./InfoData";

function InfoPage(){
  const {slug} = useParams();

  const infopage = infoData.find(post => post.slug === slug);

    if (!infopage){
      return <p>Pagina no encontrada</p>
    }
    return(
      <>
       <h2>{infopage.title}</h2>
       <p>{infopage.author}</p>
       <p>{infopage.content}</p>
      </>
    );
}

export {InfoPage };