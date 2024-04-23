export default function createIteratorObject(report) {
  const departments = Object.values(report);

  let currentDeptIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    [Symbol.iterator]: function () {
      return {
        next: function () {
          if (currentDeptIndex < departments.length) {
            const currentDepartment = departments[currentDeptIndex];
            if (currentEmployeeIndex < currentDepartment.length) {
              const employee = currentDepartment[currentEmployeeIndex];
              currentEmployeeIndex++;
              return { value: employee, done: false };
            } else {
              currentDeptIndex++;
              currentEmployeeIndex = 0;
              return this.next();
            }
          } else {
            return { done: true };
          }
        },
      };
    },
  };
}
