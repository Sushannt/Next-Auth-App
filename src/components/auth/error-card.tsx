import { CardWrapper } from "./card-wrapper";
import { TriangleAlertIcon } from "lucide-react";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to Login"
    >
      <div className="w-full flex justify-center items-center">
        <TriangleAlertIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
