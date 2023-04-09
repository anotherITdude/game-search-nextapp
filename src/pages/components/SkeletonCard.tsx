import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const SkeletonCard = () => {
  return (
    <Card width='300px' borderRadius={10} overflow={"hidden"}>
      <Skeleton height='200px' />
          <CardBody width='200px'>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkeletonCard;
