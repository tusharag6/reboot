"use client";
import React, { useEffect, useState } from "react";
import FacilityCard from "@/app/_components/facility-card";
import { useSearchParams } from "next/navigation";
import { api } from "@/utils/api";
import { Facility } from "@/server/api/routers/facility";

const Facility = () => {
  const searchParams = useSearchParams();
  const city = searchParams.get("location") ?? "";
  const searchItem = searchParams.get("item");
  const [facilities, setFacilities] = useState<Facility[]>();

  const { data } = api.facilty.search.useQuery({
    city,
    searchItem,
  });
  useEffect(() => {
    if (data) {
      setFacilities(data);
    }
  }, [data]);
  console.log(facilities);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 pt-8 text-center lg:px-12 lg:pt-16">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          Discover Responsible E-Waste Facilities Near [Location]
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          Explore our network of e-waste collection and recycling facilities
          committed to sustainable practices. Together, we can turn electronic
          waste into environmental solutions.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {facilities?.map((facility) => (
            <FacilityCard {...facility} key={facility.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facility;
