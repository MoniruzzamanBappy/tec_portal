import { useEffect, useCallback, useState } from "react";

const useContextMenu = (ref) => {
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleContextMenu = useCallback(
    (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setShow(false);
      } else {
        event.preventDefault();
        setAnchorPoint({ x: event.pageX, y: event.pageY });
        setShow(true);
      }
    },
    [ref]
  );

  const handleClick = useCallback(() => (show ? setShow(false) : null), [show]);

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [handleClick, handleContextMenu]);
  return { anchorPoint, show };
};

export default useContextMenu;
