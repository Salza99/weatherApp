import { Offcanvas } from "react-bootstrap";

import SingleFavouriteCard from "./SingleFavouriteCard";

const CanvasForFavourite = ({ show, handleClose, favourites }) => {
  return (
    <Offcanvas className="nav-bg" show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <h4>Le tue ricerche Preferite</h4>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {favourites.length > 0 ? (
          favourites
            .sort((a, b) => {
              if (a.name < b.name) return -1;
              if (a.name > b.name) return 1;
              return 0;
            })
            .map((fav) => {
              return <SingleFavouriteCard key={fav.id} fav={fav} />;
            })
        ) : (
          <div>
            <h4>Aggiungi delle location come preferite, le visualizzerai qui!</h4>
          </div>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default CanvasForFavourite;
