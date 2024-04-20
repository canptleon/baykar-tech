import React, { memo } from "react";

interface Props {
  statusCode: number;
  description?: string;
}

function NotFound(props: Props) {
  const { statusCode, description } = props;

  return (
    <>
      <div>{statusCode}</div>
      <div>{description && description?.length > 0 ? description : "not found page"}</div>
    </>
  );
}

export default memo(NotFound);
