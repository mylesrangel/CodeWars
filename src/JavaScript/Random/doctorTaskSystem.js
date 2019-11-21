
// We've built a web platform that powers our pharmacy and one of its core services is the Task system. A task is a single unit of work for an employee. There are many types of tasks, including but not limited to:

// - responding to a patient's message
// - requesting a renewal from a doctor
// - conducting a clinical assessment
// - troubleshooting an insurance rejection

// We want an employee to click a button and get the next task to work on using the following requirements: 

// - Each employee has a role that determines the types of tasks they can complete. For example, only pharmacists can conduct clinical assessments while only billing specialists can respond to a patient question about insurance billing.
// - Each task type has an expected turnaround time. For example, we want to complete  "respond to patient message" tasks within 30 minutes of being created and complete "troubleshoot insurance rejection" tasks within 3 hours of being created. An employee should get the task that is closest to missing its turnaround time.

// Your challenge is to write the code for a get_next_task method that accepts an employee object and returns the correct task object for that employee. By the end, you should have running code that you can demonstrate meets the requirements with either test data or actual tests.


class TasksTracker{
    constructor(id, type, time){
      this.id = id;
      this.type = type;
      this.time = time;
    }
  }
  
  
  class Employee{
    constructor(id, title){
      this.id = id;
      this.title = title;
  
    } 
  }
  
  const TASK_TYPES = {
    respond: "respond to patient message",
    clinical_assessment: "clinical assessment",
  }
  
  const EMPLOYEE_TITLES = {
    pharmacist: "pharmacist",
    doctor: "doctor",
  }
  
  //if an employlee_title has a TASK_TYPE of more than one, then I need to refactor
  //I.E.[EMPLOYEE_TITLES.doctor]: [TASK_TYPES.respond] , [TASK_TYPE.operation] //wont check for operation
  const EMPLOYEE_TITLES_TO_TASK_TYPES = {
    [EMPLOYEE_TITLES.doctor]: [TASK_TYPES.respond],
    [EMPLOYEE_TITLES.pharmacist]: [TASK_TYPES.clinical_assessment]
  }
  
  
  //creates a random list of tasks based on TASK_TYPES
  //Testing purposes
  function randomizeTasks(){
      
      //set all the values in TASK_TYPES to taskType
      let taskType = Object.values(TASK_TYPES);
  
      //object to hold all the tasks
      let listsOfTasks = [];
      
      for(let i = 0; i<10; i++){

          listsOfTasks.push( new TasksTracker(   
          //Task ID
          i,
          //Task Type                               
          taskType[Math.floor(Math.random() * 2)],
          //random number to determine next in line
          Math.floor(Math.random() * 100) + 1 ))
      }
      
      //console.log("List of tasks" , listsOfTasks);
      //console.log("Task type: ", TASK_TYPES);
      //console.log("Task type length: ", TASK_TYPES.length);
      
      //sort the array decending based on time
      let sortedListsOfTasks = listsOfTasks.sort((a,b) => (b.time - a.time))
      
      
      return sortedListsOfTasks;
  }
  
  
  function get_next_task(employee, taskTracker){
      
  
      //checking data for employee
          console.log("Employee " , employee);
      //checking data for taskTracker
          console.log("\n\ntaskTracker in get_next_task function: " , taskTracker);
      
    
      const employeeTitle = employee.title;
  
      
      for(let i = 0; i < taskTracker.length; i++){
          
          if(taskTracker[i].type == EMPLOYEE_TITLES_TO_TASK_TYPES[employeeTitle]){
              return taskTracker[i];
          }
          
      }
      
      return "No Task found "
  }
  
  
  
  
  //creates a fake lists of tasks
  let taskTracker = randomizeTasks();
  //console.log("Task tracker main function: ", taskTracker.length);
  
  
  const employee1 = new Employee(0, EMPLOYEE_TITLES.pharmacist);
  const employee2 = new Employee(1, EMPLOYEE_TITLES.doctor);
  
  
  console.log("\n\nYour task is: " , get_next_task(employee2 , taskTracker));