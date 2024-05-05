export default function createIteratorObject(report) {
  const departments = Object.values(report);

  let currentDeptIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    [Symbol.iterator]: function name() {
      return {
        next: function name2() {
          if (currentDeptIndex < departments.length) {
            const currentDepartment = departments[currentDeptIndex];
            if (currentEmployeeIndex < currentDepartment.length) {
              const employee = currentDepartment[currentEmployeeIndex];
              currentEmployeeIndex += 1;
              return { value: employee, done: false };
            }
            currentDeptIndex += 1;
            currentEmployeeIndex = 0;
            return this.next();
          }
          return { done: true };
        },
      };
    },
  };
}
