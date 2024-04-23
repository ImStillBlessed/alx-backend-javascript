export default function createReportObject(employeesList) {
  const getNumberOfDepartments = (employeesList) => {
    return Object.keys(employeesList).length;
  };
  return {
    allEmployees: employeesList,
    getNumberOfDepartments,
  };
}
