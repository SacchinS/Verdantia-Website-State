'use client'

import BodyHeading from '../components/bodyHeading';
import LandingContent from '../components/landingContent';
import RoleFilter from '../components/RoleFilter';
import DurationFilter from '../components/DurationFilter';
import LocationFilter from '../components/LocationFilter';
import PlaceFilter from "../components/PlaceFilter"
import {collection, doc, getDoc, getDocs, query} from "firebase/firestore";
import {db} from "@/app/firebase/config";
import ViewFilters from "@/app/components/viewFilters";

export default function Jobs() {

  return (
      <main>
          <LandingContent
              heading="Discover your \nNext Job"
              subheading="Explore your passions"
          />

          <div className="container mx-auto">
              <BodyHeading marginTop="8vw" marginBottom="2vw">Jobs at Verdantia</BodyHeading>

              <div className="grid grid-cols-1 md:grid-cols-2 ml-[8vw] mr-[8vw]">
                  <div className="md:col-span-1"> {/* Apply styling specifically for RoleFilter */}
                      <RoleFilter/>
                  </div>
                  <div className="md:col-span-1"> {/* Apply styling specifically for DurationFilter */}
                      <DurationFilter/>
                  </div>
                  <div
                      className="md:col-span-2"> {/* This div spans both columns, applying styling for LocationFilter */}
                      <LocationFilter/>
                      <PlaceFilter/>
                  </div>
              </div>
          </div>

          <div className='mb-[20vw]'></div>

      </main>

  );
}
