// LocationFilter.tsx
'use client'
import {
  collection,
  addDoc,
  getDoc,
  QuerySnapshot,
  query,
  onSnapshot,
  deleteDoc,
  doc, setDoc, updateDoc, arrayUnion, getDocFromCache,
} from 'firebase/firestore';
import {db} from '@/app/firebase/config'



const LocationFilter: React.FC = async () => {


  const addPlaceFilter = async (place:string) => {
    const ref = doc(db, "selectedFilters", "selectedPlace");
    await updateDoc(ref, {
      places: arrayUnion(place)
    });
  }

  const addLocationFilter = async (location:string) => {
    const ref = doc(db, "selectedFilters", "selectedLocation");
    await updateDoc(ref, {
      location: location
    });
  }

  return (
      <div className="w-full mr-8 flex flex-col">
        <div className='mb-[1vw]' style={{fontFamily: "Bellota Text", fontSize: '1.5vw'}}>Location</div>
        <div>
          <select
              className="shadow-md w-full border border-gray-300 rounded p-3 text-lg"
              style={{fontFamily: "Bellota Text"}} // Adjust height and font size
              value={''}
              onChange={(e) => addLocationFilter(e.target.value)}
          >
            <option value="">Select Location</option>
            <option value="Seattle, WA">Seattle, WA</option>
            <option value="London, UK">London, UK</option>
            <option value="New York City, NY">New York City, NY</option>
          </select>
        </div>
        <div className="flex justify-center mt-4 gap-10 flex-grow">
          <button
              style={{fontFamily: "Bellota Text", fontSize: '1.5vw', width: '100%'}} // Set width to 100%
              className={"shadow-md h-[4vw] px-4 py-2 border rounded"}
              onClick={() => addPlaceFilter('In Person')}
          >
            In Person
          </button>
          <button
              style={{fontFamily: "Bellota Text", fontSize: '1.5vw', width: '100%'}} // Set width to 100%
              className={"shadow-md h-[4vw] px-4 py-2 border rounded"}
              onClick={() => addPlaceFilter('Hybrid')}
          >
            Hybrid
          </button>
          <button
              style={{fontFamily: "Bellota Text", fontSize: '1.5vw', width: '100%'}} // Set width to 100%
              className={"shadow-md h-[4vw] px-4 py-2 border rounded"}
              onClick={() => addPlaceFilter('Remote')}
          >
            Remote
          </button>
        </div>
      </div>

  );
};

export default LocationFilter;
