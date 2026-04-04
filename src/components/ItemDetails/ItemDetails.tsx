import type { IDetails } from "../../types/Details";

interface IItemDetails {
  details: IDetails | undefined;
}

function ItemDetails({ details }: IItemDetails) {
  const title = details?.title ?? details?.name;

  return (
    <div>
      <div>{title}</div>
      <div>{details?.overview}</div>
    </div>
  );
}

export default ItemDetails