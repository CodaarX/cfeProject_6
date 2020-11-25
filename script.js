// Please check for your names, thats the method you will be working with....thanks    
 

let School = {
                    name: " King's College",
                     address: " Lagos ",
                     student: [],
                      staff: [],


       // Adenike              
        getAllStudents: function(){},
        getStudent: function(id){},

        //  Balikisu
        modifyStudent: function(id){},
        registerStudent: function(name, middlename, surname, state, age, gender, sclass, schoolfee){},

        //  Asiyah
        employStaff: function(name, middlename, surname, state, age, gender, subject, yearsOfExperience, qualification, contact, salary){},
        getAllStaffs: function(){},

        // Samuel
        getStaffId: function(id){},
        modifyStaff: function(id){},

        // Aminat animashaun , please use a splice method for the delete
        deleteStaff: function(id){},

        
        // faith
        getStudentByClass: function(){},
        deleteStudent: function(id){},
        
   
        // Sunday
        SortStudentByName: function(){},

        // michael
       
        // This method gets school accounts by adding all the school fees, and all staff salaries separately. then subtracting both from each other.
        getSchoolAccount: function(){
              for (let i = 0; i < School.student.length; i++){
                  studentsFeesRevenue += parseInt(School.student[i].schoolfee)    
                  staffSalaryCost += parseInt(School.staff[i].salary)
                  schoolAccount = studentsFeesRevenue - staffSalaryCost
               }   return schoolAccount
          },

        // this method gets all necessaryinformation about the school
       getSchoolInfo: function(){
              return {"name": this.name, "address": this.address, "students": this.getAllStudents(), "staff": this.getAllStaff(), "account": this.getSchoolAccount()}
       },
    
 };      
    
    
    
    
   