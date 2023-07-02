import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { infoData } from "./InfoData";

function InfoPage(){
  const navigate = useNavigate();
  const {slug} = useParams();

  const auth = useAuth();

  const infopage = infoData.find(post => post.slug === slug);

  const returnToInfo = () => {
    navigate("/Info");
  };
  
    return(
      <>

       <h2>{infopage.title}</h2>
       <button onClick={returnToInfo}>volver a Info</button>
       <p>{infopage.author}</p>
       <p>{infopage.content}</p>
       {auth.user?.isAdmin &&(
        <button>eliminar info</button>
       )}
      </>
    );
}

export {InfoPage };