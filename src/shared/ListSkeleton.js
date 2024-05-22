import ReactPlaceholder from "react-placeholder/lib";
import { RectShape } from "react-placeholder/lib/placeholders";

const ListSkeleton = (props) => {
  const { rows } = props;
  return (
    <ReactPlaceholder
      type="rect"
      customPlaceholder={
        <div className="p-4">
          {[...Array(rows).keys()].map((item, index) => {
            return (
              <RectShape
                key={index}
                color={"#dedede"}
                style={{ width: "100%", height: 15, marginBottom: "20px" }}
              />
            );
          })}
        </div>
      }
    >
      {props.children}
    </ReactPlaceholder>
  );
};

ListSkeleton.displayName = "ListSkeleton";

export default ListSkeleton;
