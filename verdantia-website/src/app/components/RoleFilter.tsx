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




const RoleFilter: React.FC = async () => {


  const addRoleFilter = async (role:string) => {

    const ref = doc(db, "selectedFilters", "selectedRoles");
    await updateDoc(ref, {
      roles: arrayUnion(role)
    });
    return null;
  }

  const getFilters = async () => {
    const docRef = doc(db, "selectedFilters", "selectedRoles");
    const docSnap = await getDoc(docRef);

    const data = docSnap.data();
    const dataArr: string[] = []
    if (data){
      const dataArr = Object.values(data);
    }


    console.log(data);
    return dataArr;

  }

  const roles = ['Coordinator', 'Manager', 'Engineer', 'Scientist', 'Analyst'];

  return (
      <div>
        <div className='mb-[1vw]' style={{fontFamily: "Bellota Text", fontSize: '1.5vw'}}>Role</div>
        <div className="grid grid-cols-2 gap-[0vw]">
          <div>
            {roles.slice(0, 3).map(role => (
                <button
                    style={{fontFamily: "Bellota Text", fontSize: '1.5vw'}}
                    key={role}
                    className={"shadow-md block w-[15vw] h-[5vw] px-4 py-2 border rounded mb-[2vw]"}
                    onClick={() => addRoleFilter(role)}
                >
                  {role}
                </button>
            ))}
          </div>
          <div>
            {roles.slice(3).map(role => (
                <button
                    style={{fontFamily: "Bellota Text", fontSize: '1.5vw'}}
                    key={role}
                    className={"shadow-md block w-[15vw] h-[5vw] px-4 py-2 border rounded mb-[2vw]"}
                    onClick={() => addRoleFilter(role)}
                >
                  {role}
                </button>
            ))}
          </div>
        </div>
      </div>
  );
};

export default RoleFilter;