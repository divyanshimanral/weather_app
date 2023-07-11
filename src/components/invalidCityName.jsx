import giphy from "../assets/others/giphy.webp";
export default function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="errorFallback">
      <h1>Invalid City name</h1>
      <div className="img">
        <img src={giphy} alt="giphy" />
      </div>
      <button className="btn" onClick={resetErrorBoundary}>
        Try Again
      </button>
    </div>
  );
}
