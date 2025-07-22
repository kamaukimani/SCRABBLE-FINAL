
{/* 
function TileRack({ player }) {
  return (
    <div className="tile-rack">
      <h3>{player.name}'s Tiles</h3>
      <div>
        {(player.rack || []).map((tile, i) => (
          <span key={i} className="tile">{tile}</span>
        ))}
      </div>
    </div>
  );
}

export default TileRack;
*/}
import React from 'react';

function TileRack({ player, selectedTile, setSelectedTile }) {
  return (
    <div className="tile-rack">
      <h3>{player.name}'s Tiles</h3>
      {player.rack.map((tile, i) => (
        <div
          key={i}
          className="tile"
          onClick={() => setSelectedTile(tile)}
          style={{
            border: tile === selectedTile ? '2px solid red' : '',
          }}
        >
          {tile}
        </div>
      ))}
    </div>
  );
}

export default TileRack;
