
const PageNotFound = () => {
  return (
    <div className="not-found-page d-flex justify-content-center align-items-center">
      <div className="not-found-card text-center p-5 shadow-sm rounded">
        <h1 className="display-4 mb-3">404</h1>
        <h2 className="mb-3">Page Not Found</h2>
        <p className="text-muted">
          The route you entered does not exist. Please check the URL and try again.
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;