import React from "react";
import { useParams} from "react-router-dom";
import { infoData } from "./InfoData";

function InfoPage(){
  const {slug} = useParams();

  const infopage = infoData.find(post => post.slug === slug);

    return(
      <>
       <h2>{infopage.title}</h2>
       <p>{infopage.slug}</p>
       <p>{infopage.author}</p>
       <p>{infopage.content}</p>
      </>
    );
}

export {InfoPage };