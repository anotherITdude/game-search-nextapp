import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const SkeletonCard = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <CardBody width="350px">
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkeletonCard;
