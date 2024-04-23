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

interface DurationFilterProps {
  onChange: (durations: string[]) => void;
}

const DurationFilter: React.FC  = async () => {

  const addDurationFilter = async (duration:string) => {
    const ref = doc(db, "selectedFilters", "selectedDuration");
    await updateDoc(ref, {
      durations: arrayUnion(duration)
    });

  }


  const durations = ['Full Time', 'Part Time', 'Internship'];

  return (
      <div className="absolute right-0 mr-[8vw]">
          <div className='mb-[1vw]' style={{fontFamily: "Bellota Text", fontSize: '1.5vw'}}>Duration</div>
          <div className="flex md:flex-col md:space-y-4">
              {durations.map(duration => (
                  <button
                      style={{fontFamily: "Bellota Text", fontSize: '1.5vw', marginBottom: '1vw'}}
                      key={duration}
                      className={"shadow-md w-[15vw] h-[5vw] py-2 border rounded self-start"}
                      onClick={() => addDurationFilter(duration)}
                  >
                      {duration}
                  </button>
              ))}
          </div>
      </div>
  );
};

export default DurationFilter;