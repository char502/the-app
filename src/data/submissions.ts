export interface SubData {
  id: string;
  institution_id: string;
  year: number;
  students_total: number;
  undergraduates_total: number;
  postgraduates_total: number;
  staff_total: number;
  academic_papers: number;
  institution_income: number;
  subjects: Subjects[];
}

export interface Subjects {
  name: string;
  academic_papers: number;
  students_total: number;
  student_rating: number;
}

export const submissionsData: SubData[] = [
  {
    id: "8F4B12A9-4D4C-C7FB-F9EC-EBDF75AB3933",
    institution_id: "EA8BBED7-4106-94AF-48DD-A1414E386AFB",
    year: 2017,
    students_total: 6043,
    undergraduates_total: 5672,
    postgraduates_total: 371,
    staff_total: 77,
    academic_papers: 7880,
    institution_income: 1738388,
    subjects: [
      {
        name: "Chemistry",
        academic_papers: 3267,
        students_total: 2598,
        student_rating: 4.1,
      },
      {
        name: "Biology",
        academic_papers: 2342,
        students_total: 1873,
        student_rating: 3.9,
      },
    ],
  },
  {
    id: "84CD666B-C267-2B5F-86A2-8C81EB83B855",
    institution_id: "EA8BBED7-4106-94AF-48DD-A1414E386AFB",
    year: 2019,
    students_total: 7424,
    undergraduates_total: 6945,
    postgraduates_total: 479,
    staff_total: 90,
    academic_papers: 4671,
    institution_income: 13201844,
    subjects: [
      {
        name: "Chemistry",
        academic_papers: 2732,
        students_total: 2752,
        student_rating: 4.1,
      },
      {
        name: "Biology",
        academic_papers: 1743,
        students_total: 2029,
        student_rating: 4.0,
      },
    ],
  },
  {
    id: "3A5EBCAC-3455-F4E5-C978-4A1CC1AA1D80",
    institution_id: "DEA4606B-4A21-D497-40E9-A5FB7589B536",
    year: 2017,
    students_total: 7994,
    undergraduates_total: 7212,
    postgraduates_total: 782,
    staff_total: 158,
    academic_papers: 6852,
    institution_income: 87167524,
    subjects: [
      {
        name: "Maths",
        academic_papers: 6852,
        students_total: 7994,
        student_rating: 4.4,
      },
    ],
  },
  {
    id: "3A5EBCAC-3455-F4E5-C978-4A1CC1AA1D80",
    institution_id: "DEA4606B-4A21-D497-40E9-A5FB7589B536",
    year: 2018,
    students_total: 8122,
    undergraduates_total: 7345,
    postgraduates_total: 785,
    staff_total: 162,
    academic_papers: 4932,
    institution_income: 37347888,
    subjects: [
      {
        name: "Maths",
        academic_papers: 4932,
        students_total: 8122,
        student_rating: 4.4,
      },
    ],
  },
  {
    id: "3A5EBCAC-3455-F4E5-C978-4A1CC1AA1D80",
    institution_id: "DEA4606B-4A21-D497-40E9-A5FB7589B536",
    year: 2019,
    students_total: 9087,
    undergraduates_total: 7921,
    postgraduates_total: 1137,
    staff_total: 178,
    academic_papers: 5883,
    institution_income: 15018544,
    subjects: [
      {
        name: "Maths",
        academic_papers: 5136,
        students_total: 8122,
        student_rating: 4.4,
      },
      {
        name: "Chemistry",
        academic_papers: 653,
        students_total: 1320,
        student_rating: 3.7,
      },
    ],
  },
  {
    id: "739F3B90-E501-7517-5C0E-2CD91402464F",
    institution_id: "8C8A804F-7A43-5840-4296-8A0117325921",
    year: 2017,
    students_total: 8844,
    undergraduates_total: 8193,
    postgraduates_total: 783,
    staff_total: 101,
    academic_papers: 6924,
    institution_income: 47502707,
    subjects: [
      {
        name: "Maths",
        academic_papers: 5136,
        students_total: 5122,
        student_rating: 4.1,
      },
      {
        name: "Chemistry",
        academic_papers: 1653,
        students_total: 1320,
        student_rating: 4.2,
      },
      {
        name: "Biology",
        academic_papers: 1743,
        students_total: 2029,
        student_rating: 4.4,
      },
    ],
  },
  {
    id: "FBE010A3-84AE-911C-D6E1-BBC360908E25",
    institution_id: "8C8A804F-7A43-5840-4296-8A0117325921",
    year: 2018,
    students_total: 8994,
    undergraduates_total: 8232,
    postgraduates_total: 777,
    staff_total: 111,
    academic_papers: 6778,
    institution_income: 91534309,
    subjects: [
      {
        name: "Maths",
        academic_papers: 5242,
        students_total: 5122,
        student_rating: 4.2,
      },
      {
        name: "Chemistry",
        academic_papers: 1191,
        students_total: 1320,
        student_rating: 4.1,
      },
      {
        name: "Biology",
        academic_papers: 1929,
        students_total: 2221,
        student_rating: 4.4,
      },
    ],
  },
];

// Consolidate the data by institution
export const consolidatedSubmissions: SubData[] = submissionsData.reduce(
  (acc, current) => {
    let itemIndex = acc.find(
      ({ institution_id }) => current.institution_id === institution_id
    );
    if (itemIndex) {
      // @ts-ignore
      itemIndex.students_total += current.students_total;
      // @ts-ignore
      itemIndex.undergraduates_total += current.undergraduates_total;
      // @ts-ignore
      itemIndex.postgraduates_total += current.postgraduates_total;
      // @ts-ignore
      itemIndex.staff_total += current.staff_total;
      // @ts-ignore
      itemIndex.academic_papers += current.academic_papers;
      // @ts-ignore
      itemIndex.institution_income += current.institution_income;
      // @ts-ignore
      if (itemIndex.subjects.name === 'Chemistry') {
        // @ts-ignore
        itemIndex.subjects.academic_papers += current.subjects.academic_papers
        // @ts-ignore
         itemIndex.subjects.students_total += current.subjects.students_total
        // @ts-ignore
      } else if (itemIndex.subjects.name === 'Biology') {
        // @ts-ignore
       itemIndex.subjects.academic_papers += current.subjects.academic_papers
        // @ts-ignore
         itemIndex.subjects.students_total += current.subjects.students_total
         // @ts-ignore
      } else if (itemIndex.subjects.name === 'Maths') {
        // @ts-ignore
        itemIndex.subjects.academic_papers += current.subjects.academic_papers
         // @ts-ignore
         itemIndex.subjects.students_total += current.subjects.students_total
      }
      
      // itemIndex.subjects.reduce((subAcc, subCurrent) => {
      //   // @ts-ignore
      //   // let subItemIndex = subAcc.find(({ name }) => subCurrent.name === name);
      //   if (subItemIndex) {
      //     subItemIndex.academic_papers += subCurrent.academic_papers;
      //   } else {
      //     subAcc.push(subCurrent);
      //   }

      //   return subAcc;
      // });
    } else {
      // @ts-ignore
      acc.push(current);
    }
    return acc;
  },
  []
);
