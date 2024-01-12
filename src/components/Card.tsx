import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const CardInfo: React.FC<CardProps> = ({ children, className }) => {
  return (
    <Card className={`${className || ""} bg-gray-500 m-3 p-3 w-4/5 rounded-lg`}>
      <CardHeader className="justify-between">
        <div>
          <h3>Title name</h3>
        </div>
        <div className="flex gap-5">
          {/* <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/images/hero-card-complete.jpeg"
                  width={270}
                /> */}
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
          Frontend developer and UI/UX enthusiast. Join me on this coding
          adventure!
        </p>
        <span className="pt-2">
          #FrontendWithZoey
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="justify-between">
        <div>
          <p>August 22, 2024</p>
        </div>
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src="/avatars/avatar-1.png"
          />
        </div>
      </CardFooter>
    </Card>
  );
};

export default CardInfo;
