import image from "../assets/heart.svg";

export default function FavoriteButton({
  isFavorite,
  handleToggleFavorite,
  handleToggle,
}) {
  return (
    <>
      <button type="button" onClick={() => handleToggleFavorite(slug)}>
        Favorites
      </button>
    </>
  );
}
