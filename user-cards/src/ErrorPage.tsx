import { useRouteError, isRouteErrorResponse, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

const ErrorPage: React.FC = () => {
  
  const navigate = useNavigate();
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <>
        <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{errorMessage}</i>
        </p>
        </div>
        <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>&larr; Go back</Button>
    </>
  );
}

export default ErrorPage;