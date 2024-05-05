export default function createReportObject(employeesList) {
  const getNumberOfDepartments = (employeesList) => Object.keys(employeesList).length;
  return {
    allEmployees: employeesList,
    getNumberOfDepartments,
  };
}
