import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetail from "../hook/useServiceDetail";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useServiceDetail(serviceId)

  return (
    <div>
      <h1>ServiceDetail {service?.name}</h1>
      <div className="text-center">
        <Link to={`/checkout/${serviceId}`}><button className="btn btn-primary">Check Out</button></Link>
      </div>
    </div>
  );
};

export default ServiceDetail;
