import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const LocationInfo = () => {
  const { id } = useParams();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const loadLocation = async () => {
      const resp = await fetch(`https://thesimpsonsapi.com/api/locations/${id}`);
      const data = await resp.json();
      setLocation(data?.result ?? data);
    };

    loadLocation();
  }, [id]);

  if (!location) return null;

  const path =
    location?.image_path ||
    location?.portrait_path ||
    location?.location_path ||
    null;

  const imgUrl = path
    ? `https://cdn.thesimpsonsapi.com/500${path}`
    : `https://cdn.thesimpsonsapi.com/500/location/${id}.webp`;

  const infoItems = [
    ["Name", location?.name],
    ["Town", location?.town],
    ["Use", location?.use],
    ["Type", location?.type],
    ["Category", location?.category],
    ["Address", location?.address],
    ["First appearance", location?.first_appearance],
  ].filter(([, value]) => value !== undefined && value !== null && value !== "");

  return (
    <div className="container py-4">
      <div className="row g-4 align-items-center">
        <div className="col-12 col-md-5 d-flex justify-content-center">
          <img
            src={imgUrl}
            alt={location?.name || "Location"}
            className="img-fluid"
            style={{ maxHeight: "420px", objectFit: "contain" }}
          />
        </div>

        <div className="col-12 col-md-7 text-center text-md-start">
          <h1 className="fw-bold mb-2">{location?.name}</h1>
          <p className="text-muted mb-0">
            {location?.description || location?.summary || location?.notes || " "}
          </p>
        </div>
      </div>

      <hr className="my-4 border-danger" />

      <div className="row text-center g-3">
        {infoItems.map(([label, value]) => (
          <div className="col-6 col-md" key={label}>
            <div className="text-danger text-uppercase small">{label}</div>
            <div>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
