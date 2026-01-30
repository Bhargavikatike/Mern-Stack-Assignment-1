let hasPaid = true;
let hasCompletedBasics = false;
let enrollMessage;
    if (hasPaid && hasCompletedBasics) 
    {
        enrollMessage = "Enroll Now";
    } 
    else 
    {
    enrollMessage = "Complete Requirements";
    }

console.log(enrollMessage);
