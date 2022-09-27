import { useState } from 'react';
import { dummyData } from '../dummy-data';

interface Employees {
  id: number;
  fullName: string;
  designation: string;
  gender: string;
  teamName: string;
}

export default function Employees() {
  const [employees, setEmployees] = useState<Array<Employees>>(dummyData);
  return (
    <div>
      {employees.map((e) => (
        <p>{e.fullName}</p>
      ))}
    </div>
  );
}
