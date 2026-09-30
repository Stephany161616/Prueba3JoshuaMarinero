import { useMemo } from 'react';
import { STUDENT } from '../constants/student';

export default function useStudentInfo() {
  const initials = useMemo(
    () =>
      STUDENT.nombre
        .split(' ')
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase(),
    []
  );

  const fields = useMemo(
    () => [
      { id: 'nombre', icon: '👤', label: 'Nombre', value: STUDENT.nombre },
      { id: 'carnet', icon: '🪪', label: 'Carnet', value: STUDENT.carnet },
      { id: 'seccion', icon: '🏫', label: 'Sección y grupo', value: STUDENT.seccionGrupo },
    ],
    []
  );

  return { student: STUDENT, initials, fields };
}
